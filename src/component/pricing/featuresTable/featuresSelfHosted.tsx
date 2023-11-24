import React from 'react';
import { FeaturesTableItem } from './FeaturesTable';
import { PricingDetailsLink } from '../pricingPlan/PricingDetailsLink';

export const featuresSelfHosted = {
  plans: ['Free', 'Business', 'Enterprise'],
  items: [
    { type: 'title', label: 'Basic parameters' },
    {
      type: 'item',
      label: (
        <span>
          Included <PricingDetailsLink>seats</PricingDetailsLink>
        </span>
      ),
      items: ['Unlimited', 10, 'Unlimited'],
    },
    {
      type: 'item',
      label: (
        <span>
          Extra <PricingDetailsLink>seat</PricingDetailsLink>
        </span>
      ),
      items: ['n', `€${(20).toLocaleString()}/month`, 'n'],
    },
    {
      type: 'item',
      label: 'Monthly price (annual billing)',
      items: ['€0/month', `€${(250).toLocaleString()}/month`, 'Negotiable'],
    },
    {
      type: 'item',
      label: 'Monthly price (monthly billing)',
      items: ['€0/month', `€${(300).toLocaleString()}/month`, 'Negotiable'],
    },

    { type: 'title', label: 'Features' },
    {
      type: 'item',
      label: 'In-context translating',
      items: ['y', 'y', 'y'],
    },
    {
      type: 'item',
      label: 'Translation memory',
      items: ['y', 'y', 'y'],
    },
    {
      type: 'item',
      label: 'Machine translations',
      items: ['y', 'y', 'y'],
    },
    {
      type: 'item',
      label: 'Auto translation',
      items: ['y', 'y', 'y'],
    },
    { type: 'item', label: 'Activity log', items: ['y', 'y', 'y'] },
    { type: 'item', label: 'Tolgee CLI', items: ['y', 'y', 'y'] },
    {
      type: 'item',
      label: 'Tolgee Chrome plugin',
      items: ['y', 'y', 'y'],
    },
    {
      type: 'item',
      label: 'One-click screenshots',
      items: ['y', 'y', 'y'],
    },
    {
      type: 'item',
      label: <PricingDetailsLink>Single Content Delivery</PricingDetailsLink>,
      items: ['y', 'y', 'y'],
    },
    { type: 'item', label: 'Figma plugin', items: ['y', 'y', 'y', 'y'] },
    {
      type: 'item',
      label: 'Granular permissions',
      items: ['n', 'y', 'y'],
    },
    { type: 'item', label: 'Webhooks', items: ['n', 'y', 'y'] },
    {
      type: 'item',
      label: (
        <PricingDetailsLink>Multiple Content Deliveries</PricingDetailsLink>
      ),
      items: ['n', 'y', 'y'],
    },
    {
      type: 'item',
      label: <PricingDetailsLink>Custom Content Storage</PricingDetailsLink>,
      items: ['n', 'y', 'y'],
    },

    { type: 'title', label: 'Assistance' },
    {
      type: 'item',
      label: 'Prioritized feature requests',
      items: ['n', 'y', 'y'],
    },
    {
      type: 'item',
      label: 'Standard support',
      items: ['n', 'y', 'y'],
    },
    { type: 'item', label: 'Premium support', items: ['n', 'n', 'y'] },
    { type: 'item', label: 'Account manager', items: ['n', 'n', 'y'] },
    {
      type: 'item',
      label: 'Dedicated Slack channel',
      items: ['n', 'n', 'y'],
    },

    {
      type: 'item',
      label: 'Assisted updates',
      items: ['n', 'n', 'y'],
    },
    {
      type: 'item',
      label: 'Backup configuration',
      items: ['n', 'n', 'y'],
    },
    { type: 'item', label: 'Team training', items: ['n', 'n', 'y'] },
  ] as FeaturesTableItem[],
};
