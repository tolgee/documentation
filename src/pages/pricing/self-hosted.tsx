import React, { useState } from 'react';
import './pricing.css';
import { PricingToggle } from '../../component/pricing/pricingPlan/PricingToggle';
import { PricingBase } from '../../component/pricing/PricingBase';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import {
  MinHeights,
  PricingPlan,
} from '../../component/pricing/pricingPlan/PricingPlan';
import { featuresSelfHosted } from '../../component/pricing/featuresTable/featuresSelfHosted';
import { ReviewAuthor } from '../../component/reviewAuthor/ReviewAuthor';
import { PricingPlanVertical } from '../../component/pricing/pricingPlan/PricingPlanVertical';
import { ExtraMtCreditsLabel } from '../../component/pricing/ExtraMtCreditsLabel';

export default function SelfHosted() {
  const [billing, setBilling] = useState<'monthly' | 'annually'>('annually');

  const toggleBilling = () => {
    setBilling((val) => (val === 'annually' ? 'monthly' : 'annually'));
  };

  const MIN_PLAN_HEIGHTS: MinHeights = {
    content: 360,
  };

  return (
    <PricingBase
      features={{
        title: 'Detailed self-hosted plan comparison',
        ...featuresSelfHosted,
      }}
      review={
        <div className="flex justify-center px-12">
          <div className="max-w-[600px]">
            <ReviewAuthor
              author={{
                imageURL: '/img/reviewers/bjornar.jpg',
                name: 'Bjørnar H.',
                title: 'CEO',
              }}
              description="Tolgee is a really great tool for localization. It enabled high productivity and feels very intuitive to use. I love that you can self-host it, a must-have for some bigger projects."
              capterraReview="https://www.capterra.com/p/10002120/Tolgee/reviews/4342941/"
            />
          </div>
        </div>
      }
    >
      {({ openFeaturesTable }) => (
        <>
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
            <PricingPlanVertical
              name="Free"
              free
              description={
                <>
                  Tolgee is <b>open-source</b>, self-hosting is <b>free</b>
                </>
              }
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
              action={
                <Link
                  className="pricing__option-button pricing__option-button--grey"
                  to="/platform/self_hosting/running_with_docker"
                >
                  Docs
                </Link>
              }
              onMore={openFeaturesTable}
              note={''}
              limits={{
                seats: 10,
              }}
            />

            <PricingPlan
              name="Team"
              description={
                <>For small teams, fostering smooth localization management</>
              }
              billing={{
                monthly: 50,
                annually: 42,
              }}
              billingType={billing}
              toggleBillingType={toggleBilling}
              limits={{
                strings: Infinity,
                mtCredits: 100_000,
                // payAsYouSit: true,
                seats: 10,
              }}
              featuresShortcut="All from Free"
              features={[
                'standard-support',
                'webhooks',
                'multiple-content-deliveries',
                'ai-prompt-customization',
              ]}
              secondaryPrices={[
                {
                  label: 'extra seat',
                  value: `€${(10).toLocaleString()}/mo`,
                },
                {
                  label: <ExtraMtCreditsLabel />,
                  value: `€${(0.035).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                  })}`,
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
              minHeights={MIN_PLAN_HEIGHTS}
            />

            <PricingPlan
              name="Business"
              description={
                <>For larger teams, providing advanced features for growth</>
              }
              billing={{ monthly: 300, annually: 250 }}
              billingType={billing}
              toggleBillingType={toggleBilling}
              limits={{
                strings: Infinity,
                mtCredits: 1_000_000,
                seats: 10,
              }}
              featuresShortcut="All from Team"
              features={[
                'granular-permissions',
                'project-level-custom-content-storage',
                'tasks',
                'slack-integration',
              ]}
              secondaryPrices={[
                {
                  label: 'extra seat',
                  value: `€${(20).toLocaleString()}/mo`,
                },
                {
                  label: <ExtraMtCreditsLabel />,
                  value: `€${(0.035).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                  })}`,
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
              minHeights={MIN_PLAN_HEIGHTS}
            />

            <PricingPlan
              name="Enterprise"
              description={
                <>For enterprise organizations and very large teams</>
              }
              billingType={billing}
              toggleBillingType={toggleBilling}
              limits={{
                strings: Infinity,
                seats: Infinity,
                mtCredits: Infinity,
              }}
              featuresShortcut="All from Business"
              features={[
                'account-manager',
                'premium-support',
                'dedicated-slack-channel',
                'deployment-assistance',
                'assisted-updates',
                'backup-configuration',
                'team-training',
                'prioritized-feature-requests',
              ]}
              action={
                <Link
                  className="pricing__option-button pricing__option-button--grey"
                  to="mailto:info@tolgee.io"
                >
                  Contact us
                </Link>
              }
              minHeights={MIN_PLAN_HEIGHTS}
            />
          </div>
        </>
      )}
    </PricingBase>
  );
}
