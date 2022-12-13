---
slug: software-localization-machine-translation

title: "Software Localization & Machine Translation: Which Provider? "

authors: [mchalupnikova]

image: "/img/blog/best_machine_translation.png"

description: "Learn about machine translation providers for software localization. Tips how to choose suitable MT provider for your project."

tags: [machine translation, localization, i18n]
---
[Machine translation](https://aws.amazon.com/what-is/machine-translation/) (MT) is the process of using artificial intelligence to automatically translate text from one language to another without human involvement. Over time, from its beginnings in the 1950s, machine translation changed the translation industry. You probably have at least some little experience with machine translations as Google Translate and similar online translator tools have been available around the web for quite some time.

![machine translations](/img/blog/best_machine_translation.png)

<!--truncate-->

Machine translation can save a lot of time for translators, however, it’s still not ready to provide 100% perfect translations, especially for translations of software. Software internationalization is still a tricky thing, but machine translation can help you to make the whole process more effective. However, there are multiple machine translation providers on the market these days and you may be questioning which one is the best or which one would be the greatest fit for your project. 

## Machine translation and the struggles

Even the translation technology is advancing quickly, machine translation still has multiple drawbacks. It is often struggling with longer pieces of text or words with multiple meanings. [Studies](https://aclanthology.org/W19-6622/) have also shown that machine-translated texts are less lexically rich. Machine translation is still unable to pick up on cultural nuances and local slang. 

An important key to good translation, especially in software translation is context. Unfortunately, contemporary machine translation can’t deal with the context of the translated text. Even the best machine translation engine will struggle with complex or technical content and the translated text will lack of context.

Machine translation is more suitable for fast translations to understand basic concepts or some piece of information, but not for complex projects, where it needs to be supplemented by translation memory to keep the consistency of translated terms. 

If you translate your app to a new language only with machine translation you can be sure that the target language won’t sound natural and the overall outcome won’t look credible. You can then encounter issues with multiple meanings in different languages, which  could confuse users of your app. In my opinion, quality [localization](/blog/localization-basics-S01E01) of your software should be a high priority for good understanding and customer experience so it will require the expertise of a human translator. Quality-translated software is a part of your brand voice and online presentation so the final translations should be perfect to not harm your reputation. 

## Should I even use machine translation?

Short answer: It depends. 
Long answer: It depends on many factors. Every software project is different and has diverse needs. Machine translations can extensively shorten the process of translation. If you decide to use it without further reviews, your whole project is translated in seconds. However, the results won’t be probably any good, as we pointed out a moment ago. 

The second option is to use MT as a translations suggestions, which should be then reviewed and corrected by human translators to get good-quality translations. Human translators can interpret context and capture the same meaning, rather than simply translating words only. Machine translation and following human review can reduce your spending on professional translations. However, the effectiveness depends also on the language pairs and translator's habits: some prefer to translate from scratch as MT doesn’t bring them good enough translations and makes the translation process more complicated. 

If you don’t want or can’t afford a professional translator you can consider also community translations. Ask active users of your application, your fans, and supporters who would be willing to translate your project. Maybe you have some international friends, colleagues, or family members who would be open to for example reviewing your already MT-translated texts. Machine translation could make it easier for them, as they won’t need to translate the texts from scratch. 

You can perceive machine translation as an exchange. You exchange the translation’s quality for the speed of translation. MT is fast but its results are not that good. 

## Which machine translation provider should I use then? 

There are many machine translation providers on the market. In Tolgee, we currently support three well-known and widespread machine translation engines: Amazon Translate, DeepL and Google Translate. But the question is which one should you use? Let’s dive into it.

Unfortunately, there is no way to say that one language pair is always best translated by DeepL, Amazon, or Google Translate. Which MT provider delivers the best quality significantly depends on your source text. However, the following important metrics could help you to decide which provider you would choose: 

**1. Number of supported languages**

This is probably a criterium number one while choosing an MT provider: Does the provider support language you need? Let’s look at the numbers. 

- **Google Translate:** [133 supported languages](https://cloud.google.com/translate/docs/languages)
- **Amazon Translate:** [75 supported languages](https://docs.aws.amazon.com/translate/latest/dg/what-is-languages.html)
- **DeepL:** [27 supported languages](https://support.deepl.com/hc/en-us/articles/360019925219-Languages-included-in-DeepL-Pro) 

Without discussion, Google Translate wins in this criterium. 

DeepL started out providing services exclusively for European languages but has since expanded to include support for languages from all over the world. Yet, its supported language list is still smaller than Google Translate. However, as DeepL states in the documentation, their translation quality is of the utmost importance, and adding more languages is a lengthy process. But further languages will become available in the near future.

Do you plan to ask a professional translator to check and review your machine-translated texts? Ask them which MT provider they prefer for that specific language: they would probably have experience with which provider suit best the language pair. 

Some interesting statistics to finish: even though Google Translate supports 133 languages, there are more than 7100 languages spoken around the world, of which 40% are endangered. However, only 23 languages account for more than half the world's population.

**2. Accuracy of translations**

The second important criterium which could help you to decide is the accuracy of translations. Unfortunately, it’s still quite complicated to measure.
Since DeepL’s launch in 2017, they’ve been developing a completely new generation of neural networks for translation. According to [blind tests](https://www.deepl.com/en/whydeepl) when professional translators select the most accurate translation without knowing which MT provider produced it, DeepL outperformed its competitors by a factor of 3:1. However, as mentioned earlier, DeepL focuses primarily to European languages. Accuracy can be also very inconsistent across different languages.

When comparing Google Translate and Amazon Translate, according to various comparisons Google Translate was slightly more accurate but the difference was almost negligible.

It is difficult to provide a single conclusion about the accuracy of machine translation providers because it still depends on the specific language pairs that are being translated and the translated text. 

## Conclusion

The results of translations by machine translation providers certainly differ. It depends on multiple variables like e.g. your language pairs, the style of the text, and the industry to which the text is related. Unfortunately, there is no single MT tool that can do it all perfectly, especially when it comes to software localization. One universal piece of advice could be to just give a chance to multiple MT providers, test and compare the results and find out which one suit your needs the best. 

Next time, in part 2 of this article, we’ll have a look at how Google Translate, Amazon Translate, and DeepL are implemented in the localization platform Tolgee, how [machine translations](/platform/translation_tools) are working in this tool and you can use them for the best. 
