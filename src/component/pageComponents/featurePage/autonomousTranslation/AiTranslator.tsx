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
import { AI_TRANSLATOR } from '../hashLinks';

export const AiTranslator = () => {
  return (
    <>
      <FeatureHeader title="Tolgee AI Translator" id={AI_TRANSLATOR} />
      <TwoColumnSection>
        <TextColumn>
          <TextColumnTitle>Save time and money.</TextColumnTitle>
          <TextColumnText>
            We live in the 2020s. This is the decade of AI. Reduce the time and
            costs required to localize your App with state-of-the-art
            technology. Tolgee translator provides great results in much less
            time and is way cheaper than human translators.
          </TextColumnText>
          <TextColumnTitle>App localized immediately.</TextColumnTitle>
          <TextColumnText>
            With the auto-translation feature, you just add the strings to the
            Tolgee Platform. And boom! It’s reliably translated with Tolgee
            Translator. No more waiting for a human translator. Welcome the
            revolution.
          </TextColumnText>
        </TextColumn>
        <ImageColumn className="items-center">
          <ThemedImage
            style={{ padding: 30 }}
            alt="Auto translation"
            sources={{
              light: '/img/features/ai-translator-light.svg',
              dark: '/img/features/ai-translator-dark.svg',
            }}
          />
        </ImageColumn>
      </TwoColumnSection>
    </>
  );
};
