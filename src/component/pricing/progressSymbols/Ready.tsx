import React from 'react';
import { PricingCheckMark } from './svg/PricingCheckMark';

type Props = {
  children?: React.ReactNode;
};

export function Ready({ children }: Props) {
  return (
    <>
      <span className="pricing__features-option--checkmark">
        <PricingCheckMark />
      </span>
      {children}
    </>
  );
}
