import React, { FC } from 'react';
import clsx from 'clsx';

export const TwoColumnSection: FC<{
  className?: string;
  gridArea?: string;
}> = ({ children, className, gridArea }) => (
  <section
    className={clsx(
      `flex items-center justify-center md:max-w-[1200px] basis-[1000px] mx-auto w-full`,
      className
    )}
    style={{ gridArea }}
  >
    <div className="grid md:grid-cols-2 gap-12 sm:m-12 m-8 w-full">
      {children}
    </div>
  </section>
);
