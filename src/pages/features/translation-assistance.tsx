import React from 'react';
import { AutoTranslationFeature } from '../../component/pageComponents/featurePage/translationAssistance/AutoTranslationFeature';
import { MachineTranslationFeature } from '../../component/pageComponents/featurePage/translationAssistance/MachineTranslationFeature';
import { TranslationMemoryFeature } from '../../component/pageComponents/featurePage/translationAssistance/TranslationMemoryFeature';
import { BaseFeaturePage } from '../../component/pageComponents/featurePage/BaseFeaturePage';
import { BottomSignUp } from '../../component/pageComponents/featurePage/BottomSignUp';

// noinspection JSUnusedGlobalSymbols
export default function TranslationAssistance() {
  return (
    <BaseFeaturePage
      title="Translation assistance"
      title2="Make your job easier."
    >
      <AutoTranslationFeature />
      <MachineTranslationFeature />
      <TranslationMemoryFeature />
      <BottomSignUp label="Localize with Ease" />
    </BaseFeaturePage>
  );
}
