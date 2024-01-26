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
import { ReviewAuthor } from '../../component/reviewAuthor/ReviewAuthor';

const MIN_PLAN_HEIGHTS: MinHeights = {
  content: 400,
};

export default function Pricing() {
  const [billing, setBilling] = useState<'monthly' | 'annually'>('annually');

  const toggleBilling = () => {
    setBilling((val) => (val === 'annually' ? 'monthly' : 'annually'));
  };

  return (
    <PricingBase
      features={{ title: 'Detailed cloud plan comparison', ...featuresCloud }}
      review={
        <div className="flex justify-center px-12">
          <div className="max-w-[600px]">
            <ReviewAuthor
              author={{
                imageURL: '/img/reviewers/armen.jpeg',
                name: 'Armen D.',
                title: 'IT Manager',
              }}
              description="Tolgee is fully-featured, well designed, modern and slick translation management system. It had every handy feature we needed out of the box. It's also open source and very easy to deploy and configure."
              capterraReview="https://www.capterra.com/p/10002120/Tolgee/reviews/4612131/"
            />
          </div>
        </div>
      }
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
              description={<span>Includes key localization essentials</span>}
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
              features={[
                'in-context-translating',
                'translation-memory',
                'machine-translations',
                'auto-translation',
                'activity-log',
                'one-click-screenshots',
                'single-content-delivery',
                'figma-plugin',
              ]}
              onMore={openFeaturesTable}
            />
            <PricingPlan
              name="Pay as you go"
              description={
                <>
                  For individuals <br /> and small projects
                </>
              }
              limits={{ strings: 4000, mtCredits: 10_000, seats: Infinity }}
              billing={{ monthly: 30, annually: 25 }}
              secondaryPrices={[
                {
                  label: 'extra 1000 strings',
                  value: `€${(10).toLocaleString()}/mo`,
                },
                {
                  label: 'extra 1000 MT credits',
                  value: `€${(0.035).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                  })}`,
                },
              ]}
              featuresShortcut={'All from Free'}
              features={[
                'webhooks',
                'custom-content-storage',
                'ai-prompt-customization',
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
                  For mid-size to larger teams, providing advanced features for
                  growth
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
                  value: `€${(0.035).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                  })}`,
                },
              ]}
              billingType={billing}
              toggleBillingType={toggleBilling}
              featuresShortcut="All from Pay as you go"
              features={[
                'granular-permissions',
                'prioritized-feature-requests',
                'standard-support',
                'multiple-content-deliveries',
                'custom-content-storage',
                'ai-prompt-customization',
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
              featuresShortcut="All from Business plan"
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
