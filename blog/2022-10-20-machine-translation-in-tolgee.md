---
slug: machine-translation-in-tolgee

title: 'Machine Translation: How Does It Work in Tolgee?'

authors: [mchalupnikova]

image: '/img/blog/mt-tolgee/machine_translation_tolgee.png'

description: 'Learn how machine translations are integrated into Tolgee localization platform and how you can make the best of it. How to set up MT in Tolgee.'

tags: [machine translation, localization, i18n]
---

Our [previous article](/blog/software-localization-machine-translation) about Machine Translation (MT) discussed the different machine translation providers. We were looking for the answer which one of them is the best. Today, let’s have a look at how machine translations are integrated into Tolgee localization platform and how you can make the best of it.

![machine translations Tolgee](/img/blog/mt-tolgee/machine_translation_tolgee.png)

<!--truncate-->

Even though Machine translation is a remarkable technological invention, we still consider it a complementary feature that could help us to optimize the whole software localization process. Currently, machine translations are not at the stage when they can translate software solely on its own with perfect results. Furthermore, due to the lack of context, there is a need for human translators to review translations provided by some of the MT providers.

## How to set up machine translation in your Tolgee project?

With the [machine translation](/platform/translation_process/machine_translation) feature, you don't have to translate every string manually. Tolgee suggests translations from third-party services, so you can click and save them. Currently, Tolgee is offering three machine translation providers: Amazon Translate, DeepL, and Google Translate.

Let's find out how machine translation (MT), Translation memory (TM), and auto-translation of new keys work in the Tolgee localization platform.

<iframe
    width="640"
    height="480"
    src="https://www.youtube.com/embed/6pQL_-0kJ54"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen
>
</iframe>

## Machine Translation in Tolgee

By default, all three MT providers are set up in your every new project. However, you can change the settings in **Languages section** in your left menu, together with the languages used in your project.

![language setup](/img/blog/mt-tolgee/languages-setup.png)

In the Machine Translation section, you can simply set up your preferred **default machine translation provider** for all languages of the project or choose a specific setup for every single language you use (e.g., by regarding the preference of your translators or by supported language by the MT provider.) We discussed this topic of choosing a suitable MT provider more deeply in the previous [article](/blog/software-localization-machine-translation). So check it out for more details and links to the official lists of supported languages by Amazon Translate, DeepL, and Google Translate.

![default providers](/img/blog/mt-tolgee/mt-default-providers.png)

You can also set up **primary provider** for your automatic translations for every single langue used in the project. The primary provider is used for the machine translation of new keys and is displayed first on the translation panel in the translating section of the platform.

To enable machine translation when self-hosting Tolgee, check out [configuration](/platform/self_hosting/configuration/#machine-translation) to learn how to provide several configuration properties to enable machine translation.

## Automatic translation of new keys

With the automatic translation of new keys, your project can be translated in the blink of an eye. **New keys (with base translations) are automatically translated with Translation Memory or Machine Translation.** When [Translation Memory](https://tolgee.io/features/translation-assistance) is enabled, the result is applied only when the string matches 100%. When both Translation Memory and Machine Translation are allowed, Tolgee tries to find the result in the Translation memory first. If no 100% match is found, the translation from the primary Machine Translation provider is used.

You can select in Language settings if you want to use automatic translation only with Translation Memory, the primary Machine Translation provider, or both.

![automatic translation setup](/img/blog/mt-tolgee/automatic-translation-setup.png)

**Note:** Automatic translation is disabled by default; you can enable it in language settings. Translations that were translated automatically (and were not edited by a human) are marked by the MT provider icon or translation memory icon.

![automatic translation](/img/blog/mt-tolgee/automatic-translation.png)

## How do MT credits work?

As machine translating of larger amounts of characters is a paid service, the number of machine translations that you can use in Tolgee is limited by credits that are shown in language settings. One credit currently equals one translated character by a single MT provider. So when you have both AWS and Google services enabled and use it for a ten-characters translation, it will cost you 20 credits.
There are **10 000 free credits available in the Free tier**. Each other [subscription plan](https://tolgee.io/pricing/) includes preloaded translation credits. If you need more, you can buy Extra Machine Translation credits in the Billing section according to your needs.

**Tip:** If you want to save your credits, set only one MT provider in your project. However, it could be helpful to compare the results of different MT providers (if available for your selected language) and choose the one that fits the best.

## How to translate with machine translation in Tolgee

When everything is set, we can finally dive into the translating with machine translation in the Tolgee platform.

Translating with machine translation suggestions is pretty simple. In your **translations tab**, click first the key you want to translate. Below the editing window, you’ll see MT suggestions from providers you’ve set up in your Language settings. Click the suggestions you like the most, and the text is transferred to your translation window. Do whatever correction in the copy is needed and hit the `Save` button.

The state of the translation is automatically set to Translated (yellow color). If someone does the reviews of your translations (highly recommended), they will get through your translations, correct the imprecisions, and then set the state of translations to reviewed (green color) with the button or keyboard shortcut (CTRL+E or ⌘+E). If you’ve set automatic translations of new keys, all the keys are translated and saved automatically.

![translating in tolgee platform](/img/blog/mt-tolgee/translating-in-tolgee-platform.png)

## Conclusion

Machine translation can save plenty of time for translators. However, it’s still not ready to provide 100% perfect translations, especially for translations of software. Tolgee platform offers a simple yet effective solution for software localization with the machine translation features described in this article.

Would you like to have some other machine translation providers than Google Translate, Amazon Translate, and DeepL in Tolgee? [Let us know](mailto:info@tolgee.io) or create a pull request on [GitHub](https://github.com/tolgee/tolgee-platform).

[![Context banner](/img/blog/blog-banners/banner-context.webp)](https://app.tolgee.io/sign_up)
