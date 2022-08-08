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
          gridRowStart="in-context-1"
          gridRowEnd="in-context-2"
        />
        <ConnectingArrow
          className="hidden md:flex"
          gridRowStart="in-context-2"
          gridRowEnd="one-click-screenshots-1"
        />
        <ConnectingArrow
          className="hidden md:flex"
          gridRowStart="one-click-screenshots-1"
          gridRowEnd="one-click-screenshots-2"
        />
      </div>
      <div>
        <TranslatingOnProductionFeature />
        <TrueIntegrationsFeature />
      </div>
    </BaseFeaturePage>
  );
}
