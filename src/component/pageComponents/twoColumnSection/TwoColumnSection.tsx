import React, {FC} from "react";
import clsx from "clsx";

export const TwoColumnSection: FC<{
  className?: string
}> = ({children, className}) => <section
  className={clsx(`grid md:grid-cols-2 gap-12 m-12 md:max-w-[1200px] mx-auto`, className)}>
  {children}
</section>;
