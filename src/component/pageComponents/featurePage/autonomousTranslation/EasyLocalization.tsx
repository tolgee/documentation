import React from 'react';
import ThemedImage from '@theme/ThemedImage';
import {
  TextColumnText,
  TextColumnTitle,
} from '../../twoColumnSection/TextColumn';
import { SingleColumnSection } from '../../twoColumnSection/SingleColumnSection';

export const EasyLocalization = () => {
  return (
    <>
      <SingleColumnSection>
        <ThemedImage
          alt="Easy localization"
          sources={{
            light: '/img/features/easy-localization-light.svg',
            dark: '/img/features/easy-localization-dark.svg',
          }}
          style={{
            maxWidth: 130,
            alignSelf: 'center',
            paddingBottom: 80,
            paddingTop: 80,
          }}
        />
        <TextColumnTitle>The localization was never easier.</TextColumnTitle>
        <TextColumnText>
          Add the keys to the Tolgee In-context editor and get all translated
          automatically. It’s that simple. Right after that, you can ship your
          localized App.
        </TextColumnText>
      </SingleColumnSection>
    </>
  );
};
