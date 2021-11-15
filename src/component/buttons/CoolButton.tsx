import clsx from "clsx";
import React from "react";
import "./CoolButton.css";

type CoolButtonProps<T extends React.ElementType | undefined> = {
  component?: T;
} & React.ComponentProps<T extends React.ElementType ? T : "div">;

export const CoolButton = <T extends React.ElementType>({
  component: Component,
  children,
  className,
  ...props
}: CoolButtonProps<T>) => {
  if (Component === undefined) {
    Component = "div";
  }
  return (
    <Component
      role="button"
      {...props}
      className={clsx(className, "cool-button")}
    >
      {children}
    </Component>
  );
};
