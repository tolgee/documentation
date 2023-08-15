import React, { useState } from 'react';
import './pricing.css';
import { PricingToggle } from '../../component/pricing/pricingPlan/PricingToggle';
import { PricingBase } from '../../component/pricing/PricingBase';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import { PricingPlan } from '../../component/pricing/pricingPlan/PricingPlan';

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
        <PricingPlan
          name="Free"
          free
          description={
            <>
              Tolgee is open-source, self-hosting will be <b>free forever</b>.
            </>
          }
          features={[
            'in-context-translating',
            'translation-memory',
            'machine-translations',
            'auto-translation',
            'activity-log',
            'one-click-screenshots',
            'figma-plugin',
          ]}
          action={
            <Link
              className="pricing__option-button pricing__option-button--grey"
              to="/platform/self_hosting/running_with_docker"
            >
              Docs
            </Link>
          }
        />

        <PricingPlan
          name="Business"
          description="For individuals and teams for one or just a few apps"
          billing={{ monthly: 300, annually: 250 }}
          billingType={billing}
          toggleBillingType={toggleBilling}
          limits={{
            strings: Infinity,
            seats: 10,
          }}
          featuresShortuct={
            <span className="pricing__underlined">All from Free</span>
          }
          features={[
            'granular-permissions',
            'prioritized-feature-requests',
            'standard-support',
            'cdn',
            'webhooks',
          ]}
          secondaryPrices={[
            {
              label: 'extra seat',
              value: `€${(20).toLocaleString()}/mo`,
            },
          ]}
          action={
            <Link
              className="pricing__option-button pricing__option-button--contained"
              to="https://app.tolgee.io/billing-self-hosted"
            >
              Subscribe
            </Link>
          }
        />

        <PricingPlan
          name="Enterprise"
          description="For enterprise organizations and very large teams"
          billingType={billing}
          toggleBillingType={toggleBilling}
          limits={{
            strings: Infinity,
            seats: Infinity,
          }}
          featuresShortuct={
            <span className="pricing__underlined">All from Business</span>
          }
          features={[
            'account-manager',
            'premium-support',
            'dedicated-slack-channel',
            'deployment-assistance',
            'assisted-updates',
            'backup-configuration',
            'team-training',
          ]}
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
    </PricingBase>
  );
}
