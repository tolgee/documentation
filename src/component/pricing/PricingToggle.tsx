import Link from '@docusaurus/Link';
import clsx from 'clsx';
import React from 'react';

export type PricingType = 'cloud' | 'self-hosted';

type Props = {
  value: PricingType;
};

export const PricingToggle: React.FC<Props> = ({ value }) => {
  return (
    <div className="pricing__toggle">
      <Link
        to="/pricing"
        className={clsx('pricing__toggle-button', {
          'pricing__toggle-button--selected': value === 'cloud',
        })}
      >
        Cloud
      </Link>
      <Link
        className={clsx('pricing__toggle-button', {
          'pricing__toggle-button--selected': value === 'self-hosted',
        })}
        to="/pricing/self-hosted"
      >
        Self-hosted
      </Link>
    </div>
  );
};
