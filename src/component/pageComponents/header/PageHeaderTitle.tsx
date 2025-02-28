import React, { FC } from 'react';
import clsx from 'clsx';
import { GradientText } from '../../GradientText';

export const PageHeaderTitle: FC<{
  active?: boolean;
  className?: string;
  h1?: boolean;
  children?: React.ReactNode;
}> = (props) => {
  const Header = props.h1 ? 'h1' : 'h2';

  return (
    <Header className={clsx('header__title text-center', props.className)}>
      {props.active ? (
        <GradientText>{props.children}</GradientText>
      ) : (
        props.children
      )}
    </Header>
  );
};
