import React from 'react';
import { PricingDetailsLink } from './PricingDetailsLink';
import clsx from 'clsx';

export type Limits = {
  strings?: number;
  mtCredits?: number;
  seats?: number;
  payAsYouSit?: boolean;
};

type Props = {
  limits: Limits;
  vertical?: boolean;
};

export const PlanLimits = ({
  vertical,
  limits: { strings, mtCredits, seats, payAsYouSit },
}: Props) => {
  return (
    <div
      className={clsx('pricing__option-highlights', {
        'pricing__option-highlights--vertical': vertical,
      })}
    >
      {strings !== undefined && (
        <div>
          <span className="pricing__option-value">
            {strings !== Infinity ? strings.toLocaleString() : 'Unlimited'}
          </span>{' '}
          <PricingDetailsLink item="what-are-strings">
            strings
          </PricingDetailsLink>{' '}
          included
        </div>
      )}
      {mtCredits !== undefined && (
        <div>
          <span className="pricing__option-value">
            {mtCredits !== Infinity ? mtCredits.toLocaleString() : 'Unlimited'}
          </span>{' '}
          <PricingDetailsLink item="what-are-mt-credits">
            MT credits
          </PricingDetailsLink>{' '}
          included
        </div>
      )}
      {seats !== undefined && (
        <div>
          <span className="pricing__option-value">
            {seats !== Infinity ? seats.toLocaleString() : 'Unlimited'}
          </span>{' '}
          <PricingDetailsLink item="what-are-seats">seats</PricingDetailsLink>{' '}
          included
        </div>
      )}
      {payAsYouSit && <div>Only pay for used seats</div>}
    </div>
  );
};
