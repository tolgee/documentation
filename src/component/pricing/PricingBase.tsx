import Layout from '@theme/Layout';
import React from 'react';
import { RoboMouse } from '../images/RoboMouse';

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

            
          </div>
        </div>
      </Layout>
    </div>
  );
};
