import React from 'react';
import { CommentsFeature } from '../../component/pageComponents/featurePage/collaboration/CommentsFeature';
import { ActivityLogFeature } from '../../component/pageComponents/featurePage/collaboration/ActivityLogFeature';
import { TranslationHistoryFeature } from '../../component/pageComponents/featurePage/collaboration/TranslationHistoryFeature';
import { BaseFeaturePage } from '../../component/pageComponents/featurePage/BaseFeaturePage';
import { BottomSignUp } from '../../component/pageComponents/featurePage/BottomSignUp';

export default function Collaboration() {
  return (
    <BaseFeaturePage title="Collaboration" title2="Have fun working together.">
      <ActivityLogFeature />
      <CommentsFeature />
      <TranslationHistoryFeature />
      <BottomSignUp label="Localize Like a Pro" />
    </BaseFeaturePage>
  );
}
