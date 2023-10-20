import React from 'react';

import './_ScreenshotWrapper.css';

type Props = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export const ScreenshotWrapper = (props: Props) => {
  return (
    <div className="screenshot-wrapper--container">
      <div className="screenshot-wrapper--header">
        <div className="screenshot-wrapper--dot" />
        <div className="screenshot-wrapper--dot" />
        <div className="screenshot-wrapper--dot" />
      </div>
      <img {...props} />
    </div>
  );
};
