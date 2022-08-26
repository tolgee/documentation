import clsx from 'clsx';
import React, { FC } from 'react';

type Props = {
  className?: string;
};

export const ImageColumn: FC<Props> = (props) => (
  <div
    className={clsx(
      'flex items-center justify-center xl:w-[100%] flex-grow',
      props.className
    )}
  >
    {props.children}
  </div>
);
