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

export const AutoTranslationFeature = () => {
  return (
    <>
      <FeatureHeader title="Auto translation" id="auto-translatiom" />
      <TwoColumnSection>
        <ImageColumn>
          <ThemedImage
            alt="Auto translation"
            sources={{
              light: '/img/features/auto-translation-light.svg',
              dark: '/img/features/auto-translation-dark.svg',
            }}
          />
        </ImageColumn>
        <TextColumn>
          <TextColumnTitle>Just translated.</TextColumnTitle>
          <TextColumnText>
            When enabled, Tolgee automatically translates new keys using
            translation memory or machine translation services. Your strings are
            translated immediately, right after creation.
          </TextColumnText>
          <TextColumnTitle>Choose your weapon.</TextColumnTitle>
          <TextColumnText>
            Select if you would like to use translation memory and/or which
            machine translation service you would like to use to automatically
            translate new keys.
          </TextColumnText>
        </TextColumn>
      </TwoColumnSection>
    </>
  );
};
