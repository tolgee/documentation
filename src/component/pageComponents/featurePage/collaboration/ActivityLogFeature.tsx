import React from 'react';
import ThemedImage from '@theme/ThemedImage';

import { TwoColumnSection } from '../../twoColumnSection/TwoColumnSection';
import {
  TextColumn,
  TextColumnText,
  TextColumnTitle,
} from '../../twoColumnSection/TextColumn';
import { ImageColumn } from '../../twoColumnSection/ImageColumn';
import { FeatureHeader } from '../FeatureHeader';
import { ACTIVITY_LOG } from '../hashLinks';

export const ActivityLogFeature = () => {
  return (
    <>
      <FeatureHeader title="Activity log" id={ACTIVITY_LOG} />
      <TwoColumnSection>
        <ImageColumn>
          <ThemedImage
            alt="Activity log"
            sources={{
              light: '/img/features/activity-log-light.svg',
              dark: '/img/features/activity-log-dark.svg',
            }}
          />
        </ImageColumn>
        <TextColumn>
          <TextColumnTitle>Watch growth happen.</TextColumnTitle>
          <TextColumnText>
            See who modified, reviewed or commented on the phrases in your
            project. Clearly.
          </TextColumnText>
        </TextColumn>
      </TwoColumnSection>
    </>
  );
};
