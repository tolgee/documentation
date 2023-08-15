import React from 'react';
import { BillingType } from './BillingSwitch';

export type Billing = {
  monthly: number;
  annually: number;
};

type Props = {
  billing?: Billing;
  free?: boolean;
  billingType?: BillingType;
};

export const Price = ({ billing, free, billingType }: Props) => {
  if (free) {
    return (
      <div className="pricing__option-price">
        <div>€{Number(0).toLocaleString()}</div>
      </div>
    );
  }

  if (billing) {
    return (
      <div className="pricing__option-price">
        {billingType === 'monthly' ? (
          <div>
            €{Number(billing.monthly).toLocaleString()}
            <span>/mo</span>
          </div>
        ) : (
          <div>
            €{Number(billing.annually).toLocaleString()}
            <span>/mo</span>{' '}
            <span className="pricing__option-billing">(annual billing)</span>
          </div>
        )}
      </div>
    );
  }

  return null;
};
