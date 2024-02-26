---
slug: autonomous-localization
title: 'Say hi to Autonomous Localization (i18n) of your app'
image: /img/blog/2023-08-21-autonomous-localization/cover.png
authors: [jcizmar]
description: "Discover the future of app localization with Tolgee's Autonomous Localization. Our AI-powered translator understands context, providing reliable translations quickly and cost-effectively. Works seamlessly with major frameworks like React, Angular, Vue.js, Svelte, or JavaScript."
tags: [localization, web, typescript, javascript, AI]
---

It's the year 2023, and most of the companies developing localized apps spend a massive amount of time and money on
localization. For the uninitiated, localization might look simple. But it's not. Until now, the results of machine translators
were not good enough to be used in public-facing apps. But that's about to change.

![Cover](/img/blog/2023-08-21-autonomous-localization/cover.png)

<!--truncate-->

In the past months, we worked hard to release the Batch Operations feature. The last piece of the puzzle to enabling software
developing teams to translate their apps without the need to work with human translators or at least reduce the need
for them.
Say hi to **Autonomous Localization**. With the new batch operations feature, users can let their imported strings be
translated by machine translators, including [Tolgee Translator](/blog/tolgee-ai-translator); the translator who understands the context
of the strings used in your app.

## The benefits of autonomous localization

The most important benefit is definitely **translation cost reduction**. Working with translators might become very expensive, and in many cases, the quality is not even higher because many language service providers don't work with context either, and you have to rely on their knowledge of the scope, which is often insufficient.

Another significant benefit is the **speed of translation**. Working with translators is a complicated process with too many steps. Without
human translators, you can get your translations done in seconds.

## Why is machine translation with Tolgee so reliable?

The simple answer would be **"Because it uses the context."** The [missing context](/blog/context-gamechanger-localization)
was the core reason why translating apps with machine
translators like Google Translator or DeepL is so unreliable. For example, if you translate the label of the "save" button with any legacy
translator, the translator doesn't know the actual context, and the different meanings of the word can be translated
differently in a foreign language. So "save" can mean "Save data," "Save money," or "save animals." The same thing happens with the word "close."
Does it mean "Near" or "Dismiss"? You only know once you can see the context of the string, like surrounding keys in the app.

If the translator knows that the Save button is under some data form or that the Close button is close to some dialog title,
they translate correctly. And that's exactly what Tolgee does.

## Where the context comes from?

One of the most essential benefits of Tolgee is that it has its **native JS SDKs**.
These SDKs provide the [in-context dialog](/js-sdk/in-context),
where developers, translators or other team members can edit their strings.

This way, Tolgee collects the context every time you hit the update button.

![Editor](/img/blog/2023-08-21-autonomous-localization/editor.png)

If the context is available, you can see the ⚡ indicator in the translations section of the Tolgee platform.

![Platform](/img/blog/2023-08-21-autonomous-localization/platform.png)

Note a **context description** in the suggestions section in the screenshot.
It describes how the context was understood by the Tolgee Translator.

You can read more about the Tolgee translator and Tolgee Context [here](/blog/tolgee-ai-translator).

## How can I get my strings translated?

To get your strings translated, you basically have 2 options.

First option is to enable [auto-translation in Language settings](/blog/tolgee-ai-translator).
When auto-translation is enabled, Tolgee will automatically translate all new keys created in the Tolgee platform.

Second option is to use the **batch operations feature**. You can select all your untranslated keys and translate them in one click.

<video loop autoPlay muted style={{ maxWidth: "100%", margin: "0 auto" }}>

  <source src="/img/blog/2023-08-21-autonomous-localization/batch-video.webm"></source>
</video>

## Do I need human translators at all?

Well, most projects can replace the first translation with machine translation with the Tolgee Translator when the context is correctly provided.
However, **we still recommend some QA checks** against the localized app by native speakers to check everything fits. Sometimes the tone of voice or some other details can be slightly off. It's always a good idea to check whether translations haven't broken the layout of the app.

However, we see the future of localization in autonomous localization. Maybe next year, maybe later, the autonomous
translation would be sufficient to translate most of the apps on the market.

## What is the recommended way to localize my app with Tolgee Autonomous Localization?

To get maximum from Tolgee Autonomous Localization, you have to use [Tolgee SDKs](/js-sdk). Otherwise, the context is not extracted
from your app. The SDKs are available for all major framework like **React**, **Angular** **Vue.js**, **Svelte** or **plain JavaScript**.

The recommended way is to make developers add the keys to the Tolgee Platform via the [in-context dialog](/js-sdk/in-context).
So they add the key in the source code and add the translation to the Tolgee Platform by `Alt + Clicking` in the app.
That way, the context is provided, and the translation can be done with the so important context.

You can also add the context "manually" by hitting the update button in the [in-context editor](/js-sdk/in-context) of any key in your app.

Tolgee knows where the translations are located, we plan to add an auto-context-gathering mode, which will update the context automatically.

We also plan to gather context using the [CLI](/tolgee-cli) and [Figma Plugin](/integrations/figma), so even if you don't use Tolgee SDKs, you still will be
able to use all the power of Tolgee Autonomous Localization.

<video loop autoPlay muted style={{ maxWidth: "100%", margin: "0 auto" }}>

  <source src="/img/blog/2023-08-21-autonomous-localization/video.webm"></source>
</video>

## Next steps

As said, we are planning to add the context gathering mode and context gathering via the CLI and Figma Plugin. Also, the
Tolgee Translator is currently available only for Tolgee Cloud, so we plan to enable also self-hosted instances to use it.

To see the progress of other features, check out our [roadmap](https://tolgee.io/roadmap)

## TL;DR

- Autonomous Localization allows software development teams to autonomously translate their apps with machine translators.
- The Tolgee Machine translator understands the context of the strings used in apps, leading to reliable translations.
- Context is gathered through Tolgee's native JS SDKs that provide [in-context dialogs](/js-sdk/in-context).
- Translation can be automated in Language settings or done manually using the batch operations feature.
- Benefits of this approach include significant cost reduction and faster translation speed.
- While the initial translation can be done by machine translators, QA checks by native speakers are still recommended.
- To utilize Autonomous Localization effectively, it is recommended to use Tolgee SDKs.
- Future enhancements include context gathering mode and context collection via the CLI and Figma Plugin.

[![Autonomous translation banner](/img/blog/blog-banners/banner-autonomous.webp)](https://app.tolgee.io/sign_up)
