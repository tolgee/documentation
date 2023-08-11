---
slug: how-to-setup-tolgee-with-nextjs-app-router
title: 'How to setup Tolgee with Next.js App Router'
authors: [sgranat]
description: 'Unlocking in-context localization on the server: A Guide to Integrate Tolgee with Next.js' New App Router and Server Components'
tags: [next.js, server components, react]
---

With the introduction of Next.js 13 and the app router featuring React server components, there has been a strong push to enable Tolgee to work within this new paradigm.

Server components are a stripped-down version of regular components without React hooks but with async capabilities. Let's see, how we can set them up with Tolgee.

Considering the app router is still in beta and Next.js API adjustments might occur, we opted for this article (instead of creating an npm package right away) to explain how Tolgee can work with the server.

<!--truncate-->

> #### How Tolgee In-Context Works
>
> Tolgee's unique method of enabling users to directly edit translations within the app is based on inserting [invisible characters](https://tolgee.io/js-sdk/wrapping) next to the actual translations. This creates a kind of `watermark` for each translation, making it detectable in the DOM and allowing precise localization.
> This approach offers a non-intrusive way to empower users to translate in the context of their app.

### The General Plan

For server components, the approach involves including a complete key name within the invisible `watermark` characters. Additionally, the development translation files need to be loaded on the server to facilitate rendering. On the client side, the SDK will recognize the server-rendered `watermarks` and enable the in-context translation functionality.

# Setting Up the Configuration

To initiate a new project, we will create a fresh Next.js 13 project (with the app directory enabled):

```bash
npx create-next-app@latest
```

As the i18n support is currently limited for the app directory, we'll use an external library called next-intl to assist with routing and locale management.

For now, we need to install a beta version (updated as of the writing date) and the latest version of @tolgee/react:

```
npm install next-intl@3.0.0-beta.9 @tolgee/react
```

### Configuring `next-intl`

The folder structure needs to be adjusted to resemble the following:

```
├── next.config.js
├── middleware.ts
├── i18n
│   ├── en.json
│   └── de.json
├── tolgee
│   ├── shared.ts
│   ├── client.tsx
│   └── server.tsx
└── app
    └── [locale]
        ├── layout.tsx
        └── page.tsx
```

The app structure and middleware play essential roles in the next-intl setup. The Tolgee folder serves for both client and server configurations with shared properties. The i18n folder contains the static files (exported from the Tolgee platform or left empty for now).

Below is the configuration for the `middleware` file:

```tsx
// middleware.ts

import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'de'],
  defaultLocale: 'en',
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
```

