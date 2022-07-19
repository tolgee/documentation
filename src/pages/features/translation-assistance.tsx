import React from "react"
import Head from "@docusaurus/Head";
import baseSchema from "../../info/organization";
import DecoratedLayout from "../../theme/DecoratedLayout";
import {PageHeader} from "../../component/pageComponents/PageHeader";
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
import {AutoTranslationFeature} from "../../component/pageComponents/featurePage/translatinAssistance/AutoTranslationFeature";
import {MachineTranslationFeature} from "../../component/pageComponents/featurePage/translatinAssistance/MachineTranslationFeature";
import {TranslationMemoryFeature} from "../../component/pageComponents/featurePage/translatinAssistance/TranslationMemoryFeature";

export default () => {
  return (<div className="home__container">
    <Head>
      <script type="application/ld+json">{JSON.stringify(baseSchema)}</script>
    </Head>
    <DecoratedLayout
      title={baseSchema.slogan}
      description={baseSchema.description}
    >
      <PageHeader title="Translation assistance." title2="Let the machines work for you."/>
      <AutoTranslationFeature/>
      <MachineTranslationFeature />
      <TranslationMemoryFeature />
    </DecoratedLayout>
  </div>)
}
