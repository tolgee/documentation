---
slug: tolgee-translator
title: 'New Tolgee translator based on ChatGPT'
authors: [sgranat]
image: '/img/blog/tolgee-translator/post-ai.png'
description: 'Tolgee now has now its own translator, which uses ChatGPT in the background and can translate with context.'
tags: [translation, chatgpt, in-context, sdk, i18n]
---

Will AI replace human translators? That's the question we're getting a lot. AI is creeping into our lives on many fronts and localization is one of the areas, where it really shines.

If AI is so good, why aren't we translating software completely with AI already? There are two main issues: reliability and context. Tolgee translator is an experimental tool, which is trying to tackle both of these issues.

![Tolgee translator](/img/blog/tolgee-translator/post-ai.png)

<!-- truncate -->

## The idea

If you try our machine translation tools, you will quickly discover that for short simple labels, it's not very good. Paradoxically it's much better when you have longer text. Why so? Context.

How would you translate "Save" if you don't have any context? Well, it can mean saving a form or saving money. Without the context, we have no idea and so the translation service will only guess. Also, we at least know that the translation is probably made in the context of software, but the general translation service will not know that. So context is the king here.

For a long time we had the idea, that if we would provide the AI with the same context as a human translator, it could theoretically provide the same quality of translation. The problem was, there were no translating services that would somehow accept the context.

### AI is smart these days

With new AI tools like ChatGPT we can explain the translation context just like to any other human. However, where do we take the context from?

Context is in the DNA of Tolgee platform. We are trying to provide translators with as much context as possible and our solution with Tolgee SDK offers a unique way how to do so. However, the gold standard of providing translators with a context is through screenshots and that is a bit harder to interpret. We could of course detect what is on the screenshot, but that might be quite expensive and slow. There is a better way.

In Tolgee SDK we know where each translation is on the page and so we can use this information.

### Is ChatGPT able to understand what is a page about?

You can make this experiment yourself. Copy the text of any web application page into ChatGPT and ask it what is the page about. You will see that ChatGPT is really, I mean really good at this. It can pick up what is the page about even from a few random texts and without seeing any graphics. I think in this discipline it's even better than a human. This is actually how the ChatGPT reads the webpages it doesn't interpret it graphically but it only sees the text, so it's a natural environment for it (or him?).

## Ok, so what is new in Tolgee?

To facilitate this tool, Tolgee SDK in the newest version collects data from your application. You don't have to worry, these are not any personal or sensitive data. We simply send a list of keys that are present on the page. From these data, Tolgee is making statistics about which key is related to which based on the order of the keys.

Then, when you use the Tolgee translator we find the most related keys and show them to ChatGPT together with Translation Memory data (like to a human translator).

### What are the results?

What we can judge from the Czech language the context helps quite a lot in some cases. It helps to decide what is the meaning of the word and also it helps a lot with terminology. For example, the term "namespace" when translated into Czech is quite awkward, so we decided to stick to the English term. However traditional translating services will always fall back on translating it. ChatGPT however, will understand that we do it this way if it has some example, so this can really help with consistency without using a glossary.
