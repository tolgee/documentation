import React, { ReactNode } from 'react';
import { PricingFeatures, Feature } from './PricingFeatures';
import { BillingSwitch, BillingType } from './BillingSwitch';
import { Limits, PlanLimits } from './PlanLimits';
import { Billing, Price } from './Price';
import { SecondaryPrice, SecondaryPrices } from './SecondaryPrices';
import { OpensourceLink } from './OpensourceLink';

export type MinHeights = {
  content?: number;
};

type Props = {
  name: string;
  description: React.ReactNode;
  limits?: Limits;
  freeForOpensource?: boolean;
  billing?: Billing;
  billingType?: BillingType;
  toggleBillingType?: () => void;
  free?: boolean;
  secondaryPrices?: SecondaryPrice[];
  action: React.ReactNode;
  features?: Feature[];
  featuresShortuct?: ReactNode;
  minHeights?: MinHeights;
};

export const PricingPlan: React.FC<Props> = ({
  billingType,
  toggleBillingType,
  billing,
  free,
  name,
  description,
  freeForOpensource,
  limits,
  secondaryPrices,
  action,
  features,
  featuresShortuct,
  minHeights,
}) => {
  return (
    <div className="pricing__option">
      <div className="pricing__option--top">
        <h3 className="pricing__option--title">{name}</h3>
        <div className="pricing__option--description">{description}</div>
      </div>
      <div className="pricing__option--center">
        <div
          className="pricing__option--content"
          style={{ minHeight: minHeights?.content }}
        >
          <PricingFeatures
            features={features}
            featuresShortuct={featuresShortuct}
          />

          {freeForOpensource && <OpensourceLink />}

          <PlanLimits limits={limits || {}} />
        </div>
      </div>

      <div className="pricing__option--bottom">
        {billing && (
          <BillingSwitch
            billingType={billingType}
            toggleBillingType={toggleBillingType}
          />
        )}

        <Price free={free} billing={billing} billingType={billingType} />
        <div className="pricing__option--secondary-prices-wrapper">
          <SecondaryPrices secondaryPrices={secondaryPrices} />
        </div>

        <div className="pricing__option--price-wrapper">{action}</div>
      </div>
    </div>
  );
};
