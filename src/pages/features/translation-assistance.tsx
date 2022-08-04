import React from 'react';
import { AutoTranslationFeature } from '../../component/pageComponents/featurePage/translationAssistance/AutoTranslationFeature';
import { MachineTranslationFeature } from '../../component/pageComponents/featurePage/translationAssistance/MachineTranslationFeature';
import { TranslationMemoryFeature } from '../../component/pageComponents/featurePage/translationAssistance/TranslationMemoryFeature';
import { BaseFeaturePage } from '../../component/pageComponents/featurePage/BaseFeaturePage';

// noinspection JSUnusedGlobalSymbols
export default function TranslationAssistance() {
  return (
    <BaseFeaturePage
      title="Translation assistance"
      title2="Let the machines work for you."
    >
      <AutoTranslationFeature />
      <MachineTranslationFeature />
      <TranslationMemoryFeature />
    </BaseFeaturePage>
  );
}
