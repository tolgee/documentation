import React, { useState } from 'react';
import './pricing.css';
import { PricingToggle } from '../../component/pricing/PricingToggle';
import { PricingBase } from '../../component/pricing/PricingBase';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import { PricingPlan } from '../../component/pricing/PricingPlan';

export default function SelfHosted() {
  const [billing, setBilling] = useState<'monthly' | 'annually'>('annually');

  const toggleBilling = () => {
    setBilling((val) => (val === 'annually' ? 'monthly' : 'annually'));
  };

  return (
    <PricingBase>
      <div className="pricing__toggle">
        <PricingToggle value="self-hosted" />
        <Head>
          <meta
            name="description"
            content="Pricing options for self-hosted Tolgee version. Support option for businesses that need high reliability and require professional support."
          />
        </Head>
      </div>
      <div className="pricing__options-wrapper">
        <div className="pricing__option">
          <PricingPlan
            name="Free"
            price={0}
            description={
              <>
                Since Tolgee is open-source, self hosting will be{' '}
                <b>free forever</b> with basic features.
              </>
            }
            action={
              <Link
                className="pricing__option-button pricing__option-button--grey"
                to="/platform/self_hosting/running_with_docker"
              >
                Docs
              </Link>
            }
          />
        </div>

        <div className="pricing__option pricing__option--highlighted">
          <PricingPlan
            name="Basic"
            description="For individuals and medium teams that use Tolgee for one or just a few apps."
            billing={{ monthly: 300, annually: 250 }}
            billingType={billing}
            toggleBillingType={toggleBilling}
            limits={{
              seats: 10,
            }}
            features={['Granular permissions']}
            secondaryPrices={['+ 20€/mo for extra seat']}
            action={
              <Link
                className="pricing__option-button"
                to="https://app.tolgee.io/billing-self-hosted"
              >
                Subscribe
              </Link>
            }
          />
        </div>
        {/* 
        <div className="pricing__option pricing__option--business pricing__option--highlighted">
          <PricingPlan
            name="Business"
            description="For larger teams where localization is critical component."
            billing={{ monthly: 1000, annually: 840 }}
            billingType={billing}
            toggleBillingType={toggleBilling}
            limits={{
              seats: 20,
            }}
            features={['Granular permissions']}
            secondaryPrices={['+ 50€/mo for extra seat']}
            action={
              <Link
                className="pricing__option-button"
                to="https://app.tolgee.io/billing-self-hosted"
              >
                Subscribe
              </Link>
            }
          />
        </div> */}

        <div className="pricing__option">
          <PricingPlan
            name="Enterprise"
            description="For enterprise organizations and very large teams that need Tolgee to translate large systems or a huge number of apps."
            billingType={billing}
            toggleBillingType={toggleBilling}
            limits={{
              seats: Infinity,
            }}
            features={['Granular permissions']}
            action={
              <Link
                className="pricing__option-button pricing__option-button--grey"
                to="/platform/self_hosting/running_with_docker"
              >
                Contact us
              </Link>
            }
          />
        </div>
      </div>
    </PricingBase>
  );
}
