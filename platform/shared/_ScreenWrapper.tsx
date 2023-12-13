import React from 'react';

import './_ScreenWrapper.css';

type Props = { children: React.ReactNode };

export const ScreenWrapper = ({ children }: Props) => {
  return (
    <div className="screen-wrapper--container">
      <div className="screen-wrapper--header">
        <div className="screen-wrapper--dot" />
        <div className="screen-wrapper--dot" />
        <div className="screen-wrapper--dot" />
      </div>
      {children}
    </div>
  );
};
