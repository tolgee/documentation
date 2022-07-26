import React from "react"
import Head from "@docusaurus/Head";
import baseSchema from "../../info/organization";
import DecoratedLayout from "../../theme/DecoratedLayout";
import {EmphasisPageHeader} from "../../component/pageComponents/header/EmphasisPageHeader";
import {MoreFeatures} from "../../component/pageComponents/featurePage/MoreFeatures";
import {CommentsFeature} from "../../component/pageComponents/featurePage/collaboration/CommentsFeature";
import {ActivityLogFeature} from "../../component/pageComponents/featurePage/collaboration/ActivityLogFeature";
import {TranslationMemoryFeature} from "../../component/pageComponents/featurePage/translatinAssistance/TranslationMemoryFeature";
import {TranslationHistoryFeature} from "../../component/pageComponents/featurePage/collaboration/TranslationHistoryFeature";

export default () => {
  return (<div className="home__container">
    <Head>
      <script type="application/ld+json">{JSON.stringify(baseSchema)}</script>
    </Head>
    <DecoratedLayout
      title={baseSchema.slogan}
      description={baseSchema.description}
    >
      <EmphasisPageHeader title="Collaboration." title2="Have fun working together."/>
      <ActivityLogFeature/>
      <CommentsFeature/>
      <TranslationHistoryFeature/>
      <MoreFeatures/>
    </DecoratedLayout>
  </div>)
}
