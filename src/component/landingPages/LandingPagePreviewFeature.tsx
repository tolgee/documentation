import clsx from 'clsx';
import React, { FC } from 'react';
import './LandingPagePreviewFeature.css';

export const LandingPagePreviewFeature: FC<{
  videoSrc: string;
  bigger?: boolean;
}> = ({ children, videoSrc, bigger }) => (
  <div className="integration__preview-feature">
    <div className="integration__preview-feature-text">{children}</div>
    <div
      className={clsx(
        'browser',
        'integration__preview-feature-video',
        bigger && 'integration__preview-feature-video--bigger'
      )}
    >
      <video loop autoPlay muted playsInline>
        <source src={videoSrc} />
      </video>
    </div>
  </div>
);
