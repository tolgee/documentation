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
      <TwoColumnSection gridRow="2" className="md:pl-20">
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
            Add translations in the code, and translate them directly in the app
            with the Tolgee i18n tool. Clicking an element while holding the{' '}
            <GradientText>ALT/option</GradientText> key opens a dialog where you
            can simply modify your strings. No need to edit large
            .json/.po/.whatever file. In-context translating works great also in
            the production environment.
          </TextColumnText>
        </TextColumn>
      </TwoColumnSection>

      <TwoColumnSection gridRow="3" className="md:pl-20">
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
            Translating in the context is the best way to avoid mistakes
            translators make because of missing context. Imagine you&apos;ve got
            just words, strings, and phrases without knowing how they relate,
            what order they should be in, or where are they located in the app.
          </TextColumnText>
        </TextColumn>
      </TwoColumnSection>
    </>
  );
};
