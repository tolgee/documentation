import React from "react";
import {FeaturesContainer} from "../FeaturesContainer";
import {features} from "../../home/Features";
import {useLocation} from "@docusaurus/router";
import {Feature} from "../Feature";

export const MoreFeatures = (props) => {
  const location = useLocation();

  const currentSlug = location.pathname.replace(/(.*)\/([a-zA-Z\-]+)$/, "$2");

  const currentIndex = features.findIndex((f) => f.slug === currentSlug)
  const firstIndex = currentIndex - 1 > -1 ? currentIndex - 1 : features.length - 1;

  const filteredFeatures = [
    features[firstIndex],
    features[(currentIndex + 1) % (features.length - 1)],
    features[(currentIndex + 2) % (features.length - 1)]
  ]

  return <>
    <FeaturesContainer showCallToAction={false} title="More features">
      {filteredFeatures.map(f => <Feature key={f.slug} feature={f}/>)}
    </FeaturesContainer>
  </>
}
