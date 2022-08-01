import React from "react"
import {AutoTranslationFeature} from "../../component/pageComponents/featurePage/translatinAssistance/AutoTranslationFeature";
import {MachineTranslationFeature} from "../../component/pageComponents/featurePage/translatinAssistance/MachineTranslationFeature";
import {TranslationMemoryFeature} from "../../component/pageComponents/featurePage/translatinAssistance/TranslationMemoryFeature";
import {BaseFeaturePage} from "../../component/pageComponents/featurePage/BaseFeaturePage";

// noinspection JSUnusedGlobalSymbols
export default () => {
  return (<BaseFeaturePage title="Translation assistance" title2="Let the machines work for you.">
    <AutoTranslationFeature/>
    <MachineTranslationFeature/>
    <TranslationMemoryFeature/>
  </BaseFeaturePage>)
}
