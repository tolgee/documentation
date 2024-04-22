import React, { ReactNode } from 'react';

export type SecondaryPrice = {
  label: ReactNode;
  value: ReactNode;
};

type Props = {
  secondaryPrices: SecondaryPrice[];
};

export const SecondaryPrices = ({ secondaryPrices }: Props) => {
  return (
    <>
      {secondaryPrices?.map((price, i) => (
        <div key={i} className="pricing__option-secondary-price--container">
          <div className="pricing__option-secondary-price--label">
            {price.label}
          </div>
          <div className="pricing__option-secondary-price--value">
            {price.value}
          </div>
        </div>
      ))}
    </>
  );
};
