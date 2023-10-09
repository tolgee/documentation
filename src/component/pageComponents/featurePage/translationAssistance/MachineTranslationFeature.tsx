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
import { ReviewAuthor } from '../../../reviewAuthor/ReviewAuthor';

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
          <ReviewAuthor
            author={{
              imageURL: '/img/reviewers/eunice.jpeg',
              name: 'Eunice H.',
              title: 'Data Scientist',
            }}
            description="What I like the most is the automated translation which is very accurate and help me translate everything in a very short period of time. It is a real gain of time."
            capterraReview="https://www.capterra.com/p/10002120/Tolgee/reviews/4453333/"
          />
        </TextColumn>
      </TwoColumnSection>
    </>
  );
};
