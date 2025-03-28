import React from 'react';
import { FC } from 'react';
import clsx from 'clsx';

export const PageHeader: FC<{
  className?: string;
  noPadding?: boolean;
  children?: React.ReactNode;
}> = (props) => (
  <header
    className={clsx(
      'header flex flex-col items-center justify-center mx-3 sm:mx-4',
      !props.noPadding && 'pt-[120px] md:pt-[180px]',
      props.className
    )}
  >
    {props.children}
  </header>
);
