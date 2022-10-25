---
slug: taking-localization-to-i18next-level
title: Taking localization to i18next level
description: Easy integration of i18next library with Tolgee localization tool without wasting time of developers while keeping in-context localization feature working.
authors: [sgranat]
tags: [tolgee, i18next, i18n]
image: '/img/blog/puzzle.png'
---

![Missing piece](/img/blog/puzzle.png)

The i18next library is one of the most popular choices for formatting translations in React applications. We decided, that we want to improve the experience by offering an easy integration with Tolgee. Localization is now uniquely accessible as your translations can be managed through opensource platform, without wasting precious Dev time.

<!--truncate-->

## Why i18next?

The i18next is very versatile and extensible and supports basically all features that you need from i18n library.

I was attracted to i18next mostly because it's React extension supports React elements interpolation through [Trans](https://react.i18next.com/latest/trans-component) component.

It's basically a way how to use custom elements in translations - it's really helpful when you for example need to have a link in the middle of translation. Normally you would need to have 3 separate translations and use them like this:

```jsx
<p>
  {t('key_1')}
  <a href="...">{t('key_2')}</a>
  {t('key_3')}
</p>
```

If we use Trans component we can do this with one translation:

```jsx
<Trans i18nKey="key_1" components={{ Link: <a href="..." /> }} />
```

while translation looking like `Text 1 <Link>Text 2</Link> Text 3`.
We'll get correct result with link inside. This way you can use any React elements and they will just get injected by the translation as child.

### Additional tools for i18next

There is also a quite rich family of additional plugins and tools, which can be very useful. One of them is ICU support for i18next, which comes in handy as that is go to format for Tolgee.

Another very useful utilities are [static extraction tools](https://www.i18next.com/how-to/extracting-translations), which can scan your code and reliably find all keys that you are using in your project. This can help you make sure that everything is translated or eliminate unused keys.

## How to integrate with Tolgee

We provide package [`@tolgee/i18next`](https://www.npmjs.com/package/@tolgee/i18next), which provides a "bridge" for integration.

So we'll need to install it, together with i18next, ICU parser and tolgee UI:

```
npm install i18next i18next-icu @tolgee/i18next @tolgee/ui
```

```js
import i18next from 'i18next';
import ICU from 'i18next-icu';
import { withTolgee } from "@tolgee/i18next";
import { UI } from "@tolgee/ui";

withTolgee(i18n, {
  apiUrl: "https://app.tolgee.io",
  apiKey: ...,
  ui: UI,
})
  .use(ICU)
  .init({
    lng: 'en',
    supportedLngs: ['en', 'fr'],
  })
```

Now you can manage your tranlsations through Tolgee platform, so anyone can do translate (not just Devs!). You also have the power of in-context translatins, so when you add new key, you can add initial translation directly through your app and quickly take screenshot, so everyone knows where the translation is located.

### How it works?

The `withTolgee` function is using i18next plugin system of backends, processors and also attaches event listeners and modifies default settings. We use our [invisible text technique](2021-12-17-invisible-characters-for-better-localization.md) for marking each translation through i18next processor, so in-context functionality works as expected.

TLDR: Tolgee acts as a translations source, using i18next for formatting and language management, while keeping in-context localization working.

### I want to try this!

We have example applications for [React](https://github.com/tolgee/react-i18next-example) and [Vue](https://github.com/tolgee/vue-i18next-example) and play around with them. If you connect them with Tolgee platform, you can see in-context localization in action.

![In-context example](/img/blog/i18next/incontext.jpg)

Read more in our [documentation](/docs/sdk/integrations/i18next/installation).
Learn also how to integrate i18next and Tolgee into your project and how easy and fast you can translate your React.js app using these tools [here](/blog/super-fast-react-localization-i18n-with-i18next-and-tolgee).

Thats it! :)
