import React, {FC} from "react";
import clsx from "clsx";

export const TwoColumnSection = ({children, className}) => <section
  className={clsx(`grid md:grid-cols-2 gap-4 md:h-[750px] m-12`, className)}>
  {children}
</section>;
