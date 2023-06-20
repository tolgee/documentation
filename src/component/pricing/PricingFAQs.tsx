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
      <h2
        className="mt-12 mb-0 text-primary pricing-details__scroll-target"
        id="pricing-details"
      >
        Frequently asked questions
      </h2>

      <div className="pricing-details__table max-w-[800px]">
        <PricingQuestion question="What are strings?">
          The total amount of localization strings stored in your cloud
          organization, including strings in the base language.
        </PricingQuestion>

        <PricingQuestion question="What are MT credits?">
          MT credits are used for Machine Translation providers (such as Google
          Translate, AWS, DeepL, etc.). One credit ⋍ 1 translated character
          (except for Tolgee Translator).
        </PricingQuestion>

        <PricingQuestion question="How is Tolgee Translator priced?">
          <p>
            Because Tolgee Translator is using ChatGPT in the background we
            price it differently based on the number of tokens in the prompt.
          </p>
          <p>
            10 tokens cost 1 MT credit and the average prompt size is about 250
            tokens (with context its 500 - 1000).
          </p>
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
          <p>
            If you have provided your credit card details, you will be charged
            extra every month. The cost of seats and strings will be determined
            by their weighted average.
          </p>
          <p>
            To illustrate, suppose you add an extra seat for half of the month.
            In this case, you will be charged only half the cost of the extra
            seat since the price is weighted by time.
          </p>
        </PricingQuestion>

        <PricingQuestion question="How do I pay for exceeding limits if I pay annually?">
          If you pay for the service annually, you may still be charged every
          month if you exceed the limits of your plan.
        </PricingQuestion>
      </div>
    </section>
  );
}
