---
slug: tolgee-ai-translator
title: 'Launching Tolgee AI Translator – the most accurate MT based on ChatGPT'
authors: [sgranat]
image: '/img/blog/tolgee-translator/post-ai.png'
description: 'Introducing new Tolgee AI Translator, which leverages ChatGPT and translates much more accurately by leveraging contextual awareness about the strings.'
tags: [translation, ai, chatgpt, in-context, sdk, i18n]
---

Do you think that AI will replace human translators? AI has made its way into various aspects of our lives, including localization, where it demonstrates exceptional capabilities. Yet, two significant challenges hinder the complete adoption of AI for software translation: reliability and context. Tolgee AI Translator aims to tackle these challenges head-on to provide contextually tailored translations of superior quality.

![Tolgee AI translator](/img/blog/tolgee-translator/post-ai.png)

<!-- truncate -->

## The concept

Upon trying the **current machine translation tools** in Tolgee, one quickly realizes they **struggle with short, simple labels**. Surprisingly, they perform better when handling longer texts. **Why is that? Context**.

How can one accurately translate a word like "Save" without context? It could refer to saving a form or saving money. **Without contextual information**, the **machine translation services can only guess**. Moreover, while we may understand that the translation pertains to software, a general translation service lacks this awareness. Hence, **context is key**.

For a long time, we considered that providing AI with the same context as a human translator could deliver comparable translation quality. However, no translation services existed that could effectively incorporate context.

### AI is smart these days

Thanks to new AI tools like ChatGPT, we can now convey translation context to AI models just like we would to any other human. But the question remains: **Where do we obtain this context?**

**Context lies at the core of the Tolgee platform**. Our aim is to provide translators with as much context as possible, and our solution with Tolgee SDK offers a unique approach. However, **screenshots remain the gold standard for context** provision. While it is possible to detect the content of a screenshot, it can be costly and time-consuming. **Luckily, a better alternative exists**.

**Within the Tolgee SDK, we know the specific location of each translation on a webpage**. This information proves invaluable in establishing context.

### Can ChatGPT understand the content of a web page?

You can conduct this experiment yourself. Simply copy the text of any web application page into ChatGPT and ask it about the page's subject matter. You will find that **ChatGPT** is remarkably adept at this task. It **can discern the essence of a page**, **even from a few random texts**, without relying on any graphics. In fact, in this regard, **ChatGPT may even outperform humans**. It reads webpages solely based on the text, making it a natural environment for comprehension.

## So, what's new in Tolgee?

To enhance our tool, the latest version of Tolgee SDK collects data from your application. Rest assured, this data does not include any personal or sensitive information. **We simply send a list of keys present on the page**. Using this data, **Tolgee analyzes the order of the keys to establish statistical relationships between them**.

When utilizing the Tolgee AI Translator, we **identify the most relevant keys** and present them to ChatGPT, **along with Translation Memory data** (similar to how a human translator would work).

![Tolgee AI translator](/img/blog/tolgee-translator/tolgee_translator.png)

To enhance user experience, **we also provide a description of the context how its understood** by Tolgee AI Translator. That way you can see if it got it right or not.

### What about reliability?

Our **primary intention** behind releasing the Tolgee AI Translator **is to assist human translators**. Therefore, the tool is designed to support them in the translation process, **requiring their review and input**. However, this setup allows us to gradually empower AI and potentially reduce the need for extensive human interaction in the future.

## Cool, how can I try this?

Sign in to Tolgee platform and setup a project. Use Tolgee SDK (Tolgee Context is supported since `v5.9.0`). You need to use in-context tools, every time you create or update translation with it the context data will get sent to Tolgee. You can see if the context is present, by checking a left bottom corner of keys, there will be a little ⚡ icon.

![Tolgee Context](/img/blog/tolgee-translator/tolgee_translator_context.png)

> If you like Tolgee platform help us out by giving us a [GitHub star](https://github.com/tolgee/tolgee-platform). For any questions don't hesitate to contact us on our [Community slack](https://tolg.ee/slack).
