import React, { FC } from 'react';
import clsx from 'clsx';

export const TwoColumnSection: FC<{
  className?: string;
  gridRow?: string | number;
}> = ({ children, className, gridRow }) => (
  <section
    className={clsx(
      `flex items-center justify-center md:max-w-[1200px] basis-[1000px] mx-auto w-full`,
      className
    )}
    style={{ gridRow, gridColumn: 1 }}
  >
    <div className="grid md:grid-cols-2 gap-12 m-2 sm:m-8 w-full">
      {children}
    </div>
  </section>
);
