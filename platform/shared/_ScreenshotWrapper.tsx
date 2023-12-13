import React from 'react';
import { ScreenWrapper } from './_ScreenWrapper';

type Props = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export const ScreenshotWrapper = (props: Props) => {
  return (
    <ScreenWrapper>
      <img {...props} />
    </ScreenWrapper>
  );
};
