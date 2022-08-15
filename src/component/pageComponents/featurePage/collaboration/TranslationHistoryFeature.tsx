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
import { TRANSLATION_HISTORY } from '../hashLinks';

export const TranslationHistoryFeature = () => {
  return (
    <>
      <FeatureHeader title="Translation history" id={TRANSLATION_HISTORY} />
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
            See the changes to specific translations of a specific key in a
            specific language. Something is wrong? You know where to point the
            finger!
          </TextColumnText>
        </TextColumn>
      </TwoColumnSection>
    </>
  );
};
