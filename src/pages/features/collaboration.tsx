import React from "react"
import {CommentsFeature} from "../../component/pageComponents/featurePage/collaboration/CommentsFeature";
import {ActivityLogFeature} from "../../component/pageComponents/featurePage/collaboration/ActivityLogFeature";
import {TranslationHistoryFeature} from "../../component/pageComponents/featurePage/collaboration/TranslationHistoryFeature";
import {BaseFeaturePage} from "../../component/pageComponents/featurePage/BaseFeaturePage";

export default () => {
  return (<BaseFeaturePage title="Collaboration" title2="Have fun working together.">
    <ActivityLogFeature/>
    <CommentsFeature/>
    <TranslationHistoryFeature/>
  </BaseFeaturePage>)
}
