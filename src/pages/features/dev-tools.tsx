import React from "react"
import Head from "@docusaurus/Head";
import baseSchema from "../../info/organization";
import DecoratedLayout from "../../theme/DecoratedLayout";
import {EmphasisPageHeader} from "../../component/pageComponents/header/EmphasisPageHeader";
import {TwoColumnSection} from "../../component/pageComponents/twoColumnSection/TwoColumnSection";
import {TextColumn, TextColumnText, TextColumnTitle} from "../../component/pageComponents/twoColumnSection/TextColumn";
import {ImageColumn} from "../../component/pageComponents/twoColumnSection/ImageColumn";
import {GradientText} from "../../component/GradientText";
import {CoolButton} from "../../component/buttons/CoolButton";
import {MoreFeatures} from "../../component/pageComponents/featurePage/MoreFeatures";
import {FeatureHeader} from "../../component/pageComponents/featurePage/FeatureHeader";
import {InContextFeature} from "../../component/pageComponents/featurePage/devTools/InContextFeature";
import {OneClickScreenshotsFeature} from "../../component/pageComponents/featurePage/devTools/OneClickScreenshotsFeature";
import {TranslatingOnProductionFeature} from "../../component/pageComponents/featurePage/devTools/TranslatingOnProductionFeature";
import {TrueIntegrationsFeature} from "../../component/pageComponents/featurePage/devTools/TrueIntegrationsFeature";
import {BaseFeaturePage} from "../../component/pageComponents/featurePage/BaseFeaturePage";

// noinspection JSUnusedGlobalSymbols
export default () => {
  return (
    <BaseFeaturePage title="Dev tools" title2="Do it faster.">
      <InContextFeature/>
      <OneClickScreenshotsFeature/>
      <TranslatingOnProductionFeature/>
      <TrueIntegrationsFeature/>
    </BaseFeaturePage>
  )
}
