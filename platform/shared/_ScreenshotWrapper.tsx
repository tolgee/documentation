import React from 'react';
import { ScreenWrapper } from './_ScreenWrapper';
import clsx from 'clsx';

type Props = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export const ScreenshotWrapper = (props: Props) => {
  return (
    <ScreenWrapper>
      <img {...props} className={clsx(props.className, 'zoomable-image')} />
    </ScreenWrapper>
  );
};
