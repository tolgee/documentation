import React from 'react';
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
          <img
            alt="Auto translation"
            src="/img/features/auto-translation-light.svg"
          />
        </ImageColumn>
        <TextColumn>
          <TextColumnTitle>Just translated.</TextColumnTitle>
          <TextColumnText>
            When enabled. Tolgee automatically translates new keys using
            translation memory or machine translation services. Your strings are
            translated immediately, right after creation.
          </TextColumnText>
          <TextColumnTitle>Choose your weapon.</TextColumnTitle>
          <TextColumnText>
            Select if you would like to use translation memory or/and which
            machine translation service you would like to use to automatically
            translate new keys.
          </TextColumnText>
        </TextColumn>
      </TwoColumnSection>
    </>
  );
};
