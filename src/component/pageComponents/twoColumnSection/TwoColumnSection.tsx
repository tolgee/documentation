import React, {FC} from "react";
import clsx from "clsx";

export const TwoColumnSection: FC<{
  className?: string
}> = ({children, className}) => <section
  className={clsx(`flex items-center justify-center md:max-w-[1200px] mx-auto`, className)}>
  <div className="grid md:grid-cols-2 gap-12 sm:m-12 m-8">
    {children}
  </div>
</section>;
