import React from 'react';

import './_ScreenWrapper.css';

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const ScreenWrapper = ({ children, ...props }: Props) => {
  return (
    <div {...props} className="screen-wrapper--container">
      <div className="screen-wrapper--header">
        <div className="screen-wrapper--dot" />
        <div className="screen-wrapper--dot" />
        <div className="screen-wrapper--dot" />
      </div>
      {children}
    </div>
  );
};
