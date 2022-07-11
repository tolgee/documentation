import React, {ElementType, ReactNode} from "react";
import clsx from "clsx";

type GradientTextOwnProps<E extends React.ElementType = React.ElementType> = {
  children: ReactNode
  as?: E
}

type GradientTextProps<E extends React.ElementType> = GradientTextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof GradientTextOwnProps>

const __DEFAULT_ELEMENT__ = 'span'

export function GradientText<E extends React.ElementType = typeof __DEFAULT_ELEMENT__>({
                                                                           children,
                                                                           as,
                                                                           ...props
                                                                         }: GradientTextProps<E>) {
  const Component = as || __DEFAULT_ELEMENT__
  return <Component {...props} className={clsx("text-gradient", props.className)}>{children}</Component>
}
