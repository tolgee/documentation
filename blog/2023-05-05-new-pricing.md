---
slug: naming-translation-keys
title: 'New pricing is here. Including Pay as you go. Pay only for what you use.'
authors: [ jcizmar ]
image: '/img/blog/naming-translation-keys/naming_translation_keys.png'
description: 'We are changing our pricing. We are introducing Pay as you go. Pay only for what you use.
tags: [ guide, translation, localization, i18n, keys ]
---

We hear you. So we have updated the pricing. We are introducing new pay as you go pricing plans. You can now pay only
for what you use.

## The new metric 

Before, we have been using the word "translations", but actually we were using "translation slots" as the main metric to
limit our plans. What the hell is translation
slot. Right? It was confusing, we counted the "translation slots" as sum of all keys in all languages in all the
organization project. So if you had single project with 100 keys and 10 languages, you had 1000 translation slots. Well
this was far from optimal. We used this metric, since we didn't want to bother translators with messages about
hitting the plan limits, because translators never actually add a key or language.

Well, it has a lot of downsides. First, it is confusing. Second, it is not fair, since we've charged you also for "
empty" translation (slots). Third, it is not optimal for us, since it was hard to count. So we decided to use a *
*strings** as the new metric. 

What is a string? The string is every string stored in Tolgee platform within your organization.  



