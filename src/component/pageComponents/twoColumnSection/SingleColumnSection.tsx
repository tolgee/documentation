import React, {FC} from "react";
import clsx from "clsx";

export const SingleColumnSection: FC<{
  className?: string
}> = ({children, className}) => <section
  className={clsx(`flex mx-12 md:max-w-[900px] mx-auto flex-col text-center`, className)}>
  {children}
</section>;
