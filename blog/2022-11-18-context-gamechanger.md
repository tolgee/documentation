---
slug: context-gamechanger-localization

title: 'Context: Gamechanger in the Software Localization'

authors: [mchalupnikova]

image: '/img/blog/mt-tolgee/machine_translation_tolgee.png'

description: 'Learn how context is crucial in the process of software localization. Screenshots and in-context translation can immensely improve the quality of translations.'

tags: [in-context, localization, i18n]
---

Context is crucial for software localization as it allows translators to understand the content in its proper context and thus produce an accurate translation. Without context, a software translation can be inaccurate and lead to user confusion or errors. In some cases, the context can completely change the meaning of what is being translated, so it is essential to have a good understanding of the text's context before starting the localization process.

<!--truncate-->

**Context is king** in software localization. For example, let's have the word "SAVE" How do you translate it without knowing the context?

💾 Are you saving a password?<br/>
🐼 Are you saving an animal?<br/>
💰 Are you saving money?<br/>
⚽ Are you saving a goal?<br/>

In some languages other than English, the word "SAVE" can be translated differently in every mentioned case, according to the context and meaning.

## Don’t use spreadsheets for software localization

Spreadsheets are still, unfortunately, often used for software localization. Even using basic spreadsheets like Excel, Numbers, or Google Sheets may seem the most straightforward way how to prepare your strings for translation, the oppposite is true. Unfortunately, this way you loose all the essential context while translating only in table rows of [spreadsheets](https://medium.com/tolgee/why-using-spreadsheets-for-apps-localization-is-not-the-brightest-idea-58b89e046a96).

![spreadsheet localization](/img/blog/context-gamechanger/bart_context.png)

## How to provide context to translators?

How do you ensure translators have enough context to provide perfect translations of your app or website? The first way is to provide them **screenshots** of the app with highlighted text to translate. Screenshots can provide context that is otherwise difficult to convey in text alone. Context can be helpful in understanding the meaning of the text and translating it accurately. Screenshots can also show **how the text is used in its native environment**, which can help understand its purpose and audience.

Screenshots can help translators to understand the context of a piece of text better and thus **provide more accurate translations**. Screenshots can provide valuable visual information that can aid the translation process, such as identifying key elements or symbols in an image. For example, suppose a translator is unsure about the meaning of a word or phrase within a text. In that case, screenshots can help them to identify where it appears in the app or website and what other words or phrases are associated with it. Screenshots can also **help to identify any potential errors in the source text** that the original author may have missed. In case something has been misinterpreted or mistranslated during the initial writing process, screenshots can provide a visual record of what was originally intended.

Screenshots can also be a handy tool not only during the translation process but also for reference **during the editing and proofreading** stages of translation to ensure accuracy and consistency.

## Providing context of translation in Tolgee

Tolgee is an open-source tool for software localization. Besides other things, it offers excellent features to provide context to translators: a fast and simple generation of screenshots and in-context translating. Both of those features can remarkably improve the quality of translation.

![in-context translation](/img/blog/context-gamechanger/in_context_tolgee.png)

## 1. Screenshots in Tolgee

In some cases, screenshots may be the only available information about a particular piece of text, making them essential for accurate translation. In the Tolgee platform, you can manually upload up to 20 screenshots to every single translation key. The translator can then open it while translating and immediately see the context of the translated string. You can also use our [REST API](/api#tag/Screenshots/operation/uploadScreenshot) endpoint to upload a screenshot for a specific key.

![manual screenshots in tolgee](/img/blog/context-gamechanger/manual_screenshot.png)

To generate screenshots automatically, install [Tolgee tools plugin](https://chrome.google.com/webstore/detail/tolgee-tools/hacnbapajkkfohnonhbmegojnddagfnj) for the Google Chrome browser. With this plugin, you can [generate screenshots](/js-sdk/in-context#one-click-screenshots) by clicking the camera icon in Tolgee UI translation dialog. However, this Chrome plugin can do much more than the automated generation of screenshots! So continue reading.

![in-context plugin](/img/blog/context-gamechanger/translate_in_context.png)

## 2. In-context translating

The second crucial context feature in Tolgee is [in-context translating](/features/dev-tools#in-context). Translating in the context is the best way to avoid mistakes translators make because of missing context. Imagine you've got just words, strings, and phrases without knowing how they relate, what order they should be in, or where they are located in the app. With Tolgee, you can translate in-context [locally](https://tolgee.io/docs/web/in_context) or even on the production of your app. No need to edit large .json/.po/.whatever file: you can start to translate in context in the three simple steps:

1. Press and hold your Alt/Option key
2. Navigate mouse over any translation on your website: the chosen text will get highlighted by red color.
3. Click on it to open the "Quick translation" dialog. Now you can edit the translations, and the changes will get stored to the Tolgee platform

In-context translating also **works in the production environment** of your deployed app. Using the [Tolgee Tools Chrome plugin](https://chrome.google.com/webstore/detail/tolgee-tools/hacnbapajkkfohnonhbmegojnddagfnj), you can simply provide your API key and start translating. This enables anybody without developer knowledge to translate your app and modify translations live on your page. While translating in the app itself, you can see the location and context of all translations. 
Tolgee Tools Chrome plugin is an integral part of Tolgee ecosystem. You can learn how to set it up in this [tutorial](/blog/in-context-production).

The in-context translating feature is, at the same time, also an excellent tool for **the UI design** of your app. You can immediately see the translated text in your app. For example, it can help you avoid long texts harming the design of your app.

<video loop autoPlay muted style={{ maxWidth: "100%", margin: "0 auto" }}>

  <source src="/in_context_translating.mov"></source>
</video>

## Conclusion

Context has a significant role in translating, especially in software localization. It provides essential information to translators about the translated piece of text. Screenshots can be a powerful tool for translators to provide context, helping to improve the accuracy and quality of translations. They provide a visual context for the text that needs to be translated, making it easier to understand the meaning and intent. Screenshots can speed up the translation process by reducing the need for research or clarification. In-context translation can bring even more value to the whole localization process and generate highly accurate translations.

Do you have any suggestions on how to offer context to translators in Tolgee better? [Let us know](mailto:info@tolgee.io) or create a pull request on [GitHub](https://github.com/tolgee/tolgee-platform).
