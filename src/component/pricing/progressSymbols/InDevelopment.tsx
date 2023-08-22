import { Tooltip } from '@mui/material';
import React from 'react';
import { PricingInDevelopment } from './svg/PricingInDevelopment';

type Props = {
  children?: React.ReactNode;
};

export function InDevelopment({ children }: Props) {
  return (
    <>
      <Tooltip title="Feature is in development" disableInteractive>
        <span className="pricing__with-hint">
          <span className="pricing__features-option--checkmark">
            <PricingInDevelopment />
          </span>
          <span>{children}</span>
        </span>
      </Tooltip>
    </>
  );
}
