import React, { useState } from 'react';
import './pricing.css';
import { PricingToggle } from '../../component/pricing/pricingPlan/PricingToggle';
import { PricingBase } from '../../component/pricing/PricingBase';
import Link from '@docusaurus/Link';
import {
  MinHeights,
  PricingPlan,
} from '../../component/pricing/pricingPlan/PricingPlan';
import Head from '@docusaurus/Head';
import { featuresCloud } from '../../component/pricing/featuresTable/featuresCloud';
import { PricingPlanVertical } from '../../component/pricing/pricingPlan/PricingPlanVertical';

const MIN_PLAN_HEIGHTS: MinHeights = {
  content: 370,
};

export default function Pricing() {
  const [billing, setBilling] = useState<'monthly' | 'annually'>('annually');

  const toggleBilling = () => {
    setBilling((val) => (val === 'annually' ? 'monthly' : 'annually'));
  };

  return (
    <PricingBase
      features={{ title: 'Detailed cloud plan comparison', ...featuresCloud }}
    >
      {({ openFeaturesTable }) => (
        <>
          <Head>
            <meta
              name="description"
              content="Pricing for the cloud version of Tolgee localization tool. Choose among Free, Basic, Premium, or Enterprise subscription."
            />
          </Head>
          <div className="pricing__toggle">
            <PricingToggle value="cloud" />
          </div>
          <div className="pricing__options-wrapper">
            <PricingPlanVertical
              name="Free"
              description={
                <span>
                  The Free plan comes with the same features as the Pay as you
                  go plan.
                </span>
              }
              free
              limits={{ strings: 1_000, mtCredits: 10_000, seats: Infinity }}
              action={
                <Link
                  className="pricing__option-button pricing__option-button--contained"
                  to="https://app.tolgee.io"
                >
                  Get started
                </Link>
              }
              note="No credit card required"
            />
            <PricingPlan
              name="Pay as you go"
              description={
                <>
                  For individuals <br /> and hobby projects
                </>
              }
              limits={{ strings: 1_000, mtCredits: 10_000, seats: Infinity }}
              free
              secondaryPrices={[
                {
                  label: 'extra 1000 strings',
                  value: `€${(10).toLocaleString()}/mo`,
                },
                {
                  label: 'extra 1000 MT credits',
                  value: `€${(0.2).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                  })}`,
                },
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
              onMore={openFeaturesTable}
              minHeights={MIN_PLAN_HEIGHTS}
              action={
                <Link
                  className="pricing__option-button pricing__option-button--contained"
                  to="https://app.tolgee.io/billing"
                >
                  Subscribe
                </Link>
              }
            />

            <PricingPlan
              name="Business"
              freeForOpensource
              description={
                <>
                  For individuals and teams
                  <br /> for one or just a few apps
                </>
              }
              limits={{
                strings: 20_000,
                mtCredits: 1_000_000,
                seats: Infinity,
              }}
              billing={{ monthly: 100, annually: 84 }}
              secondaryPrices={[
                {
                  label: 'extra 1000 strings',
                  value: `€${(7).toLocaleString()}/mo`,
                },
                {
                  label: 'extra 1000 MT credits',
                  value: `€${(0.15).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                  })}`,
                },
              ]}
              billingType={billing}
              toggleBillingType={toggleBilling}
              featuresShortuct="All from Pay as you go"
              features={[
                'granular-permissions',
                'prioritized-feature-requests',
                'standard-support',
                'cdn',
                'webhooks',
              ]}
              minHeights={MIN_PLAN_HEIGHTS}
              action={
                <Link
                  className="pricing__option-button pricing__option-button--contained"
                  to="https://app.tolgee.io/billing"
                >
                  Subscribe
                </Link>
              }
            />

            <PricingPlan
              name="Enterprise"
              description={
                <>
                  For enterprise organizations
                  <br /> and very large teams
                </>
              }
              limits={{
                strings: Infinity,
                mtCredits: Infinity,
                seats: Infinity,
              }}
              featuresShortuct="All from Business plan"
              features={[
                'account-manager',
                'premium-support',
                'dedicated-slack-channel',
                'team-training',
              ]}
              minHeights={MIN_PLAN_HEIGHTS}
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
        </>
      )}
    </PricingBase>
  );
}
