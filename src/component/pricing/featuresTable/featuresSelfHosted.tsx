import React from 'react';
import { FeaturesTableItem } from './FeaturesTable';
import { PricingDetailsLink } from '../pricingPlan/PricingDetailsLink';

export const featuresSelfHosted = {
  plans: ['Free', 'Team', 'Business', 'Enterprise'],
  items: [
    { type: 'title', label: 'Basic parameters' },
    {
      type: 'item',
      label: (
        <span>
          Included{' '}
          <PricingDetailsLink item="what-are-seats">seats</PricingDetailsLink>
        </span>
      ),
      items: ['10', 10, 10, 'Unlimited'],
    },
    {
      type: 'item',
      label: (
        <span>
          Extra{' '}
          <PricingDetailsLink item="what-are-seats">seat</PricingDetailsLink>
        </span>
      ),
      items: [
        'n',
        `€${(10).toLocaleString()}/month`,
        `€${(20).toLocaleString()}/month`,
        'Negotiable',
      ],
    },
    {
      type: 'item',
      label: 'Monthly price (annual billing)',
      items: [
        '€0/month',
        '€42/month',
        `€${(250).toLocaleString()}/month`,
        'Negotiable',
      ],
    },
    {
      type: 'item',
      label: 'Monthly price (monthly billing)',
      items: [
        '€0/month',
        '€50/month',
        `€${(300).toLocaleString()}/month`,
        'Negotiable',
      ],
    },
    {
      type: 'item',
      label: (
        <span>
          Extra 1000{' '}
          <PricingDetailsLink item="what-are-mt-credits">
            MT Credits
          </PricingDetailsLink>
        </span>
      ),
      items: [
        'n',
        `€${(0.035).toLocaleString()}`,
        `€${(0.035).toLocaleString()}`,
        'Negotiable',
        'n',
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
    {
      type: 'item',
      label: 'Granular permissions',
      items: ['n', 'n', 'y', 'y'],
    },
    { type: 'item', label: 'Webhooks', items: ['n', 'y', 'y', 'y'] },
    {
      type: 'item',
      label: (
        <PricingDetailsLink item="what-is-content-delivery">
          Multiple Content Deliveries
        </PricingDetailsLink>
      ),
      items: ['n', 'y', 'y', 'y'],
    },
    {
      type: 'item',
      label: (
        <PricingDetailsLink item="what-is-project-level-custom-content-storage">
          Project level custom Storage
        </PricingDetailsLink>
      ),
      items: ['n', 'n', 'y', 'y'],
    },

    { type: 'title', label: 'Assistance' },
    {
      type: 'item',
      label: 'Prioritized feature requests',
      items: ['n', 'n', 'n', 'y'],
    },
    {
      type: 'item',
      label: 'Standard support',
      items: ['n', 'y', 'y', 'y'],
    },
    { type: 'item', label: 'Premium support', items: ['n', 'n', 'y', 'y'] },
    { type: 'item', label: 'Account manager', items: ['n', 'n', 'y', 'y'] },
    {
      type: 'item',
      label: 'Dedicated Slack channel',
      items: ['n', 'n', 'n', 'y'],
    },

    {
      type: 'item',
      label: 'Assisted updates',
      items: ['n', 'n', 'n', 'y'],
    },
    {
      type: 'item',
      label: 'Backup configuration',
      items: ['n', 'n', 'n', 'y'],
    },
    { type: 'item', label: 'Team training', items: ['n', 'n', 'n', 'y'] },
  ] as FeaturesTableItem[],
};
