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
        <PageHeader title="Translate once." title2="Use billion times."/>
        <TwoColumnSection>
          <ImageColumn/>
          <TextColumn>
            <TextColumnTitle>We remember.</TextColumnTitle>
            <TextColumnText>
              Tolgee is automatically suggesting from translations you already used in the project.
              So you can translate similar phrases similar way.
            </TextColumnText>
          </TextColumn>
        </TwoColumnSection>
        <TwoColumnSection>
          <TextColumn>
            <TextColumnTitle>Know more.</TextColumnTitle>
            <TextColumnText>
              Translation memory suggestions also show the similarity percentage and the key and the original text of the translated string.
            </TextColumnText>
          </TextColumn>
          <ImageColumn/>

        </TwoColumnSection>
      </div>
      <MoreFeatures/>
    </DecoratedLayout>
  </div>)
}
