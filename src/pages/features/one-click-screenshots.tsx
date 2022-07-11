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
        <PageHeader title="Context is King." title2="Provide it like a Boss."/>
        <TwoColumnSection>
          <ImageColumn/>
          <TextColumn>
            <TextColumnTitle>Twice.</TextColumnTitle>
            <TextColumnText>
              That's how many times you have to click to provide screenshot from your application with highlighted phrase to
              translate. Just AlT + Click a string and hit camera button. Boom! Screenshot generated.
            </TextColumnText>
          </TextColumn>
        </TwoColumnSection>
        <TwoColumnSection>
          <TextColumn>
            <TextColumnTitle>Highlighted.</TextColumnTitle>
            <TextColumnText>
              Screenshots provide context to your translators. Translating software without context is always generating a lot of translation errors. Don't wait
              till your customers tell you what's wrong. Provide perfect results right away.
            </TextColumnText>
          </TextColumn>
          <ImageColumn/>
        </TwoColumnSection>
        <MoreFeatures/>
      </DecoratedLayout>
    </div>
  )
}
