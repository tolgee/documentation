import React, { FC } from "react";

export const LandingPageInstallation: FC<{}> = ({ children }) => (
  <>
    <div className="container">
      <section className="installation-guide">
        <h2 className="installation-guide__headline">Get started!</h2>
        {children}
      </section>
    </div>
  </>
);
