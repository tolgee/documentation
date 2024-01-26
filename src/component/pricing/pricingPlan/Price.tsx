import React from 'react';
import { BillingType } from './BillingSwitch';

export type Billing = {
  monthly?: number | string;
  annually?: number | string;
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
        {(billingType === 'monthly' || billing.annually == undefined) &&
        billing.monthly != undefined ? (
          <div>
            <PriceField value={billing.monthly} />{' '}
          </div>
        ) : (
          <div>
            <PriceField value={billing.annually} />{' '}
            <span className="pricing__option-billing">(annual billing)</span>
          </div>
        )}
      </div>
    );
  }

  return null;
};

const PriceField = ({ value }: { value: number | string }) => {
  if (typeof value === 'string') {
    return <>{value}</>;
  }

  return (
    <>
      €{Number(value).toLocaleString()}
      <span>/mo</span>
    </>
  );
};
