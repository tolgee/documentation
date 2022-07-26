import React, {FC} from "react";
import clsx from "clsx";
import {GradientText} from "../../GradientText";

export const PageHeaderTitle: FC<{ active?: boolean, className?: string }> = (props) => <h1
  className={clsx("header__title", props.className)}>
  {props.active ?
    <GradientText>{props.children}</GradientText>
    :
    props.children
  }
</h1>;
