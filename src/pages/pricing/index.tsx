import React, { useState } from 'react';
import './pricing.css';
import { RoboMouse } from '../../component/images/RoboMouse';
import { PricingToggle } from '../../component/pricing/PricingToggle';
import { PricingBase } from '../../component/pricing/PricingBase';
import Link from '@docusaurus/Link';
import { PricingPlan } from '../../component/pricing/PricingPlan';
import Head from '@docusaurus/Head';

export default function Pricing() {
  const [billing, setBilling] = useState<'monthly' | 'annually'>('annually');

  const toggleBilling = () => {
    setBilling((val) => (val === 'annually' ? 'monthly' : 'annually'));
  };

  return (
    <PricingBase>
      <Head>
        <meta
          name="description"
          content="Pricing for the cloud version of Tolgee localization tool. Choose among Free, Basic, Premium, or Enterprise subscription. "
        />
      </Head>
      <div className="pricing__toggle">
        <PricingToggle value="cloud" />
      </div>
      <div className="pricing__top-right-robomouse">
        <RoboMouse />
      </div>
      <div className="pricing__bottom-right-robomouse">
        <RoboMouse />
      </div>
      <div className="pricing__options-wrapper">
        <div className="pricing__option">
          <PricingPlan
            name="Free / Pay as you go"
            description="For individuals and hobby projects."
            limits={{ translations: 1_000, mtCredits: 10_000, seats: Infinity }}
            price={0}
            secondaryPrices={[
              `+ €${(10).toLocaleString()}/mo for extra 1000 Translations`,
              `+ €${(0.2).toLocaleString()} for extra 1000 MT credits`,
            ]}
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
                className="pricing__option-button pricing__option-button--contained"
                to="https://app.tolgee.io/sign_up"
              >
                Get started
              </Link>
            }
          />
        </div>

        <div className="pricing__option pricing__option--highlighted">
          <PricingPlan
            name="Business"
            freeForOpensource
            description="For individuals and medium teams that use Tolgee for one or just a few apps."
            limits={{
              translations: 20_000,
              mtCredits: 100_000,
              seats: Infinity,
            }}
            billing={{ monthly: 100, annually: 84 }}
            secondaryPrices={[
              `+ €${(7).toLocaleString()}/mo for extra 1000 Translations`,
              `+ €${(0.15).toLocaleString()} for extra 1000 MT credits`,
            ]}
            billingType={billing}
            toggleBillingType={toggleBilling}
            features={[
              'all-from-free',
              'granular-permissions',
              'prioritized-feature-requests',
              'cdn',
              'webhooks',
            ]}
            action={
              <Link
                className="pricing__option-button pricing__option-button--grey"
                to="https://app.tolgee.io/billing"
              >
                Subscribe
              </Link>
            }
          />
        </div>

        <div className="pricing__option">
          <PricingPlan
            name="Enterprise"
            description="For enterprise organizations and very large teams that need Tolgee to translate large systems or a huge number of apps."
            limits={{
              translations: Infinity,
              mtCredits: Infinity,
              seats: Infinity,
            }}
            features={[
              'all-from-business',
              'premium-support',
              'dedicated-slack-channel',
              'assisted-updates',
              'deployment-assistance',
              'backup-configuration',
              'team-training',
              'deployment-assistance',
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
      </div>
    </PricingBase>
  );
}
