import CodeBlock from '@theme/CodeBlock';
import React, { FC } from 'react';
import { OptimizedImage } from '../OptimizedImage';
import './LandingPageDescription.css';

export const LandingPageDescription: FC<{
  installationCommand?: string;
  imageLinks?: { light: string; dark: string };
}> = ({ children, installationCommand, imageLinks }) => (
  <div className="container integration">
    <header className="integration__header">
      <div className="integration__headline-description">
        <div className="integration__headline-description-text">{children}</div>
        {installationCommand && (
          <div className="integration__headline-head-code">
            <CodeBlock>{installationCommand}</CodeBlock>
          </div>
        )}
        {imageLinks && (
          <OptimizedImage
            sources={{
              light: imageLinks.light,
              dark: imageLinks.dark,
            }}
            className="integration__headline-head-image"
          />
        )}
      </div>
    </header>
  </div>
);
