import React, { FC } from 'react';
import { GradientText } from '../../GradientText';
import clsx from 'clsx';

export const TextColumnTitle: FC = (props) => (
  <h2 className="text-3xl lg:text-[36px] lg:leading-[44px]">
    <GradientText>{props.children}</GradientText>
  </h2>
);

export const TextColumnText: FC = (props) => (
  <p className="text-[16px] md:text-[19px]">{props.children}</p>
);

export const TextColumn: FC<{ className?: string }> = (props) => (
  <div
    className={clsx(
      'flex justify-center md:items-end items-center flex-col text-center md:text-left',
      props.className
    )}
  >
    <div className="max-w-[475px]">{props.children}</div>
  </div>
);
