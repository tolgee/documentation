import React, { FC } from 'react';

export const LandingPagePreviewFeatures: FC = ({ children }) => (
  <div className="container integration">
    <section className="integration__preview-feature-section">
      {children}
    </section>
  </div>
);
