import React from 'react';

type Props = {
  question: string;
  children: React.ReactNode;
};

function PricingQuestion({ question, children }: Props) {
  return (
    <>
      <div className="pricing-details__name">{question}</div>
      <div className="pricing-details__description">{children}</div>
      <div className="pricing-details__separator" />
    </>
  );
}

export function PricingFAQs() {
  return (
    <section className="bg-surface flex flex-col items-center pb-14">
      <div className="pricing-details__table max-w-[800px]">
        <h2
          className="mt-12 mb-0 text-primary pricing-details__scroll-target text-center pb-8"
          id="pricing-details"
        >
          Frequently asked questions
        </h2>
        <PricingQuestion question="What are strings?">
          {`A "string" is a piece of text in an app, such as "Hello, world!" or
          its translation. If you have 5 keys to translate into 5 languages,
          you'd have a total of 25 strings. Each key, whether in the original
          language or translated is considered a separate "string" in the
          app.`}
          <br />
          <br />
          Note: we do not charge you for untranslated empty strings.
        </PricingQuestion>

        <PricingQuestion question="What are MT credits?">
          MT credits are used for Machine Translation providers (such as Google
          Translate, AWS, DeepL, etc.). One credit ⋍ 1 translated character
          (except for Tolgee Translator).
        </PricingQuestion>

        <PricingQuestion question="What is Content Delivery?">
          Content Delivery allows you to set up an automated export to a
          reliable Cloud storage. You can use this storage to load translations
          directly to your application and therefore ensure that the translation
          fixes and updates will get to your users without the necessity to
          release a new version of your app.
          <br />
          <br />
          In Business and Enterprise plans you can set multiple Content Delivery
          configurations, which is useful, if you need different formats for
          different use cases.
        </PricingQuestion>

        <PricingQuestion question="What is Custom Content Storage?">
          Custom storage allows you to configure a custom place where the
          localization files will be deployed. Currently, we support AWS S3
          buckets and Azure blob storage.
        </PricingQuestion>

        <PricingQuestion question="How is Tolgee Translator priced?">
          Because Tolgee Translator is using ChatGPT in the background we price
          it differently based on the number of tokens in the prompt.
          <br />
          <br />
          10 tokens cost 1 MT credit and the average prompt size is about 250
          tokens (with context it's 500 - 1000).
        </PricingQuestion>

        <PricingQuestion question="What are seats?">
          The number of active users (disabled accounts are not included). When
          self-hosting, the number of users is reported to the Tolgee cloud.
        </PricingQuestion>

        <PricingQuestion question="Do you offer a completely free cloud plan?">
          Absolutely! When you sign up for Tolgee, you will automatically
          receive our Free plan, which is limited by the number of strings and
          MT credits.
        </PricingQuestion>

        <PricingQuestion question="What happens when I exceed seat or string limits?">
          If you have provided your credit card details, you will be charged
          extra every month. The cost of seats and strings will be determined by
          their weighted average.
          <br />
          <br />
          To illustrate, suppose you add an extra seat for half of the month. In
          this case, you will be charged only half the cost of the extra seat
          since the price is weighted by time.
        </PricingQuestion>

        <PricingQuestion question="How do I pay for exceeding limits if I pay annually?">
          If you pay for the service annually, you may still be charged every
          month if you exceed the limits of your plan.
        </PricingQuestion>

        <PricingQuestion question="Does pricing change affect users who already use legacy plans?">
          No. If you are using a legacy plan, you can continue to use it.
          <br />
          <br />
          This also applies to legacy-free plans.
        </PricingQuestion>

        <PricingQuestion question="What are the seats/strings limitations for the Free self-hosted plan?">
          None. The Free self-hosted plan does not have seats or string
          limitations. However, you must subscribe to a paid plan to use
          advanced features like Granular permissions, CDN, or Webhooks.
        </PricingQuestion>
        <PricingQuestion question="What is the string limit for the self-hosted plans?">
          None. We are not limiting the number of strings in the self-hosted
          instances.
        </PricingQuestion>
      </div>
    </section>
  );
}
