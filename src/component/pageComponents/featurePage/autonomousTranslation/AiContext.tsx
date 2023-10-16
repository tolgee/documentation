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

export const AiContext = () => {
  return (
    <>
      <FeatureHeader title="Context for AI" id={AI_TRANSLATOR} />
      <TwoColumnSection>
        <ImageColumn className="items-center">
          <ThemedImage
            style={{ padding: 30 }}
            alt="Auto translation"
            sources={{
              light: '/img/features/ai-context-light.svg',
              dark: '/img/features/ai-context-dark.svg',
            }}
          />
        </ImageColumn>
        <TextColumn>
          <TextColumnTitle>Your context is not ignored.</TextColumnTitle>
          <TextColumnText>
            With Tolgee’s contextual technology, strings are translated with
            their context. And context is king. Tolgee Translator doesn’t ignore
            it like other translators. That’s why Tolgee can provide the best
            results ever.
          </TextColumnText>
          <TextColumnTitle>Automated context extraction.</TextColumnTitle>
          <TextColumnText>
            Tolgee integrations extract context from your App automatically. You
            don’t have to bother developers or designers by asking them to
            provide the description or to take screenshots for every key. Tolgee
            does this for you. Read more here.
          </TextColumnText>
        </TextColumn>
      </TwoColumnSection>
    </>
  );
};
