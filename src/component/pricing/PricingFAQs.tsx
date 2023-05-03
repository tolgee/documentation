import React from 'react';

type Props = {
  question: string;
  children: React.ReactNode;
  noSeparator?: boolean;
};

function PricingQuestion({ question, children, noSeparator }: Props) {
  return (
    <>
      <div className="pricing-details__name">{question}</div>
      <div className="pricing-details__description">{children}</div>
      {!noSeparator && <div className="pricing-details__separator" />}
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
        Questions and answers
      </h2>

      <div className="pricing-details__table max-w-[800px]">
        <PricingQuestion question="What are the strings?">
          The total amount of localization strings stored in your cloud
          organization, including strings in the base language.
        </PricingQuestion>

        <PricingQuestion question="What are the MT credits?">
          Credits for machine translation providers (such as Google). One credit
          ⋍ 1 translated character.
        </PricingQuestion>

        <PricingQuestion question="What are the seats?">
          The number of active users (disabled accounts are not included). When
          self-hosting, the number of users is reported to the Tolgee cloud.
        </PricingQuestion>

        <PricingQuestion question="What happens when I exceed seat or string limits?">
          <p>
            If you have provided your credit card details, you will be charged
            extra every month. The cost of seats and strings will be determined
            by their weighted average.
          </p>
          <p>
            To illustrate, suppose you add an extra seat for half of the month.
            In this case, you will only be charged half the cost of the extra
            seat since the price is weighted by time.
          </p>
        </PricingQuestion>
      </div>
    </section>
  );
}
