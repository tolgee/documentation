---
slug: language-formality

title: 'Crafting User-Friendly Software: The Power of Language Formality'

authors: [mchalupnikova]

image: '/img/blog/language-formality/machine-translation.webp'

description: 'Discover the impact of language formality in software translation. Learn the importance of formality and craft user-friendly experience for global success.'

tags: [localization, i18n, machine translation]
---

You have probably noticed how we talk differently with friends than with bosses. That's language formality – a powerful aid in
how we express ourselves. This article is your guide to understanding why it matters in software translation. Throughout this
article, we'll dive into the role of language formality, particularly in software localization using machine translation,
shedding light on how to work with formality levels in Tolgee.

![machine translation](/img/blog/language-formality/machine-translation.webp)

<!--truncate-->

## What is Language Formality?

Language formality refers to the **level of politeness and social appropriateness in communication**. It involves choosing
language and expressions that align with the social context or relationship between speakers. **Formal language** tends to adhere
to established conventions and is often used in professional or official settings, while **informal language** is more relaxed
and suited for casual conversations.

In a nutshell, language formality is like a tool that helps us communicate in different ways for different situations. It's
the subtle art of choosing how we speak or write, depending on who we're talking to. It's the difference between chatting
with a buddy and having a serious conversation with your boss.

When adapting software for different audiences, the **level of formality matters**. A casual tone may work well for user-friendly
interfaces, but a more formal approach is often preferred for technical documentation or professional settings.

## Why is Formality in Software Translation important?

Why bother with formality in software translation? Well, it turns out it's not just about words; it's about building connections
and making sure your software **speaks the language of your users**.

Consider this: a gaming app might use informal language to connect with users, while enterprise software demands a formal touch
in its translations. The right **level of formality enhances user experience** and maintains consistency in the software's communication.

## Build a Consistent Brand Image

Formality in translation is like the clothing your software wears. It **sets the tone for how your brand is perceived**. Consistency
in language across your software helps in crafting a coherent brand image – whether you're a playful app or a serious business tool:

:::tipExample

🎮 Yo! Awesome news! We've got some epic updates rolling out. Dive in and tell us what you think. We live for your thoughts!

**versus**

🏢 Greetings! We are pleased to inform you about forthcoming updates. Please review and share your valuable feedback. Your insights
are highly appreciated.

:::

## Machine Translation Formality in Tolgee Localization Platform

In Tolgee, you can tailor your machine translations to your exact needs. Choose between formal, informal, or default style to perfectly
match your content's tone.

The [machine translation](/blog/machine-translation-in-tolgee) (MT) formality feature is **natively supported by Amazon Translate and DeepL**,
which are integrated into the Tolgee platform. For certain languages, you can adjust the formality and select whether the translated
text should lean towards formal or informal language.

For **DeepL**, the formality feature allows you to choose between formal and informal tone of voice for your translation. In particular,
the feature determines the pronouns and related words used in your translation. As DeepL is focusing on **European languages**, this
feature currently only works for target languages DE (German), FR (French), IT (Italian), ES (Spanish), NL (Dutch), PL (Polish),
PT-BR and PT-PT (Portuguese), JA (Japanese), and RU (Russian). Check [DeepL's documentation](https://www.deepl.com/docs-api/translate-text/request)
for more details.

**Amazon Translate** currently supports 11 languages. Compared to DeepL, you can also find some **Asian languages** here, such as Hindi, Korean,
or Japanese. Formality in Amazon translate supports the following values:

- **Informal** – All sentences in the translated text use language constructs associated with informal communication. For example, the translated
  text uses the familiar form of second-person pronouns and their verb agreement (or Kudaketa form for Japanese).
- **Formal** – All sentences in the translated text use language constructs associated with formal, polite communication. For example, the
  translated text uses the formal form of second-person pronouns and their verb agreement (or Teineigo form for Japanese).

You can learn more in Amazon Translate [documentation](https://docs.aws.amazon.com/translate/latest/dg/customizing-translations-formality.html#customizing-translations-formality-languages).

## Formality in Tolgee Translator

[Tolgee Translator](/blog/tolgee-ai-translator) is our own machine translation engine. Its main benefit is that **it doesn’t ignore
[context](/blog/context-gamechanger-localization)** like other traditional machine translators. Tolgee Translator understands the context
of the strings used in your app: that’s why it can provide the best results. And one of its ingredients is also the **formality feature**. 
As it is based on ChatGPT, it supports all the languages.

**Let’s have a look at some examples:**

Consider the sentence 'Are you sure?' It can be accurately translated into German as 'Sind **Sie** sicher?' for formal contexts and 'Bist 
**du** sicher?' for informal situations. The formality depends on the situation and social relationship between the speaker and the target
audience. Similarly, in French, 'Es-**tu** sûr?' is informal, while 'Êtes-**vous** sûr?' is formal.

In the following example, Tolgee Translator and Amazon Translate are set up for formal language:

![tolgee AI translator](/img/blog/language-formality/tolgee-translator.webp)

## How to Set up MT Formality in Your Project?

You can quickly adjust the tone of your translation by choosing one of the options in the drop-down menu: **formal tone, informal tone,
or default** (neutral) tone. In the left menu, click the Languages (🌐 icon), and in the Machine translation section, select your preferred
machine translation provider and level of formality in the settings for each language.

![machine translation settings](/img/blog/language-formality/machine-translation-settings.webp)

## Support Tolgee, the Open-Source Developer-Friendly Localization Tool

Tolgee offers the ultimate solution for software localization. We help companies expand globally and enable users to use software in
their native language. You can **self-host Tolgee on your machine for free.**

:::tipHow to sponsor Tolgee?

If you want to support further development of Tolgee, you can do so via [Github sponsor page](https://github.com/sponsors/tolgee).
Overall, your sponsorship helps us build a better and more accessible open-source localization platform, one that's dedicated to bringing
the world closer together by eliminating language barriers. As a reward for your sponsorship, **we offer different prizes**, from a shoutout
on Tolgee Twitter to prioritized support on the Slack channel or localization workshop. Spoiler alert: Tolgee swag is on the way!

:::

Development and integration of the MT formality feature into the Tolgee platform **was sponsored by a generous donation of
[KRUU](https://kruu.com/us/photo-booth-rental/)**. KRUU was originally started in Germany and named as a phonetic translation of the English
word 'crew.' They rent great photo booths for events and weddings all around Europe and in the US. Thank you again for your support, KRUU! 🙏

[![your app multilingual](/img/blog/whatspot-casestudy/banner-multilingual.png)](https://app.tolgee.io/sign_up)
