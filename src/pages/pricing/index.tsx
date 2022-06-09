import React, { useState } from "react";
import "./pricing.css";
import { RoboMouse } from "../../component/images/RoboMouse";
import { PricingToggle } from "../../component/pricing/PricingToggle";
import { PricingBase } from "../../component/pricing/PricingBase";
import Link from "@docusaurus/Link";
import { PricingFeatures } from "../../component/pricing/PricingFeatures";
import { PricingPlan } from "../../component/pricing/PricingPlan";
import { PricingDescription } from "../../component/pricing/PricingDescription";

export default () => {
  const [billing, setBilling] = useState<"monthly" | "annually">("annually");

  const toggleBilling = () => {
    setBilling((val) => (val === "annually" ? "monthly" : "annually"));
  };

  return (
    <PricingBase>
      <div className="pricing__toggle">
        <PricingToggle value="cloud" />
      </div>
      <div className="pricing__top-right-robomouse">
        <RoboMouse />
      </div>
      <div className="pricing__bottom-right-robomouse">
        <RoboMouse />
      </div>
      <div className="pricing__options-wrapper-cloud">
        <div className="pricing__option pricing__option--free">
          <PricingPlan
            name="Free"
            description="For individuals and hobby projects."
            numTranslations={3000}
            numCredits={10000}
            price={0}
            action={
              <Link
                className="pricing__option-button pricing__option-button--contained"
                to="https://app.tolgee.io/sign_up"
              >
                Get started
              </Link>
            }
          />
        </div>

        <div className="pricing__option pricing__option--basic pricing__option--highlighted">
          <PricingPlan
            name="Basic"
            freeForOpensource
            description="For individuals and medium teams that use Tolgee for one or just a few apps."
            numTranslations={15000}
            numCredits={100000}
            billing={{ monthly: 50, annually: 42 }}
            billingType={billing}
            toggleBillingType={toggleBilling}
            action={
              <Link
                className="pricing__option-button pricing__option-button--grey"
                to="mailto:info@tolgee.io"
              >
                Coming soon
              </Link>
            }
          />
        </div>

        <div className="pricing__option pricing__option--premium pricing__option--highlighted">
          <PricingPlan
            name="Premium"
            description="For businesses and larger teams who need Tolgee to translate big systems or multiple apps."
            numTranslations={30000}
            numCredits={1000000}
            billing={{ monthly: 100, annually: 84 }}
            billingType={billing}
            toggleBillingType={toggleBilling}
            action={
              <Link
                className="pricing__option-button pricing__option-button--grey"
                to="mailto:info@tolgee.io"
              >
                Coming soon
              </Link>
            }
          />
        </div>

        <div className="pricing__option pricing__option--enterprise">
          <PricingPlan
            name="Enterprise"
            description="For enterprise organizations and very large teams that need Tolgee to translate large systems or a huge number of apps."
            numTranslations={undefined}
            numCredits={undefined}
            action={
              <Link
                className="pricing__option-button pricing__option-button--grey"
                to="mailto:info@tolgee.io"
              >
                Contact us
              </Link>
            }
          />
        </div>
      </div>
      <div className="pricing__bottom-center-robomouse">
        <RoboMouse />
      </div>
      <div className="pricing__features-title">
        <h3>Key features</h3>
      </div>
      <div className="pricing__features">
        <PricingFeatures />
      </div>

      <div className="pricing__description">
        <PricingDescription />
      </div>
    </PricingBase>
  );
};
