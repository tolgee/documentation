import React from 'react';
import ThemedImage from '@theme/ThemedImage';

import { TwoColumnSection } from '../../twoColumnSection/TwoColumnSection';
import {
  TextColumn,
  TextColumnText,
  TextColumnTitle,
} from '../../twoColumnSection/TextColumn';
import { ImageColumn } from '../../twoColumnSection/ImageColumn';
import { GradientText } from '../../../GradientText';
import { FeatureHeader } from '../FeatureHeader';

export const InContextFeature = () => {
  return (
    <>
      <FeatureHeader
        gridRow="1"
        title="In context translating"
        id="in-context"
      />
      <TwoColumnSection gridRow="2">
        <ImageColumn>
          <ThemedImage
            alt="In context ALT key"
            sources={{
              light: '/img/features/in-context1-light.svg',
              dark: '/img/features/in-context1-dark.svg',
            }}
          />
        </ImageColumn>
        <TextColumn>
          <TextColumnTitle>No more time wasted.</TextColumnTitle>
          <TextColumnText>
            Add translations in the code, translate them directly in the App
            with Tolgee i18n tool. Clicking an element with while holding{' '}
            <GradientText>ALT / Option key</GradientText> opens a dialog, where
            you can simply modify your strings. No need to edit large
            .json/.po/.whatever file. In-context translating works great also in
            production environment.
          </TextColumnText>
        </TextColumn>
      </TwoColumnSection>

      <TwoColumnSection gridRow="3">
        <ImageColumn>
          <ThemedImage
            alt="In context dialog"
            sources={{
              light: '/img/features/in-context2-light.svg',
              dark: '/img/features/in-context2-dark.svg',
            }}
          />
        </ImageColumn>
        <TextColumn>
          <TextColumnTitle>No more mistakes.</TextColumnTitle>
          <TextColumnText>
            Translating in the context is the best way how to avoid mistakes
            translators make because of missing context. Imagine you&apos;ve got
            just words, strings, phrases without knowing how they related,
            what&apos;s their order or where are they placed in the App.
          </TextColumnText>
        </TextColumn>
      </TwoColumnSection>
    </>
  );
};
