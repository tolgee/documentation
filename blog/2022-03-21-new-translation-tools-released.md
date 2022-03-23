---
slug: new-translation-tools-released

title: New Translation Tools Released

authors: [jcizmar]

image: "/img/blog/translation-tools/cover.png"

description: Machine Translation, Translation Memory, and Auto Translation released!

tags: [i18n, l10n, translation, tools]
---

![New translation tools released](/img/blog/translation-tools/cover.png)

With version 2.10.0, we released a few very interesting features, which help you translate your project much more
effectively. It is Machine Translation, Translation Memory, and Auto Translation. In this article, I am going to
describe, how these features work and how to use them.

<!--truncate-->

## Machine translation 🤖

With the machine translation feature, you don't have to translate every string manually. Tolgee suggests the
translations from third-party services, so you can just click and edit/save them.

![Machine translating](/img/blog/translation-tools/machine-translating.png)

Currently, we support AWS translate and Google Translate, but we will add more in the future.

In the Tolgee cloud, both services are enabled and every user has 10 000 credits per month to spend. One credit
currently equals one source string character sent to a single service. So when you have both AWS and Google services
enabled, and you open an edition of 10 characters translation, it will cost you 20 credits. However, if you run out of
credits, just contact us, and we will add some more.

In the language settings, you can enable or disable Machine Translation for specific languages and check how many
credits you still have to spend.

![Machine Translation Settings](/img/blog/translation-tools/mt-settings.png)

When self-hosting, you have to provide several configuration properties to enable machine translation. It is described
in
[self-hosting configuration section of docs](/docs/platform/self_hosting/configuration#machine-translation).

## Translation memory 🧠

Translation memory enables you to reuse already translated strings. Similarly, Tolgee suggests you results from
translation memory when you edit a translated value.

![Translation memory](/img/blog/translation-tools/tm.png)

Translation memory results also show from which base translation the result comes as well as the key and the similarity
percentage of the strings.

## Auto translation 🎈

With the auto-translation feature, new keys are automatically translated with Translation Memory or Machine Translation.
You can enable this in the Language Settings section.

![Machine Translation Settings](/img/blog/translation-tools/auto-translation.png)

When Translation Memory is enabled, the result is applied only when the string matches by 100%. When both Translation
Memory and Machine Translation is enabled, it tries to find the result in the Translation memory. If no 100% match is
found, the value from the primary Machine Translation service is used.

When the auto-translation is applied, there is an indicator shown in the translation view. You can also remove this
indication, by clicking the clear button. The indication is also removed when the string is modified.

![Machine Translation Settings](/img/blog/translation-tools/mt-indicator.png)

## TL;DR

Tolgee now helps you to translate your projects more effectively by providing Machine Translation suggestions,
Translation Memory suggestions or Auto Translation of new keys with values provided by Machine Translation, Translation
Memory or both.
