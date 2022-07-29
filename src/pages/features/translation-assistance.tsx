import React from "react"
import Head from "@docusaurus/Head";
import baseSchema from "../../info/organization";
import DecoratedLayout from "../../theme/DecoratedLayout";
import {EmphasisPageHeader} from "../../component/pageComponents/header/EmphasisPageHeader";
import {AutoTranslationFeature} from "../../component/pageComponents/featurePage/translatinAssistance/AutoTranslationFeature";
import {MachineTranslationFeature} from "../../component/pageComponents/featurePage/translatinAssistance/MachineTranslationFeature";
import {TranslationMemoryFeature} from "../../component/pageComponents/featurePage/translatinAssistance/TranslationMemoryFeature";

// noinspection JSUnusedGlobalSymbols
export default () => {
  return (<div className="home__container">
    <Head>
      <script type="application/ld+json">{JSON.stringify(baseSchema)}</script>
    </Head>
    <DecoratedLayout
      title={baseSchema.slogan}
      description={baseSchema.description}
    >
      <EmphasisPageHeader title="Translation assistance." title2="Let the machines work for you."/>
      <AutoTranslationFeature/>
      <MachineTranslationFeature />
      <TranslationMemoryFeature />
    </DecoratedLayout>
  </div>)
}
