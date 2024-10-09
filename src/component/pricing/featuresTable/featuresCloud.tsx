import React from 'react';
import { FeaturesTableItem } from './FeaturesTable';
import { PricingDetailsLink } from '../pricingPlan/PricingDetailsLink';

export const featuresCloud = {
  plans: ['Free', 'Pay as you go', 'Business', 'Enterprise'],
  items: [
    { type: 'title', label: 'Basic parameters' },
    {
      type: 'item',
      label: (
        <span>
          Included{' '}
          <PricingDetailsLink item="what-are-strings">
            strings
          </PricingDetailsLink>
        </span>
      ),
      items: [
        (1000).toLocaleString(),
        (4000).toLocaleString(),
        (20000).toLocaleString(),
        'Unlimited',
      ],
    },
    {
      type: 'item',
      label: (
        <span>
          Included{' '}
          <PricingDetailsLink item="what-are-mt-credits">
            MT credits
          </PricingDetailsLink>
        </span>
      ),
      items: [
        (10000).toLocaleString(),
        (10000).toLocaleString(),
        (1000000).toLocaleString(),
        'Unlimited',
      ],
    },
    {
      type: 'item',
      label: (
        <span>
          Included{' '}
          <PricingDetailsLink item="what-are-seats">seats</PricingDetailsLink>
        </span>
      ),
      items: ['Unlimited', 'Unlimited', 'Unlimited', 'Unlimited'],
    },
    {
      type: 'item',
      label: 'Monthly price (annual billing)',
      items: [
        '€0/month',
        '$25/month',
        `€${(84).toLocaleString()}/month`,
        'Negotiable',
      ],
    },
    {
      type: 'item',
      label: 'Monthly price (monthly billing)',
      items: [
        '€0/month',
        '$30/month',
        `€${(100).toLocaleString()}/month`,
        'Negotiable',
      ],
    },
    {
      type: 'item',
      label: (
        <span>
          Extra 1000{' '}
          <PricingDetailsLink item="what-are-strings">
            strings
          </PricingDetailsLink>
        </span>
      ),
      items: [
        'n',
        `€${(10).toLocaleString()}/month`,
        `€${(7).toLocaleString()}/month`,
        'Negotiable',
        'n',
      ],
    },
    {
      type: 'item',
      label: (
        <span>
          Extra 1000{' '}
          <PricingDetailsLink item="what-are-mt-credits">
            MT credits
          </PricingDetailsLink>
        </span>
      ),
      items: [
        'n',
        `€${(0.035).toLocaleString(undefined, { minimumFractionDigits: 2 })}`,
        `€${(0.035).toLocaleString(undefined, { minimumFractionDigits: 2 })}`,
        'Negotiable',
      ],
    },

    { type: 'title', label: 'Features' },
    {
      type: 'item',
      label: 'In-context translating',
      items: ['y', 'y', 'y', 'y'],
    },
    {
      type: 'item',
      label: (
        <PricingDetailsLink item="what-is-ai-customization">
          AI Customization
        </PricingDetailsLink>
      ),
      items: ['n', 'y', 'y', 'y'],
    },
    {
      type: 'item',
      label: 'Translation memory',
      items: ['y', 'y', 'y', 'y'],
    },
    {
      type: 'item',
      label: 'Machine translations',
      items: ['y', 'y', 'y', 'y'],
    },
    {
      type: 'item',
      label: 'Tolgee translator',
      items: ['y', 'y', 'y', 'y'],
    },
    {
      type: 'item',
      label: 'Auto translation',
      items: ['y', 'y', 'y', 'y'],
    },
    { type: 'item', label: 'Activity log', items: ['y', 'y', 'y', 'y'] },
    { type: 'item', label: 'Tolgee CLI', items: ['y', 'y', 'y', 'y'] },
    {
      type: 'item',
      label: 'Tolgee Chrome plugin',
      items: ['y', 'y', 'y', 'y'],
    },
    {
      type: 'item',
      label: 'One-click screenshots',
      items: ['y', 'y', 'y', 'y'],
    },
    {
      type: 'item',
      label: (
        <PricingDetailsLink item="what-is-content-delivery">
          Single Content Delivery
        </PricingDetailsLink>
      ),
      items: ['y', 'y', 'y', 'y'],
    },
    { type: 'item', label: 'Figma plugin', items: ['y', 'y', 'y', 'y'] },
    { type: 'item', label: 'Webhooks', items: ['n', 'y', 'y', 'y'] },
    {
      type: 'item',
      label: (
        <PricingDetailsLink item="what-is-custom-content-storage">
          Custom Content Storage
        </PricingDetailsLink>
      ),
      items: ['n', 'y', 'y', 'y'],
    },
    {
      type: 'item',
      label: (
        <PricingDetailsLink item="what-are-tasks">Tasks</PricingDetailsLink>
      ),
      items: ['n', 'n', 'y', 'y'],
    },
    {
      type: 'item',
      label: 'Slack integration',
      items: ['n', 'n', 'y', 'y'],
    },
    {
      type: 'item',
      label: 'Granular permissions',
      items: ['n', 'n', 'y', 'y'],
    },
    {
      type: 'item',
      label: (
        <PricingDetailsLink item="what-is-content-delivery">
          Multiple Content Deliveries
        </PricingDetailsLink>
      ),
      items: ['n', 'n', 'y', 'y'],
    },

    { type: 'title', label: 'Assistance' },
    {
      type: 'item',
      label: 'Standard support',
      items: ['n', 'y', 'y', 'y'],
    },
    {
      type: 'item',
      label: 'Prioritized feature requests',
      items: ['n', 'n', 'n', 'y'],
    },
    { type: 'item', label: 'Premium support', items: ['n', 'n', 'n', 'y'] },
    { type: 'item', label: 'Account manager', items: ['n', 'n', 'n', 'y'] },
    {
      type: 'item',
      label: 'Dedicated Slack channel',
      items: ['n', 'n', 'n', 'y'],
    },
    { type: 'item', label: 'Team training', items: ['n', 'n', 'n', 'y'] },
  ] as FeaturesTableItem[],
};
