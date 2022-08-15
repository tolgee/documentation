import React from 'react';
import {
  TextColumnText,
  TextColumnTitle,
} from '../../twoColumnSection/TextColumn';
import { FeatureHeader } from '../FeatureHeader';
import { SingleColumnSection } from '../../twoColumnSection/SingleColumnSection';
import { TechnologyIcons } from '../../../TechnologyIcons';

export function TolgeeIsRealTexts() {
  return (
    <>
      <TextColumnTitle>Tolgee is real</TextColumnTitle>
      <TextColumnText>
        Tolgee is not just another localization platform offering integrations
        that just sync your local data with the backend. Tolgee is truly
        integrated into your app via SDKs.
      </TextColumnText>
    </>
  );
}

export const TrueIntegrationsFeature = () => {
  return (
    <>
      <FeatureHeader title="True integrations" id="true-integrations" />
      <SingleColumnSection>
        <TolgeeIsRealTexts />
        <TechnologyIcons className="justify-center" />
      </SingleColumnSection>
    </>
  );
};
