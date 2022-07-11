import React, {FC} from "react";

export const FeaturesContainer: FC<{ title?: string, showCallToAction?: boolean }> = ({title = "Key features", showCallToAction = true, children}) => <section
  className="text-white bg-gradient-to-b from-[var(--home-features-gradient-1)] via-[var(--home-features-gradient-2)] to-[var(--home-features-gradient-3)] flex flex-col items-center">
  <h2 className="mt-12 mb-0">{title}</h2>
  <div className="max-w-[1240px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-4 md:gap-12 md:m-12 mb-12 mt-12">
    {children}
  </div>

  {showCallToAction && <a href="https://app.tolgee.io/sign_up" className="button--primary-reverse dark:button--primary mb-12">Start translating now</a>}
</section>;
