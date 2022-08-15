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
import { TRANSLATING_ON_PRODUCTION } from '../hashLinks';

export const TranslatingOnProductionFeature = () => {
  return (
    <>
      <FeatureHeader
        title="Translating on production"
        id={TRANSLATING_ON_PRODUCTION}
      />
      <TwoColumnSection>
        <TextColumn>
          <TextColumnTitle>Delegate it.</TextColumnTitle>
          <TextColumnText>
            In-context translating also works in the production environment of
            your deployed app. Using the Tolgee Tools Chrome plugin, you can
            simply provide your API key and start translating. This enables
            anybody without developer knowledge to translate your app.
          </TextColumnText>
        </TextColumn>
        <ImageColumn>
          <ThemedImage
            alt="In context dialog"
            sources={{
              light: '/img/features/in-context-on-production-light.svg',
              dark: '/img/features/in-context-on-production-dark.svg',
            }}
          />
        </ImageColumn>
      </TwoColumnSection>
    </>
  );
};
