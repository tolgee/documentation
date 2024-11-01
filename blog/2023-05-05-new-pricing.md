---
slug: new-pricing-2023-05
title: 'Introducing New Pricing Options: Pay as You Go, Only for What You Need!'
authors: [jcizmar]
image: '/img/blog/2023-05-05-new-pricing.png'
description: 'We are introducing new Pay as you go plan: pay only for what you use. We are also introducing new plans for self-hosted instances.'
tags: [pricing, pay as you go, self-hosted]
---

Based on your feedback, we have updated our pricing. Introducing new pay-as-you-go plans, so you only pay for what you
use.
We also have a fairer and easier-to-understand metric. Additionally, we now offer plans for self-hosted instances.

![New pricing](/img/blog/2023-05-05-new-pricing.png)

<!--truncate-->

## Pay as you go

We are introducing new plans that are based on the number of strings you have in your organization. When using
the Free plan, you don't have to upgrade to a new one just because you want to add a few strings above the Free plan
limit or to use a few more machine translation credits. The only thing you have to do is to add your credit card details,
and we will charge you for what you use.

For the users who have already subscribed to our plan, the current plans will stay the same. However, you can switch to the
new plans, if you would like to.

Visit our [pricing page](https://tolgee.io/pricing) to learn more.

## String: The new metric

Before, we had been using the word "translations," but actually, we were counting "translation slots" as the main metric
to limit our plans. What the hell is the translation slot, right? It was confusing; we counted the "translation slots"
as the sum of all keys in all languages in the organization project. So if you had a single project with 100 keys and 10
languages, you have been using 1000 translation slots. Well, this was far from optimal. We used this metric since we
didn't want to bother translators with messages about hitting the plan limits because translators never actually added a
key or language.

Well, it had a lot of downsides. First, it is confusing. Second, it is not fair since we've charged you also for
empty translations (slots). Third, it was not optimal for us since it was hard to count. So we decided to use a
**strings** as the new metric.

What is a string? The string is every non-empty string stored in the Tolgee platform within your organization. This
metric is much less confusing. For example, if you have 10 languages and 100 keys, but only 10 of the keys are
translated to only 2 languages, you still pay only for 20 strings, not for 1000.

## Self-hosted instances

There are a lot of companies that self-hosted Tolgee, which is great. Thanks to all of you folks who use Tolgee
self-hosted or on the Cloud! However, the possibility to self-host is one of our greatest competitive advantages, and it
would be great for us to generate some revenues from there. The same way as GitLab or Sentry does. No worries, though!
Tolgee stays open-source, and every feature provided for free stays free and open-source.

So from now on, we will provide licenses also for the self-hosted instances, which enable customers to use the brand new
**Granular permissions** feature and get prioritized feature requests or advanced support. That's why we moved some
directories of our source code under a custom license. It's the `/ee` and `/webapp/src/ee` directories
of [Tolgee Platform repository](https://github.com/tolgee/tolgee-platform). Everything else is under the same license as
before. By buying the license for a self-hosted instance, you support the development of Tolgee. Thank you.

## TL;DR

- The pricing for Tolgee has been updated to introduce new pay-as-you-go plans based on the number of strings in your
  organization.
- The previous metric of "translation slots" has been replaced with "strings" as a more fair and understandable metric
  for measuring usage.
- Tolgee now offers licenses for self-hosted instances, allowing customers to access granular permissions, prioritized
  feature requests, and advanced support while supporting the development of Tolgee. The core of Tolgee remains
  open-source.
- Visit the [pricing page](https://tolgee.io/pricing) to learn more.
