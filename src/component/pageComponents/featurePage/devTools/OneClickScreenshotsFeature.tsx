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
import { ONE_CLICK_SCREENSHOTS } from '../hashLinks';

export const OneClickScreenshotsFeature = () => {
  return (
    <>
      <FeatureHeader
        gridRow="4"
        title="One click screenshots"
        id={ONE_CLICK_SCREENSHOTS}
      />
      <TwoColumnSection gridRow="5" className="md:pl-20">
        <ImageColumn>
          <ThemedImage
            alt="One-click screenshots"
            sources={{
              light: '/img/features/one-click-screenshots1-light.svg',
              dark: '/img/features/one-click-screenshots1-dark.svg',
            }}
          />
        </ImageColumn>{' '}
        <TextColumn>
          <TextColumnTitle>Once.</TextColumnTitle>
          <TextColumnText>
            That&apos;s how many times you have to click to take a screenshot
            from your application with highlighted phrases to translate. Just
            ALT + click a string and hit the camera button. Boom! Screenshot
            generated.
          </TextColumnText>
        </TextColumn>
      </TwoColumnSection>
      <TwoColumnSection gridRow="6" className="md:pl-20">
        <ImageColumn>
          <ThemedImage
            alt="One-click screenshots"
            sources={{
              light: '/img/features/one-click-screenshots2-light.svg',
              dark: '/img/features/one-click-screenshots2-dark.svg',
            }}
          />
        </ImageColumn>
        <TextColumn>
          <TextColumnTitle>Highlighted.</TextColumnTitle>
          <TextColumnText>
            Screenshots provide context to your translators. Translating
            software without context always generates a lot of errors.
            Don&apos;t wait for your customers to tell you what&apos;s wrong.
            Provide perfect results right away.
          </TextColumnText>
        </TextColumn>
      </TwoColumnSection>
    </>
  );
};
