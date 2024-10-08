import Link from '@docusaurus/Link';
import React from 'react';

export const questions = [
  {
    id: 'what-are-strings',
    title: 'What are strings?',
    content: (
      <>
        {`A "string" is a piece of text in an app, such as "Hello, world!" or
          its translation. If you have 5 keys to translate into 5 languages,
          you'd have a total of 25 strings. Each key, whether in the original
          language or translated is considered a separate "string" in the
          app.`}
        <br />
        <br />
        Note: we do not charge you for untranslated empty strings.
      </>
    ),
  },
  {
    id: 'what-are-mt-credits',
    title: 'What are MT credits?',
    content: (
      <>
        <>
          MT credits are used for Machine Translation providers (such as Google
          Translate, AWS, DeepL, etc.). One credit ⋍ 1 translated character
          (except for Tolgee Translator).
        </>
        <br />
        <br />
        <>
          On self-hosted instances, the MT credits only apply to Tolgee AI
          Translator. For other providers (like Google Translate or Amazon
          Translate), you provide your own API keys.
        </>
      </>
    ),
  },
  {
    id: 'what-are-seats',
    title: 'What are seats?',
    content: (
      <>
        The number of active users (disabled accounts are not included). When
        self-hosting, the number of users is reported to the Tolgee cloud.
      </>
    ),
  },
  {
    id: 'what-is-ai-customization',
    title: 'What is AI Customization?',
    content: (
      <>
        AI customization allows you to specify project description and language
        level notes, so you get better results from the Tolgee AI Translator.{' '}
        <a href="/platform/projects_and_organizations/ai-translation-customization">
          Read more
        </a>
      </>
    ),
  },
  {
    id: 'what-is-content-delivery',
    title: 'What is Content Delivery?',
    content: (
      <>
        Content Delivery allows you to set up an automated export to a reliable
        Cloud storage. You can use this storage to load translations directly to
        your application and therefore ensure that the translation fixes and
        updates will get to your users without the necessity to release a new
        version of your app.
        <br />
        <br />
        In Business and Enterprise plans you can set multiple Content Delivery
        configurations, which is useful, if you need different formats for
        different use cases.
      </>
    ),
  },
  {
    id: 'what-is-custom-content-storage',
    title: 'What is Custom Content Storage?',
    content: (
      <>
        Custom storage allows you to configure a custom place where the
        localization files will be deployed. This storage can be configured per
        project. Currently, we support AWS S3 buckets and Azure blob storage.
      </>
    ),
  },
  {
    id: 'what-are-tasks',
    title: 'What are tasks?',
    content: (
      <>
        Tasks are used to organize work, assign people to specific translations
        and track the progress. You can also generate detailed reports. Read
        more in{' '}
        <Link to="/platform/projects_and_organizations/tasks">
          documentation
        </Link>
        .
      </>
    ),
  },
  {
    id: 'free-cloud-plan',
    title: 'Do you offer a completely free cloud plan?',
    content: (
      <>
        Absolutely! When you sign up for Tolgee, you will automatically receive
        our Free plan, which is limited by the number of strings and MT credits.
      </>
    ),
  },
  {
    id: 'seat-or-string-limits-exceeded',
    title: 'What happens when I exceed seat or string limits?',
    content: (
      <>
        If you have provided your credit card details, you will be charged extra
        every month. The cost of seats and strings will be determined by their
        weighted average.
        <br />
        <br />
        To illustrate, suppose you add an extra seat for half of the month. In
        this case, you will be charged only half the cost of the extra seat
        since the price is weighted by time.
      </>
    ),
  },
  {
    id: 'limits-exceeded-annually',
    title: 'How do I pay for exceeding limits if I pay annually?',
    content: (
      <>
        If you pay for the service annually, you may still be charged every
        month if you exceed the limits of your plan.
      </>
    ),
  },
  {
    id: 'legacy-plans',
    title: 'Does pricing change affect users who already use legacy plans?',
    content: (
      <>
        No. If you are using a legacy plan, you can continue to use it.
        <br />
        <br />
        This also applies to legacy-free plans.
      </>
    ),
  },
  {
    id: 'limitations-on-self-hosted-free-plan',
    title:
      'What are the seats/strings limitations for the Free self-hosted plan?',
    content: (
      <>
        The free self-hosted tier is currently limited to 10 seats. There. If
        you want to use advanced features like Granular permissions, Content
        Delivery, or Webhooks, subscribe to some advanced plan.
      </>
    ),
  },
  {
    id: 'string-limitations-on-self-hosted-plans',
    title: 'What is the string limit for the self-hosted plans?',
    content: (
      <>
        None. We are not limiting the number of strings in the self-hosted
        instances.
      </>
    ),
  },
] as const;

export type QuestionId = (typeof questions)[number]['id'];
