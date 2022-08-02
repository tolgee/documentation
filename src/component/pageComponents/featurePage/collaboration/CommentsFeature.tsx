import React from 'react';
import { TwoColumnSection } from '../../twoColumnSection/TwoColumnSection';
import {
  TextColumn,
  TextColumnText,
  TextColumnTitle,
} from '../../twoColumnSection/TextColumn';
import { ImageColumn } from '../../twoColumnSection/ImageColumn';
import { GradientText } from '../../../GradientText';
import { FeatureHeader } from '../FeatureHeader';

export const CommentsFeature = () => {
  return (
    <>
      <FeatureHeader title="Comment on translations" id="comments" />
      <TwoColumnSection>
        <TextColumn>
          <TextColumnTitle>Say what you think.</TextColumnTitle>
          <TextColumnText>
            Something odd? Tell others what you would change. You can comment{' '}
            <GradientText>every translation</GradientText> in Tolgee platform.
          </TextColumnText>
        </TextColumn>
        <ImageColumn>
          <img
            alt="Translation memory"
            src="/img/features/translation-comments-light.svg"
          />
        </ImageColumn>
      </TwoColumnSection>
    </>
  );
};
