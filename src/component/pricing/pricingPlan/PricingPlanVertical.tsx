import React from 'react';
import { Limits, PlanLimits } from './PlanLimits';
import { Billing, Price } from './Price';
import { Feature } from './PricingFeatures';

type Props = {
  name: string;
  description: React.ReactNode;
  limits?: Limits;
  freeForOpensource?: boolean;
  billing?: Billing;
  free?: boolean;
  action: React.ReactNode;
  features?: Feature[];
  note: string;
};

export const PricingPlanVertical = ({
  name,
  description,
  limits,
  billing,
  free,
  action,
  note,
}: Props) => {
  return (
    <div className="pricing__option-vertical">
      <div className="pricing__option-vertical--container">
        <div className="pricing__option-vertical--left">
          <h3 className="pricing__option-vertical--title">{name}</h3>
          <div className="pricing__option-vertical--description">
            {description}
          </div>
          <PlanLimits limits={limits} vertical />
        </div>
        <div className="pricing__option-vertical--right">
          <Price billing={billing} free={free} />
          {action}
          <div className="pricing__option-vertical--price-note">{note}</div>
        </div>
      </div>
    </div>
  );
};
