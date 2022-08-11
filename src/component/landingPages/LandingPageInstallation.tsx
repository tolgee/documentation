import React, { FC } from 'react';
import { GradientText } from '../GradientText';

export const LandingPageInstallation: FC = ({ children }) => (
  <>
    <div className="container integration">
      <section className="installation-guide">
        <h2 className="installation-guide__headline">
          <GradientText>Get started!</GradientText>
        </h2>
        {children}
      </section>
    </div>
  </>
);
