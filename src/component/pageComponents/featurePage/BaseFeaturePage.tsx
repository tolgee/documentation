import React, {FC} from "react";
import Head from "@docusaurus/Head";
import baseSchema from "../../../info/organization";
import DecoratedLayout from "../../../theme/DecoratedLayout";
import {FeaturesPageHeader} from "./FeaturesPageHeader";
import {MoreFeatures} from "./MoreFeatures";

export const BaseFeaturePage: FC<{ title: string, title2: string }> = (props) => <div className="home__container">
    <Head>
      <script type="application/ld+json">{JSON.stringify(baseSchema)}</script>
    </Head>
    <DecoratedLayout
      title={"Collaboration"}
      description={baseSchema.description}
    >
      <FeaturesPageHeader title={props.title} title2={props.title2}/>
      <div className="mb-36">
        {props.children}
      </div>
      <MoreFeatures/>
    </DecoratedLayout>
  </div>
;
