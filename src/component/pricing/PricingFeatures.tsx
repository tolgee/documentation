import React from "react";
import { PricingFeatureRow } from "./PricingFeatureRow";

export const PricingFeatures = () => {
  return (
    <>
      <div className="pricing__features-table">
        <PricingFeatureRow
          name="In-context translating"
          description="Edit translations directly in your App"
        />

        <PricingFeatureRow
          name="One-click screenshots"
          description="Generate context screenshots with one click"
        />

        <PricingFeatureRow
          name="Machine translations"
          description="Google Translate, AWS Translate and DeepL will make you faster"
        />

        <PricingFeatureRow
          name="Translation memory"
          description="Reuse already translated texts in your project"
        />

        <PricingFeatureRow
          name="Activity log"
          description="See what is happening in the project"
        />

        <PricingFeatureRow
          name="Team permissions"
          description="Edit permissions for different roles in your team"
        />

        <PricingFeatureRow
          name="Integration libraries"
          description="With our SDKs, integration is super smooth"
        />

        <PricingFeatureRow
          name="REST API"
          description="Let the machines talk to each other"
        />
      </div>
    </>
  );
};
