import React from 'react';
import { PricingDetailsLink } from './PricingDetailsLink';

export type Limits = {
  strings?: number;
  mtCredits?: number;
  seats?: number;
};

export const PlanLimits = ({ strings, mtCredits, seats }: Limits) => {
  return (
    <ul className="pricing__option-highlights pricing__option-highlights--no-list-style">
      {strings !== undefined && (
        <li>
          <span className="pricing__option-value">
            {strings !== Infinity ? strings.toLocaleString() : 'Unlimited'}
          </span>{' '}
          <PricingDetailsLink>strings</PricingDetailsLink> included
        </li>
      )}
      {mtCredits !== undefined && (
        <li>
          <span className="pricing__option-value">
            {mtCredits !== Infinity ? mtCredits.toLocaleString() : 'Unlimited'}
          </span>{' '}
          <PricingDetailsLink>MT credits</PricingDetailsLink> included
        </li>
      )}
      {seats !== undefined && (
        <li>
          <span className="pricing__option-value">
            {seats !== Infinity ? seats.toLocaleString() : 'Unlimited'}
          </span>{' '}
          <PricingDetailsLink>seats</PricingDetailsLink> included
        </li>
      )}
    </ul>
  );
};
