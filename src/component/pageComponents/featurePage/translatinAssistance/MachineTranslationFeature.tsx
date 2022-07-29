import React, {useState} from "react"
import {TwoColumnSection} from "../../twoColumnSection/TwoColumnSection";
import {TextColumn, TextColumnText, TextColumnTitle} from "../../twoColumnSection/TextColumn";
import {ImageColumn} from "../../twoColumnSection/ImageColumn";
import {GradientText} from "../../../GradientText";
import {FeatureHeader} from "../FeatureHeader";
import Link from "@docusaurus/Link";
import {SingleColumnSection} from "../../twoColumnSection/SingleColumnSection";
import {Slider} from "@mui/material";
import {possiblePrices} from "./creditsUtil";

function MtCreditsSlider() {
  const [sliderValue, setSliderValue] = useState(1 as number);

  let totalPrice = possiblePrices[sliderValue].totalPrice;
  let regularPrice = possiblePrices[sliderValue].regularPrice;
  return <div
    className="mt-4 max-w-[500px] mx-auto flex flex-col bg-gray-50 dark:bg-[color:var(--ifm-background-surface-color)] p-4 rounded-2xl text-left">
    <div>Extra Machine Translation credits</div>
    <div className="dark:text-gray-300 text-gray-500 text-lg">{(possiblePrices[sliderValue].totalAmount / 100).toLocaleString('en-US')}</div>
    <Slider
      value={sliderValue}
      min={0}
      step={1}
      max={possiblePrices.length - 1}
      scale={(value) => possiblePrices[value].totalAmount}
      getAriaValueText={(v) => v.toString()}
      onChange={(_, value) => setSliderValue(value as number)}
      aria-labelledby="non-linear-slider"
    />
    <div className="">{totalPrice.toLocaleString('en-US')} €</div>

    <div className="line-through text-xs dark:text-gray-300 text-gray-500 mt-[-10px] min-h-[17px]">{regularPrice && <>{regularPrice.toLocaleString('en-US')} €</>}</div>
  </div>
}

export const MachineTranslationFeature = () => {

  return (
    <>
      <FeatureHeader title="Machine translation" id="machine-translation"/>
      <TwoColumnSection>
        <ImageColumn>
          <img alt="Machine translation" src="/img/features/machine-translation-light.svg"/>
        </ImageColumn>
        <TextColumn>
          <TextColumnTitle>Select your service.</TextColumnTitle>
          <TextColumnText>
            We support <GradientText>DeepL</GradientText>, <GradientText>Google Translate</GradientText> or <GradientText>AWS Translate</GradientText>.
            Select which services you want to use in the settings section.
          </TextColumnText>
          <TextColumnTitle>Machines work for you.</TextColumnTitle>
          <TextColumnText>
            Machine translation features makes whole localization process <GradientText>extremely faster</GradientText>.
            Translators can just use translation suggestions provided by third party machine translation services.
          </TextColumnText>
        </TextColumn>
      </TwoColumnSection>
      <SingleColumnSection className="mt-24">
        <TextColumnTitle>Pay as you go.</TextColumnTitle>
        <TextColumnText>
          There are some machine translation credits included in each <Link to="/pricing">subscription plan</Link>.
          If it's not enough, you can buy Extra Machine Translation credits in the Billing section. These credits not reset every month,
          so you can use them as long as you want.
        </TextColumnText>

        <MtCreditsSlider/>

      </SingleColumnSection>
    </>)
}
