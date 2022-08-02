import CodeBlock from '@theme/CodeBlock';
import React, { FC } from 'react';
import './LandingPageDescription.css';

export const LandingPageDescription: FC<{
  installationCommand: string;
}> = ({ children, installationCommand }) => (
  <div className="container integration">
    <header className="integration__header">
      <div className="integration__headline-description">
        <div className="integration__headline-description-text">{children}</div>
        <div className="integration__headline-head-code">
          <CodeBlock>{installationCommand}</CodeBlock>
        </div>
      </div>
    </header>
  </div>
);
