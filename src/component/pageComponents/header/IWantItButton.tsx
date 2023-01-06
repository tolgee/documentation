import React, { FC } from 'react';
import clsx from 'clsx';

export const IWantItButton: FC<{ className?: string }> = ({
  className,
  children = 'I want it',
}) => (
  <a
    className={clsx('button--primary', className)}
    href="https://app.tolgee.io/sign_up"
  >
    {children}
  </a>
);
