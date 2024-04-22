import { PricingDetailsLink } from './pricingPlan/PricingDetailsLink';
import React from 'react';

export const ExtraMtCreditsLabel = () => {
  return (
    <>
      extra 1000{' '}
      <PricingDetailsLink item="what-are-mt-credits">
        MT credits
      </PricingDetailsLink>
    </>
  );
};
