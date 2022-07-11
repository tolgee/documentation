import React from "react"
import Head from "@docusaurus/Head";
import baseSchema from "../../info/organization";
import DecoratedLayout from "../../theme/DecoratedLayout";
import {PageHeader} from "../../component/pageComponents/PageHeader";
import {TwoColumnSection} from "../../component/pageComponents/twoColumnSection/TwoColumnSection";
import {TextColumn, TextColumnText, TextColumnTitle} from "../../component/pageComponents/twoColumnSection/TextColumn";
import {ImageColumn} from "../../component/pageComponents/twoColumnSection/ImageColumn";
import {GradientText} from "../../component/GradientText";
import {CoolButton} from "../../component/buttons/CoolButton";
import {FeaturesContainer} from "../../component/pageComponents/FeaturesContainer";
import {MoreFeatures} from "../../component/pageComponents/featurePage/MoreFeatures";

export default () => {
  return (<div className="home__container">
    <Head>
      <script type="application/ld+json">{JSON.stringify(baseSchema)}</script>
    </Head>
    <DecoratedLayout
      title={baseSchema.slogan}
      description={baseSchema.description}
    >
      <div className="text-home-text">
        <PageHeader title="I came, I saw, I conquered." title2="Story of your project."/>
        <TwoColumnSection>
          <ImageColumn/>
          <TextColumn>
            <TextColumnTitle>Watch the growth.</TextColumnTitle>
            <TextColumnText>
              See who modified, reviewed or commented the phrases in your project. Clearly.
            </TextColumnText>
          </TextColumn>
        </TwoColumnSection>
        <TwoColumnSection>
          <TextColumn>
            <TextColumnTitle>Translation history.</TextColumnTitle>
            <TextColumnText>
              See the changes of specific translation of specific key in specific language. Something is wrong? Blame the guilty!
            </TextColumnText>
          </TextColumn>
          <ImageColumn/>
        </TwoColumnSection>
      </div>
      <MoreFeatures/>
    </DecoratedLayout>
  </div>)
}
