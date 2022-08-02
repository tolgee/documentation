import React from 'react';
import { InContextFeature } from '../../component/pageComponents/featurePage/devTools/InContextFeature';
import { OneClickScreenshotsFeature } from '../../component/pageComponents/featurePage/devTools/OneClickScreenshotsFeature';
import { TranslatingOnProductionFeature } from '../../component/pageComponents/featurePage/devTools/TranslatingOnProductionFeature';
import { TrueIntegrationsFeature } from '../../component/pageComponents/featurePage/devTools/TrueIntegrationsFeature';
import { BaseFeaturePage } from '../../component/pageComponents/featurePage/BaseFeaturePage';

// noinspection JSUnusedGlobalSymbols
export default function DevTools() {
  return (
    <BaseFeaturePage title="Dev tools" title2="Do it faster.">
      <InContextFeature />
      <OneClickScreenshotsFeature />
      <TranslatingOnProductionFeature />
      <TrueIntegrationsFeature />
    </BaseFeaturePage>
  );
}
