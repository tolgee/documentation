import Link from "@docusaurus/Link";
import React from "react";
import styled from "styled-components";
import Layout from "../../theme/Layout";
import "./pricing.css";
import { RoboMouse } from "../../component/images/RoboMouse";

const ScPricingOptionDescription = styled.p``;

const ScOptionHighlights = styled.ul`
  list-style: none;
  padding-left: 0;
  flex-grow: 1;
  & > li {
    padding: 0;
  }
`;

const SlashUser = styled((props) => <span {...props}>/user</span>)`
  font-size: 12px;
`;

export default () => {
  return (
    <div>
      <Layout title={`Pricing`}>
        <div className="pricing__background-wrapper">
          <div className="container pricing__container">
            <h1 className="pricing__page-title">
              Tolgee Pricing & Plans (Preview)
            </h1>
            <div className="pricing__top-right-robomouse">
              <RoboMouse />
            </div>
            <div className="pricing__bottom-right-robomouse">
              <RoboMouse />
            </div>
            <div className="pricing__options-wrapper">
              <div className="pricing__option">
                <div>
                  <h3 className="pricing__option--title">Self-hosted</h3>
                  <ScPricingOptionDescription>
                    Since Tolgee is open-source, self hosting will be{" "}
                    <b>free forever</b>. However, you have to serve yourself.
                  </ScPricingOptionDescription>
                  <ScOptionHighlights />
                  <div className="pricing__option-price">
                    0 €<span>/mo</span>
                  </div>
                  <Link
                    className="pricing__option-button"
                    to="/docs/platform/self_hosting/running_with_docker"
                  >
                    Docs
                  </Link>
                </div>
              </div>
              <div className="pricing__option pricing__option--highlighted">
                <div>
                  <h3 className="pricing__option--title">Free</h3>
                  <ScPricingOptionDescription>
                    For individuals and small teams that use Tolgee for one or
                    just a few apps.
                  </ScPricingOptionDescription>
                  <ScOptionHighlights>
                    <li>2 members</li>
                    <li>
                      2000 translations
                      <SlashUser />
                    </li>
                    <li>
                      100 screenshots
                      <SlashUser />
                    </li>
                    <li>
                      400 API calls/minute
                      <SlashUser />
                    </li>
                  </ScOptionHighlights>
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
              <div className="pricing__option pricing__option--highlighted">
                <div>
                  <h3 className="pricing__option--title">Business</h3>
                  <ScPricingOptionDescription>
                    For businesses and larger teams who need Tolgee to translate
                    big systems or multiple apps.
                  </ScPricingOptionDescription>
                  <ScOptionHighlights>
                    <li>
                      2 000 translations
                      <SlashUser />
                    </li>
                    <li>
                      1 000 screenshots
                      <SlashUser />
                    </li>
                    <li>
                      1 000 API calls/minute
                      <SlashUser />
                    </li>
                  </ScOptionHighlights>
                  <div className="pricing__option-price">
                    12 €<span>/mo/user</span>
                  </div>
                  <Link
                    className="pricing__option-button pricing__option-button--grey"
                    to="mailto:info@tolgee.io"
                  >
                    Coming soon
                  </Link>
                </div>
              </div>
              <div className="pricing__option">
                <div>
                  <h3 className="pricing__option--title">Enterprise</h3>
                  <ScPricingOptionDescription>
                    For enterprise organizations and very large teams that need
                    Tolgee to translate large systems or a huge number of apps.
                  </ScPricingOptionDescription>
                  <ScOptionHighlights>
                    <li>unlimited members</li>
                    <li>unlimited translations</li>
                    <li>unlimited screenshots</li>
                    <li>unlimited API calls</li>
                  </ScOptionHighlights>
                  <></>
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
            <div className="pricing__description">
              <p>
                The free, business, and enterprise options are just previews. We
                are currently not applying any limits to the Tolgee Cloud since
                we are in the implementation phase of applying these limits and
                enabling users to pay via paywall.
              </p>
              <p>
                We are publishing this preview so as not to surprise our users
                with our future pricing strategy.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};
