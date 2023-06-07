---
slug: tolgee-translator
title: 'New Tolgee translator based on ChatGPT'
authors: [sgranat]
image: '/img/blog/tolgee-translator/post-ai.png'
description: 'Tolgee now has now its own translator, which uses ChatGPT in the background and can translate with context.'
tags: [translation, chatgpt, in-context, sdk, i18n]
---

A question frequently asked is whether AI will replace human translators. AI has made its way into various aspects of our lives, including localization, where it demonstrates exceptional capabilities. However, there are two significant challenges hindering the complete adoption of AI for software translation: reliability and context. Tolgee translator, an experimental tool, aims to tackle these challenges head-on.

![Tolgee translator](/img/blog/tolgee-translator/post-ai.png)

<!-- truncate -->

## The concept

Upon trying our machine translation tools, one quickly realizes that they struggle with short, simple labels. Surprisingly, they perform better when handling longer texts. Why is that? Context.

Without context, how can one accurately translate a word like "Save"? It could refer to saving a form or saving money. Without contextual information, the translation service can only guess. Moreover, while we may understand that the translation pertains to software, a general translation service lacks this awareness. Hence, context is key.

For a long time, we pondered the idea that if we could provide AI with the same context as a human translator, it could potentially deliver comparable translation quality. However, no translation services existed that could effectively incorporate context.

### AI is smart these days

Thanks to new AI tools like ChatGPT, we can now convey translation context to AI models just like we would to any other human. But the question remains: where do we obtain this context?

Context lies at the core of the Tolgee platform. Our aim is to provide translators with as much context as possible, and our solution with Tolgee SDK offers a unique approach. However, screenshots remain the gold standard for context provision, although they present challenges in interpretation. While it is possible to detect the content of a screenshot, it can be costly and time-consuming. Luckily, a better alternative exists.

Within the Tolgee SDK, we possess knowledge about the specific location of each translation on a webpage. This information proves invaluable in establishing context.

### Can ChatGPT Understand the Content of a web page?

You can conduct this experiment yourself. Simply copy the text of any web application page into ChatGPT and ask it about the page's subject matter. You will find that ChatGPT is remarkably adept at this task. It can discern the essence of a page even from a few random texts, without relying on any graphics. In fact, in this regard, ChatGPT may even outperform humans. It reads webpages solely based on the text, making it a natural environment for comprehension.

## So, what's new in Tolgee?

To enhance our tool, the latest version of Tolgee SDK collects data from your application. Rest assured, this data does not include any personal or sensitive information. We simply send a list of keys present on the page. Using this data, Tolgee analyzes the order of the keys to establish statistical relationships between them.

When utilizing the Tolgee translator, we identify the most relevant keys and present them to ChatGPT, along with Translation Memory data (similar to how a human translator would work).

## Results

Based on our observations in the Czech language, the context has proven to be quite helpful. It assists in determining word meanings and plays a crucial role in consistent terminology usage. For example, the translation of the term "namespace" into Czech can be awkward, so we decided to stick with the English term. However, traditional translation services would always attempt to translate it. ChatGPT, on the other hand, understands our approach when provided with an example, ensuring consistency without relying solely on a glossary.

### What about reliability?

Our primary intention behind releasing the Tolgee translator is to provide assistance to human translators. Therefore, the tool is designed to support them in the translation process, requiring their review and input. However, this setup allows us to gradually empower AI and potentially reduce the need for extensive human interaction in the future.