> To gain a comprehensive understanding of how `next-intl` operates, check [their docs](https://next-intl-docs.vercel.app/docs/getting-started/app-router-server-components). We are only utilizing the necessary setup for proper routing, hence not all the listed configurations are required.

Now, let's establish a shared configuration that will apply to both the client and server.

> For this to work, create a project in tolgee platform, get the api key in integration section. Also I assume you have your exported language files in `i18n` folder (as is visible in the file structure above).

```tsx
// shared.ts

import { DevTools, Tolgee, FormatSimple } from '@tolgee/web';

export const ALL_LOCALES = ['en', 'de'];

export const DEFAULT_LOCALE = 'en';

const apiKey = process.env.NEXT_PUBLIC_TOLGEE_API_KEY;
const apiUrl = process.env.NEXT_PUBLIC_TOLGEE_API_URL;

export async function getStaticData(languages: string[]) {
  const result: Record<string, any> = {};
  for (const lang of languages) {
    result[lang] = (await import(`../i18n/${lang}.json`)).default;
  }
  return result;
}

export function TolgeeBase() {
  return (
    Tolgee()
      .use(FormatSimple())
      .use(DevTools())
      // Preset shared settings
      .updateDefaults({
        apiKey,
        apiUrl,
      })
  );
}
```

The client part remains largely unchanged from the `pages` directory setup. It serves the purpose of translating client components and also enables in-context functionality for server-rendered components.

```tsx
// client.tsx

'use client';

import { TolgeeBase } from './shared';
import { TolgeeProvider, useTolgeeSSR } from '@tolgee/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

type Props = {
  locales: any;
  locale: string;
  children: React.ReactNode;
};

const tolgee = TolgeeBase().init();

export const TolgeeNextProvider = ({ locale, locales, children }: Props) => {
  // This synchronizes Tolgee for the server and client's initial render,
  // ensuring proper initialization with language and cache  const tolgeeSSR = useTolgeeSSR(tolgee, locale, locales);
  const router = useRouter();

  useEffect(() => {
    const { unsubscribe } = tolgeeSSR.on('permanentChange', () => {
      // This ensures that server components refresh after
      // translation modifications using in-context
      router.refresh();
    });

    return () => unsubscribe();
  }, [tolgeeSSR, router]);

  return (
    <TolgeeProvider tolgee={tolgeeSSR} options={{ useSuspense: false }}>
      {children}
    </TolgeeProvider>
  );
};
```

The only significant change is the listener for the `permanentChange` event. This event triggers when a translation is updated through an in-context dialog, allowing for a server component refresh with `router.refresh`.

Now, let's proceed to the server part. As server components don't support React hooks, we need to recreate similar abstractions to those found in `@tolgee/react` ourselves. Fortunately, this process is relatively straightforward; we can essentially utilize vanilla Tolgee, with proper configuration and caching of the instance.

```tsx
// server.tsx

import { cache } from 'react';
import { useLocale } from 'next-intl';

import { TolgeeBase, ALL_LOCALES, getStaticData } from './shared';

export const getTolgeeInstance = cache(async (locale: string) => {
  const tolgee = TolgeeBase().init({
    // include all static data on the server, as the bundle size is not a concern here
    staticData: await getStaticData(ALL_LOCALES),
    observerOptions: {
      // include full information about the key into the watermark
      // make sure you have newest SDK for this feature
      fullKeyEncode: true,
    },
    // locale is already detected by next-intl package
    language: locale,
    // providing custom fetch function, which will disable default caching
    fetch: async (input, init) => {
      return fetch(input, { ...init, next: { revalidate: 0 } });
    },
  });

  await tolgee.run();

  return tolgee;
});

export const getTolgee = async () => {
  const locale = useLocale();
  const tolgee = await getTolgeeInstance(locale);
  return tolgee;
};

export const getTranslate = async () => {
  const tolgee = await getTolgee();
  return tolgee.t;
};
```

> Re-creation of `T` component is a bit more complicated, because we need to copy some code from `@tolgee/react`, but you check how to do it in the [example repo](https://github.com/tolgee/next-app-example).

### Let's set up the provider

Here is how we apply the `TolgeeNextProvider` in the `layout.tsx`

```tsx
// layout.tsx

import { notFound } from 'next/navigation';
import { useLocale } from 'next-intl';
import { ReactNode } from 'react';
import { TolgeeNextProvider } from 'tolgee/client';
import { getStaticData } from 'tolgee/shared';

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default async function LocaleLayout({ children, params }: Props) {
  const locale = useLocale();

  const locales = await getStaticData(['en', locale]);

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <TolgeeNextProvider locale={locale} locales={locales}>
          {children}
        </TolgeeNextProvider>
      </body>
    </html>
  );
}
```

This is an equivalent of `getInitialProps` (or its related methods) because this is the place where we load pick relevant locale already on the backend and supply it to the client component through the props.

> If you want to provide each page with different namespace, you can move the provider to the page files, however this example provides the translations globally

## How to use it

Let's see how we can localize server components:

```tsx
// page.tsx

import { getTranslate } from 'tolgee/server';
import { Todos } from './Todos';
import Link from 'next-intl/link';

import { Navbar } from 'components/Navbar';

export default async function IndexPage() {
  // because this is server component, use `getTranslate`
  // not useTranslate from '@tolgee/react'
  const t = await getTranslate();
  return (
    <main>
      <h1>{t('page-example-title')}</h1>
    </main>
  );
}
```

If everything is set up correctly, the 'page-example-title' should be `alt + click`able. Make sure you've defined your project credentials in the `.env.development.local` file.

For client components, you can use the regular `React` integration:

```tsx
'use client';

import { useTranslate } from '@tolgee/react';

export const ExampleClientComponent = () => {
  const { t } = useTranslate();

  return (
    <section>
      <span>{t('example-key-in-client-component')}</span>
    </section>
  );
};
```

### Switching Languages

For switching languages use the following code:

```tsx
'use client';

import React, { ChangeEvent, useTransition } from 'react';
import { usePathname, useRouter } from 'next-intl/client';
import { useTolgee } from '@tolgee/react';

export const LangSelector: React.FC = () => {
  const tolgee = useTolgee(['language']);
  const locale = tolgee.getLanguage();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }
  return (
    <select className="lang-selector" onChange={onSelectChange} value={locale}>
      <option value="en">🇬🇧 English</option>
      <option value="de">🇩🇪 Deutsch</option>
    </select>
  );
};
```

If you encounter any issues making it work, you can clone [the example app](https://github.com/tolgee/next-app-example) and kickstart your journey from there.

## Limitations of Server Components

Although in-context translation works with server components, there are some limitations compared to client components. Since the Tolgee cache on the server is separate, Tolgee can't automatically change the translation when creating a screenshot (unlike with client components, which swap the content if you've modified it in a dialog).

Furthermore, if you're using the [Tolgee plugin](https://chrome.google.com/webstore/detail/tolgee-tools/hacnbapajkkfohnonhbmegojnddagfnj), it won't affect the server's transition to dev mode. As a result, only the client switches, leaving server components non-editable in this mode.

## Conclusion and future steps

Given that server components exist in a completely distinct environment, I might create a separate next.js package in the future.

Moreover, the standard usage of Server components is yet to be fully determined. It's possible they might only be utilized for data fetching, but the future holds the answer.

> If you've got any suggestions or ideas for improvements, feel free to share them on our [slack](https://tolg.ee/slack) or open a Github issue. And if you're fond of Tolgee, don't forget to give us a [Github star](https://github.com/tolgee/tolgee-platform).
