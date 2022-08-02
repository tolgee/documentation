import React, { FC } from 'react';
import './LandingPageInstallationStep.css';

export const LandingPageInstallationStep: FC<{
  title: string;
}> = ({ children, title }) => (
  <div className="installation-guide__step">
    <h3>{title}</h3>
    {children}
  </div>
);
