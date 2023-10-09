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
import { COMMENTS } from '../hashLinks';
import { ReviewAuthor } from '../../../reviewAuthor/ReviewAuthor';

export const CommentsFeature = () => {
  return (
    <>
      <FeatureHeader title="Comment on translations" id={COMMENTS} />
      <TwoColumnSection>
        <TextColumn className="row-start-2 col-start-1 md:row-start-1">
          <TextColumnTitle>Say what you think.</TextColumnTitle>
          <TextColumnText>
            Something look off? Tell others what you would change. You can
            comment <GradientText>every translation</GradientText> on Tolgee
            platform.
          </TextColumnText>
          <ReviewAuthor
            author={{
              imageURL: '/img/reviewers/marek.jpg',
              name: 'Marek L.',
              title: 'Product Owner',
            }}
            description="Very intuitive and user-friendly interface that makes it easy to navigate and use, even for those who are new. Collaboration with others is great. I invited a colleague and she was able to understand so quickly what to do."
            capterraReview="https://www.capterra.com/p/10002120/Tolgee/reviews/4637915/"
          />
        </TextColumn>
        <ImageColumn className="row-start-1 col-start-1 md:col-start-2">
          <ThemedImage
            alt="Translation memory"
            sources={{
              light: '/img/features/translation-comments-light.svg',
              dark: '/img/features/translation-comments-dark.svg',
            }}
          />
        </ImageColumn>
      </TwoColumnSection>
    </>
  );
};
