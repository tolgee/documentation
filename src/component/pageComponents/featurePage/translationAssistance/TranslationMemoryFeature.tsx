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
import { TRANSLATION_MEMORY } from '../hashLinks';

export const TranslationMemoryFeature = () => {
  return (
    <>
      <FeatureHeader title="Translation memory" id={TRANSLATION_MEMORY} />
      <TwoColumnSection className="mb-36">
        <ImageColumn>
          <ThemedImage
            alt="Translation memory"
            sources={{
              light: '/img/features/translation-memory-light.svg',
              dark: '/img/features/translation-memory-dark.svg',
            }}
          />
        </ImageColumn>
        <TextColumn>
          <TextColumnTitle>We remember.</TextColumnTitle>
          <TextColumnText>
            Tolgee automatically makes suggestions from translations you already
            used in the project so you can translate similar phrases in a
            similar way.
          </TextColumnText>
          <TextColumnText>
            Translation memory suggestions also show the similarity percentage,
            the key, and the original text of the translated string.
          </TextColumnText>
        </TextColumn>
      </TwoColumnSection>
    </>
  );
};
