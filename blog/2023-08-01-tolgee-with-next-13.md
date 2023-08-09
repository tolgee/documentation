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

This was a potential issue with the SSR, but it was possible to simply shift the rendering of the `watermarks` to the client, so the first render is without the watermarks (both on the server and client) and only on the second render we add the watermarks (which happens only on the client). Also Tolgee dev-mode is only activated on the client, so the development translation files are only loaded from client and replace the production ones once loaded.

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

Currently, we need to install a beta version (this version is up-to-date with the date of writing):

```
npm install next-intl@3.0.0-beta.9
```

And we also need the newest version of `@tolgee/react`:

```
npm i @tolgee/react
```

### Set up `next-intl`

Now we will have to adjust the folder structure to look something like this:

```
├── next.config.js
├── middleware.ts
├── i18n
│   ├── en.json
│   └── ...
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

Now let's create a shared configuration, which will apply for both client and server.

```ts
// shared.ts

import { DevTools, Tolgee, FormatSimple } from '@tolgee/web';

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

The client part is essentially the same as it was with `pages` directory:

```ts
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
    <TolgeeProvider
      tolgee={tolgeeSSR}
      options={{ useSuspense: false }}
      fallback="Loading"
    >
      {children}
    </TolgeeProvider>
  );
};
```
