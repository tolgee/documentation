---
slug: tolgee-with-nextjs-app-router
title: 'Tolgee with Next.js app router'
authors: [sgranat]
description: 'How to setup Tolgee with Next.js new app router and server components.'
tags: [next.js, server components, react]
---

As next.js 13 brought app router with react server components. We've received quite a push to make Tolgee work with this new paradigm.

In the future we probable will release a dedicated package for Next.js, but as the API is still in early stages and most of the users will probably be enthusiasts like me. I've decided that it will be better to show a tutorial how to set it up yourself and show you our technology on a deeper level.

<!--truncate-->

> #### How tolgee in-context works?
>
> Tolgee unique way of allowing the user to click-and-edit every translation directly in your app, is based on inserting an invisible charactars next to the actual translations, so that each translation has kind of `watermark`, which is detectable in the DOM and we know where it is.
>
> This way we have a very non-invasive way how to enable users to translate **in the context** of their app.

## Bringing the in-context to the server

Our dilemma was that currently, we don't encode the whole key in the `watermark`, we assign each key a number and only that number is encoded into the invisible characters. The SDK keeps an internal record of the key numbering so that we can reverse this process when we are searching the DOM. The downside of this approach is that it is dependant on the internal information about the keys numbering and we can't easily decouple the rendering from the dom search.

> All this is done, because the `watermark` is using unicode zero-length characters for binary encoding the text. This means that resulting text is about 20 times longer than regular text and so it might have an performance penalty if we would have to encode/decode it on each render.

### The SSR way

This was a potential issue with the SSR, but it was possible to simply shift the rendering of the `watermarks` to the client, so the first render is without the watermarks (both on the server and client) and only on the second render we add the watermarks (which happens only on the client). Also, Tolgee dev-mode is only activated on the client, so the development translation files are only loaded from client and replace the production ones once loaded.

### Server components

React server components have one fundamental challenge - they are rendered only on the server. This is a different approach from SSR, where each component is "pre-rendered" on the server and then hydrated and re-rendered on the client.

So we can't use our SSR trick here. However, we can use the fact, that the server components are not re-rendered on the client so we can encode the whole key into the `watermark` because it will be encoded and decoded much less frequently than in client components and it allows us to split the process. So rendering is done on the server and then we search the dom on the client.

Also since server components can do async operations, we can completely switch Tolgee to `dev-mode` on the server which means loading the live translations from Tolgee platform already on the server.

### So to summarize it ...

For server components, we need to include a complete key name into the `watermark` and also load the dev translation files on the server so we can render them. On the client side, the SDK will pick up the server-rendered `watermarks` and enables the in-context functionality.

This has a small implication for user comfort - the translations can't be updated in-place locally, which is done when you edit the translation and you want to create a screenshot before it is saved to the platform. This is one of the tradeoffs with server-only rendering, which we can't simply overcome.

# Ok, let's set it up

To setup new project we'll create a new next.js 13 project (with app directory enabled):

```
npx create-next-app@latest
```

The support for i18n is currently very poor for the app directory, so we'll have to use an external library `next-intl` to help us with routing and locale management.

Currently, we need to install a beta version (this version is up-to-date with the date of writing) + latest version of `@tolgee/react`

```
npm install next-intl@3.0.0-beta.9 @tolgee/react
```

### Set up `next-intl`

Now we will have to adjust the folder structure to look something like this:

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

The app structure and the middleware are part of the `next-intl` setup.
The `tolgee` folder will serve for client and server setup with shared properties and in the i18n folder we will have our static files (exported from Tolgee platform or empty for now).

This is how we setup the `middleware` file:

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

> To get a full picture how next-intl works, check [their docs](https://next-intl-docs.vercel.app/docs/getting-started/app-router-server-components). We are using only their setup required for proper routing, so we don't need all the setup listed there.

Now let's create a shared configuration, which will apply to both client and server.

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
      // pre-set shared settings
      .updateDefaults({
        apiKey,
        apiUrl,
      })
  );
}
```

The client part is essentially the same as it was with `pages` directory. It serves for translating client components but enables in-context functionality for server-rendered components as well.

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
  // this will synchronize tolgee for server and client first render
  // and ensures that tolgee is properly initialized (with language and cache)
  const tolgeeSSR = useTolgeeSSR(tolgee, locale, locales);
  const router = useRouter();

  useEffect(() => {
    const { unsubscribe } = tolgeeSSR.on('permanentChange', () => {
      // this ensures server components refresh after
      // translation modification with in-context
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

The only thing we do differently is the listener for `permanentChange`, this event occurs when a translation is updated through an in-context dialog and we can refresh server components with the `router.refresh`.

Ok, now the server part. As server components don't support React hooks, we need to re-create similar abstractions as are in `@tolgee/react` ourselves. Fortunately, it's quite simple, we can basically use vanilla Tolgee, we just need to correctly cache the instance.

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

### Let's setup the provider

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

## Ok, now the action

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

If everything is set up correctly, the 'page-example-title' would be `alt + click`able. Make sure you've defined your project credentials in `.env.development.local` file.

In client components we can use regular `react` integration:

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

### Switching languages

For switching locales use the following code:

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

Ok, that's it. If you have issues with making it work, you can clone the [example app](https://github.com/tolgee/next-app-example) and start from there.

## Limitations of server components

Even though we can make in-context translating work with server components it has some limitations compared to client components. Because the Tolgee cache on a server is separated, Tolgee can't automatically change translation when creating a screenshot (with client components it swaps the content of the translation if you've already modified it in the dialog).

Also if you use the Tolgee plugin, it won't influence the server in switching to dev mode, so only the client will be switched and therefore server components will not be editable in this mode.

## Conclusion and future steps

Because server components exist in a completely different environment I'll probably create a separate next.js package in the future. However, the app router is still in beta and the next.js API may change. I've decided to create this article instead, to explain how can Tolgee work on the server.

It is also not entirely clear what will be the standard usage of Server components, it might as well be, that they will only be used for data fetching, but who knows?

> If you have any suggestions or ideas for improvements I'll be happy if you express them in our [slack](https://tolg.ee/slack) or create a Github issue. If you like Tolgee give us [Github star](https://github.com/tolgee/tolgee-platform).
