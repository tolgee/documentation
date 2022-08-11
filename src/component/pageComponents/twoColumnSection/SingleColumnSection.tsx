import React, { FC } from 'react';
import clsx from 'clsx';

export const SingleColumnSection: FC<{
  className?: string;
}> = ({ children, className }) => (
  <section
    className={clsx(
      `flex mx-12 md:max-w-[900px] md:mx-auto flex-col text-center my-2 sm:my-6 md:px-16`,
      className
    )}
  >
    {children}
  </section>
);
