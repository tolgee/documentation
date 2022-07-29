import React from "react"
import {TwoColumnSection} from "../../twoColumnSection/TwoColumnSection";
import {TextColumn, TextColumnText, TextColumnTitle} from "../../twoColumnSection/TextColumn";
import {ImageColumn} from "../../twoColumnSection/ImageColumn";
import {FeatureHeader} from "../FeatureHeader";

export const TranslationHistoryFeature = () => {
  return (
    <>
      <FeatureHeader title="Translation history" id="translation-history"/>
      <TwoColumnSection>
        <ImageColumn>
          <img alt="Translation memory" src="/img/features/translation-history-light.svg"/>
        </ImageColumn>
        <TextColumn>
          <TextColumnTitle>See the changes.</TextColumnTitle>
          <TextColumnText>
            See the changes of specific translation of specific key in specific language. Something is wrong? Blame the guilty!
          </TextColumnText>
        </TextColumn>
      </TwoColumnSection>
    </>)
}
