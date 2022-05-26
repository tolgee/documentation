import React from "react";
import "./pricing.css";
import { RoboMouse } from "../../component/images/RoboMouse";
import { PricingToggle } from "../../component/pricing/PricingToggle";
import { PricingBase } from "../../component/pricing/PricingBase";
import Link from "@docusaurus/Link";
import Tooltip from "react-simple-tooltip";
import { PricingFeatures } from "../../component/pricing/PricingFeatures";

const Translations = () => {
  return (
    <Tooltip
      content={
        <div className="pricing__tooltip">
          Number of keys ✕ number of languages
        </div>
      }
    >
      <span className="pricing__with-hint">
        translations
      </span>
    </Tooltip>
  );
};

const Credits = () => {
  return (
    <Tooltip
      content={
        <div className="pricing__tooltip">Credits for machine translation</div>
      }
    >
      <span className="pricing__with-hint">
        credits
      </span>
    </Tooltip>
  );
};

export default () => {
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
          <div>
            <h3 className="pricing__option--title">Free</h3>
            <p>For individuals and hobby projects.</p>
            <ul className="pricing__option-highlights pricing__option-highlights--no-list-style">
              <li>
                <span className="pricing__option-value">
                  {(1000).toLocaleString()}
                </span>{" "}
                <Translations />
              </li>
              <li>
                <span className="pricing__option-value">
                  {(10000).toLocaleString()}
                </span>{" "}
                <Credits />
              </li>
              <li>
                <span className="pricing__option-value">unlimited</span> users
              </li>
              <li>
                <span className="pricing__option-value">unlimited</span>{" "}
                projects
              </li>
            </ul>
            <div className="pricing__option-price">
              0 €<span>/mo</span>
            </div>
            <Link
              className="pricing__option-button pricing__option-button--contained"
              to="https://app.tolgee.io/sign_up"
            >
              Get started
            </Link>
          </div>
        </div>

        <div className="pricing__option pricing__option--basic pricing__option--highlighted">
          <div>
            <h3 className="pricing__option--title">Basic</h3>
            <p>
              For individuals and medium teams that use Tolgee for one or just a
              few apps.
            </p>
            <ul className="pricing__option-highlights pricing__option-highlights--no-list-style">
              <li>
                <span className="pricing__option-value">
                  {(10000).toLocaleString()}
                </span>{" "}
                <Translations />
              </li>
              <li>
                <span className="pricing__option-value">
                  {(100000).toLocaleString()}
                </span>{" "}
                <Credits />
              </li>
              <li>
                <span className="pricing__option-value">unlimited</span> users
              </li>
              <li>
                <span className="pricing__option-value">unlimited</span>{" "}
                projects
              </li>
            </ul>
            <div className="pricing__option-price">
              50 €<span>/mo</span>
            </div>
            <Link
              className="pricing__option-button pricing__option-button--grey"
              to="mailto:info@tolgee.io"
            >
              Coming soon
            </Link>
          </div>
        </div>

        <div className="pricing__option pricing__option--premium pricing__option--highlighted">
          <div>
            <h3 className="pricing__option--title">Premium</h3>
            <p>
              For businesses and larger teams who need Tolgee to translate big
              systems or multiple apps.
            </p>
            <ul className="pricing__option-highlights pricing__option-highlights--no-list-style">
              <li>
                <span className="pricing__option-value">
                  {(50000).toLocaleString()}
                </span>{" "}
                <Translations />
              </li>
              <li>
                <span className="pricing__option-value">unlimited</span>{" "}
                <Credits />
              </li>
              <li>
                <span className="pricing__option-value">unlimited</span> users
              </li>
              <li>
                <span className="pricing__option-value">unlimited</span>{" "}
                projects
              </li>
            </ul>
            <div className="pricing__option-price">
              100 €<span>/mo</span>
            </div>
            <Link
              className="pricing__option-button pricing__option-button--grey"
              to="mailto:info@tolgee.io"
            >
              Coming soon
            </Link>
          </div>
        </div>

        <div className="pricing__option pricing__option--enterprise">
          <div>
            <h3 className="pricing__option--title">Enterprise</h3>
            <p>
              For enterprise organizations and very large teams that need Tolgee
              to translate large systems or a huge number of apps.
            </p>
            <ul className="pricing__option-highlights pricing__option-highlights--no-list-style">
              <li>
                <span className="pricing__option-value">unlimited</span>{" "}
                <Translations />
              </li>
              <li>
                <span className="pricing__option-value">unlimited</span>{" "}
                <Credits />
              </li>
              <li>
                <span className="pricing__option-value">unlimited</span> users
              </li>
              <li>
                <span className="pricing__option-value">unlimited</span>{" "}
                projects
              </li>
            </ul>
            <Link
              className="pricing__option-button pricing__option-button--grey"
              to="mailto:info@tolgee.io"
            >
              Contact us
            </Link>
          </div>
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
        <p>
          We are currently not applying any limits to the Tolgee Cloud since we
          are in the implementation phase of applying these limits and enabling
          users to pay via paywall.
        </p>
        <p>
          We are publishing this preview so as not to surprise our users with
          our future pricing strategy.
        </p>
      </div>
    </PricingBase>
  );
};
