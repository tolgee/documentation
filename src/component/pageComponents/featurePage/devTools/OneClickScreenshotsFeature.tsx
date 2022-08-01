import React from "react"
import {TwoColumnSection} from "../../twoColumnSection/TwoColumnSection";
import {TextColumn, TextColumnText, TextColumnTitle} from "../../twoColumnSection/TextColumn";
import {ImageColumn} from "../../twoColumnSection/ImageColumn";
import {FeatureHeader} from "../FeatureHeader";

export const OneClickScreenshotsFeature = () => {
  return (
    <>
      <FeatureHeader title="One click screenshots" id="one-click-screenshots"/>
      <TwoColumnSection>
        <ImageColumn>
          <img alt="One-click screenshots" src="/img/features/one-click-screenshots1-light.svg"/>
        </ImageColumn>        <TextColumn>
          <TextColumnTitle>Twice.</TextColumnTitle>
          <TextColumnText>
            That's how many times you have to click to provide screenshot from your application with highlighted phrase to
            translate. Just AlT + Click a string and hit camera button. Boom! Screenshot generated.
          </TextColumnText>
        </TextColumn>
      </TwoColumnSection>
      <TwoColumnSection>
        <ImageColumn>
          <img alt="One-click screenshots" src="/img/features/one-click-screenshots2-light.svg"/>
        </ImageColumn>
        <TextColumn>
          <TextColumnTitle>Highlighted.</TextColumnTitle>
          <TextColumnText>
            Screenshots provide context to your translators. Translating software without context is always generating a lot of translation errors. Don't wait
            till your customers tell you what's wrong. Provide perfect results right away.
          </TextColumnText>
        </TextColumn>
      </TwoColumnSection>
    </>
  )
}
