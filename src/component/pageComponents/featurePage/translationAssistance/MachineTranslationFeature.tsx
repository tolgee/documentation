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
import { MACHINE_TRANSLATION } from '../hashLinks';

export const MachineTranslationFeature = () => {
  return (
    <>
      <FeatureHeader title="Machine translation" id={MACHINE_TRANSLATION} />
      <TwoColumnSection>
        <ImageColumn>
          <ThemedImage
            alt="Machine translation"
            sources={{
              light: '/img/features/machine-translation-light.svg',
              dark: '/img/features/machine-translation-dark.svg',
            }}
          />
        </ImageColumn>
        <TextColumn>
          <TextColumnTitle>Select your service.</TextColumnTitle>
          <TextColumnText>
            We support <GradientText>DeepL</GradientText>,{' '}
            <GradientText>Google Translate</GradientText>, and{' '}
            <GradientText>AWS Translate</GradientText>. Select which services
            you want to use in the settings section.
          </TextColumnText>
          <TextColumnTitle>Machines work for you.</TextColumnTitle>
          <TextColumnText>
            The machine translation features make the whole localization process{' '}
            <GradientText>significantly faster</GradientText>. Translators can
            just use translation suggestions provided by third-party machine
            translation services.
          </TextColumnText>
        </TextColumn>
      </TwoColumnSection>
    </>
  );
};
