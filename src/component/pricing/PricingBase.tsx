import Layout from '@theme/Layout';
import React from 'react';
import {RoboMouse} from "../images/RoboMouse";
import {PricingFeatures} from "./PricingFeatures";
import {PricingDescription} from "./PricingDescription";

export const PricingBase: React.FC = ({children}) => {
  return (
    <div>
      <Layout title={`Pricing`}>
        <div className="pricing__background-wrapper">
          <div className="container pricing__container">
            <h1 className="pricing__page-title">
              Tolgee Pricing & Plans (Preview)
            </h1>

            {children}

            <div className="pricing__bottom-center-robomouse">
              <RoboMouse/>
            </div>
            <div className="pricing__features-title">
              <h3>Key features</h3>
            </div>
            <div className="pricing__features">
              <PricingFeatures/>
            </div>

            <div className="pricing__description">
              <PricingDescription/>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};
