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

export const TranslationHistoryFeature = () => {
  return (
    <>
      <FeatureHeader title="Translation history" id="translation-history" />
      <TwoColumnSection>
        <ImageColumn>
          <ThemedImage
            alt="Translation memory"
            sources={{
              light: '/img/features/translation-history-light.svg',
              dark: '/img/features/translation-history-dark.svg',
            }}
          />
        </ImageColumn>
        <TextColumn>
          <TextColumnTitle>See the changes.</TextColumnTitle>
          <TextColumnText>
            See the changes of specific translation of specific key in specific
            language. Something is wrong? Blame the guilty!
          </TextColumnText>
        </TextColumn>
      </TwoColumnSection>
    </>
  );
};
