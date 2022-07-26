import React, {FC} from "react";
import clsx from "clsx";
import {GradientText} from "../../GradientText";

export const PageHeaderSubtitle: FC<{ active?: boolean, className?: string }> = (props) => <h1
  className={clsx("text-2xl text-home-text font-[600] mb-0", props.className)}>
  {props.children}
</h1>;
