import React, { useState } from 'react';

import { ScreenWrapper } from './_ScreenWrapper';

type Props = React.DetailedHTMLProps<
  React.VideoHTMLAttributes<HTMLVideoElement>,
  HTMLVideoElement
>;

export const ScreenRecording = ({ style, ...props }: Props) => {
  const [visible, setVisible] = useState(false);
  return (
    <ScreenWrapper style={{ opacity: visible ? 1 : 0 }}>
      <video
        style={{ maxWidth: '100%', margin: '0 auto', ...style }}
        loop
        autoPlay
        muted
        {...props}
        onLoadedData={() => {
          setVisible(true);
        }}
      />
    </ScreenWrapper>
  );
};
