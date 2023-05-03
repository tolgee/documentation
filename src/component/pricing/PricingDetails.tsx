import React from 'react';

export function PricingDetails() {
  return (
    <section className="bg-surface flex flex-col items-center">
      <h2
        className="mt-12 mb-0 text-primary pricing-details__scroll-target"
        id="pricing-details"
      >
        Pricing details
      </h2>

      <div className="pricing-details__table max-w-[800px]">
        <div className="pricing-details__name">Strings</div>
        <div className="pricing-details__description">
          The total amount of localization strings stored in your cloud
          organization, including strings in the base language.
        </div>

        <div className="pricing-details__separator" />

        <div className="pricing-details__name">MT Credits</div>
        <div className="pricing-details__description">
          Credits for machine translation. One credit ⋍ 1 translated character.
        </div>

        <div className="pricing-details__separator" />

        <div className="pricing-details__name">Seats</div>
        <div className="pricing-details__description">
          A weighted arithmetic average of the number of active users for the
          given month (disabled accounts are not included). When self-hosting,
          the number of users is reported to the Tolgee cloud.
        </div>
      </div>
    </section>
  );
}
