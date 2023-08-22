import React, { FC } from 'react';
import clsx from 'clsx';

export const PageHeaderSubtitle: FC<{
  active?: boolean;
  className?: string;
  h1?: boolean;
}> = (props) => {
  const Header = props.h1 ? 'h1' : 'h2';

  return (
    <Header
      className={clsx(
        'text-lg sm:text-2xl text-home-text font-[600] mb-0',
        props.className
      )}
    >
      {props.children}
    </Header>
  );
};
