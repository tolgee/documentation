import clsx from 'clsx';
import React from 'react';

type CoolButtonProps<T extends React.ElementType | undefined> = {
  primary: boolean;
  component?: T;
} & React.ComponentProps<T extends React.ElementType ? T : 'div'>;

export const CoolButton = <T extends React.ElementType>({
  primary,
  component: Component,
  children,
  className,
  ...props
}: CoolButtonProps<T>) => {
  if (Component === undefined) {
    Component = 'div';
  }
  return (
    <Component
      role="button"
      {...props}
      className={clsx(
        className,
        'button--outlined button--small flex gap-2 items-center',
        !primary &&
          'text-home-text hover:text-home-text border-home-text before:bg-emphasis-700 before:content-[""]'
      )}
    >
      {children}
    </Component>
  );
};
