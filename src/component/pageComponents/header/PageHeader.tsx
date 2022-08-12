import React from 'react';
import { FC } from 'react';
import clsx from 'clsx';

export const PageHeader: FC<{ className?: string; noPadding?: boolean }> = (
  props
) => (
  <header
    className={clsx(
      'header flex flex-col items-center justify-center mx-3 sm:mx-4',
      !props.noPadding && 'pt-[180px] sm:pt-[220px]',
      props.className
    )}
  >
    {' '}
    {props.children}
  </header>
);
