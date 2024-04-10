import CodeBlock from '@theme/CodeBlock';
import React, { FC, ReactNode } from 'react';
import './LandingPageDescription.css';

export const LandingPageDescription: FC<{
  installationCommand?: string;
  image?: ReactNode;
}> = ({ children, installationCommand, image }) => (
  <div className="container integration">
    <header className="integration__header">
      <div className="integration__headline-description">
        <div className="integration__headline-description-text">{children}</div>
        {installationCommand && (
          <div className="integration__headline-head-code">
            <CodeBlock>{installationCommand}</CodeBlock>
          </div>
        )}
        {image && (
          <div className="integration__headline-head-image">{image}</div>
        )}
      </div>
    </header>
  </div>
);
