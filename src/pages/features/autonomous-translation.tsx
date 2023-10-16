import React from 'react';
import { BaseFeaturePage } from '../../component/pageComponents/featurePage/BaseFeaturePage';
import { BottomSignUp } from '../../component/pageComponents/featurePage/BottomSignUp';
import { AiTranslator } from '../../component/pageComponents/featurePage/autonomousTranslation/AiTranslator';
import { AiContext } from '../../component/pageComponents/featurePage/autonomousTranslation/AiContext';
import { EasyLocalization } from '../../component/pageComponents/featurePage/autonomousTranslation/EasyLocalization';

// noinspection JSUnusedGlobalSymbols
export default function TranslationAssistance() {
  return (
    <BaseFeaturePage
      title="Autonomous translation"
      title2="Let the machines work for you."
    >
      <AiTranslator />
      <AiContext />
      <EasyLocalization />
      <BottomSignUp label="Check it out!" />
    </BaseFeaturePage>
  );
}
