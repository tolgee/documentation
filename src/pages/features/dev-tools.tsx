import React from 'react';
import { InContextFeature } from '../../component/pageComponents/featurePage/devTools/InContextFeature';
import { OneClickScreenshotsFeature } from '../../component/pageComponents/featurePage/devTools/OneClickScreenshotsFeature';
import { TranslatingOnProductionFeature } from '../../component/pageComponents/featurePage/devTools/TranslatingOnProductionFeature';
import { TrueIntegrationsFeature } from '../../component/pageComponents/featurePage/devTools/TrueIntegrationsFeature';
import { BaseFeaturePage } from '../../component/pageComponents/featurePage/BaseFeaturePage';
import './dev-tools.css';
import { ConnectingArrow } from '../../component/pageComponents/featurePage/ConnectingArrow';

// noinspection JSUnusedGlobalSymbols
export default function DevTools() {
  return (
    <BaseFeaturePage title="Dev tools" title2="Do it faster.">
      <div className="dev-tools__grid md:pl-20">
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
      </div>
    </BaseFeaturePage>
  );
}
