import CodeBlock from "@theme/CodeBlock";
import clsx from "clsx";
import React, { FC } from "react";
import "./LandingPageInstallationCode.css";

export const LandingPageInstallationCode: FC<{
  fullWidth?: boolean;
  language?: string;
}> = ({ children, fullWidth, language }) => (
  <div
    className={clsx(
      "installation-guide__step-code",
      fullWidth && "installation-guide__step-code--full-width"
    )}
  >
    <CodeBlock className={clsx(language && `language-${language}`)}>
      {children}
    </CodeBlock>
  </div>
);
