import React from 'react';
import clsx from 'clsx';

import './_RoundedImageWrapper.css';

type Props = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

// Rounds the image's corners in both themes, and in dark mode also lifts it
// with a shadow so it doesn't sit as a harsh light rectangle against a dark
// page. Unlike ScreenshotWrapper/FigmaScreenshotWrapper, this adds no header
// chrome, so it suits shots that already carry their own window or show more
// of Figma than the plugin panel.
export const RoundedImageWrapper = (props: Props) => {
  return (
    <img {...props} className={clsx(props.className, 'rounded-image-wrapper--img')} />
  );
};
