import React from "react"
import Head from "@docusaurus/Head";
import baseSchema from "../../info/organization";
import DecoratedLayout from "../../theme/DecoratedLayout";
import {MoreFeatures} from "../../component/pageComponents/featurePage/MoreFeatures";
import {CommentsFeature} from "../../component/pageComponents/featurePage/collaboration/CommentsFeature";
import {ActivityLogFeature} from "../../component/pageComponents/featurePage/collaboration/ActivityLogFeature";
import {TranslationHistoryFeature} from "../../component/pageComponents/featurePage/collaboration/TranslationHistoryFeature";
import {FeaturesPageHeader} from "../../component/pageComponents/featurePage/FeaturesPageHeader";

export default () => {
  return (<div className="home__container">
    <Head>
      <script type="application/ld+json">{JSON.stringify(baseSchema)}</script>
    </Head>
    <DecoratedLayout
      title={"Collaboration"}
      description={baseSchema.description}
    >
      <FeaturesPageHeader title="Collaboration" title2="Have fun working together."/>
      <ActivityLogFeature/>
      <CommentsFeature/>
      <TranslationHistoryFeature/>
      <MoreFeatures/>
    </DecoratedLayout>
  </div>)
}
