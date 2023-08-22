import React from 'react';

export type BillingType = 'monthly' | 'annually';

type Props = {
  billingType?: BillingType;
  toggleBillingType?: () => void;
};

export const BillingSwitch = ({ billingType, toggleBillingType }: Props) => {
  return (
    <button onClick={toggleBillingType} className="pricing__billing-switch">
      {billingType === 'monthly'
        ? 'Switch to annual billing'
        : 'Switch to monthly billing'}
    </button>
  );
};
