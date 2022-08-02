import React from 'react';

type Props = {
  name: string;
  description: string;
};

export const PricingFeatureRow: React.FC<Props> = ({ name, description }) => {
  return (
    <>
      <div className="pricing__features-table-name">{name}</div>
      <div>{'>'}</div>
      <div className="pricing__features-table-description">{description}</div>
    </>
  );
};
