import React from 'react';
import { InContextFeature } from '../../component/pageComponents/featurePage/devTools/InContextFeature';
import { OneClickScreenshotsFeature } from '../../component/pageComponents/featurePage/devTools/OneClickScreenshotsFeature';
import { TranslatingOnProductionFeature } from '../../component/pageComponents/featurePage/devTools/TranslatingOnProductionFeature';
import { TrueIntegrationsFeature } from '../../component/pageComponents/featurePage/devTools/TrueIntegrationsFeature';
import { BaseFeaturePage } from '../../component/pageComponents/featurePage/BaseFeaturePage';
import { ConnectingArrow } from '../../component/pageComponents/featurePage/ConnectingArrow';
import { BottomSignUp } from '../../component/pageComponents/featurePage/BottomSignUp';

// noinspection JSUnusedGlobalSymbols
export default function DevTools() {
  return (
    <BaseFeaturePage title="Dev tools" title2="Do it faster.">
      <div className="md:max-w-[1200px] my-0 mx-auto grid">
        <InContextFeature />
        <OneClickScreenshotsFeature />

        <ConnectingArrow
          className="hidden md:flex"
          gridRowStart="2"
          gridRowEnd="4"
        />
        <ConnectingArrow
          className="hidden md:flex"
          gridRowStart="3"
          gridRowEnd="6"
        />
        <ConnectingArrow
          className="hidden md:flex"
          gridRowStart="5"
          gridRowEnd="7"
        />
      </div>
      <div>
        <TranslatingOnProductionFeature />
        <TrueIntegrationsFeature />
        <BottomSignUp label="Ready, Set, Localize!" />
      </div>
    </BaseFeaturePage>
  );
}
