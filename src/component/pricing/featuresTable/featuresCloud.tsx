import React from 'react';
import { FeaturesTableItem } from './FeaturesTable';
import { PricingDetailsLink } from '../pricingPlan/PricingDetailsLink';

export const featuresCloud = {
  plans: ['Free', 'Pay as you go', 'Business', 'Enterprise'],
  items: [
    { type: 'title', label: 'Basic parameters' },
    {
      type: 'item',
      label: 'Base monthly price (Annual billing)',
      items: [
        '€0/month',
        '$0/month',
        `€${(84).toLocaleString()}/month`,
        'Negotiable',
      ],
    },
    {
      type: 'item',
      label: 'Base monthly price (Monthly billing)',
      items: [
        '€0/month',
        '$0/month',
        `€${(100).toLocaleString()}/month`,
        'Negotiable',
      ],
    },
    {
      type: 'item',
      label: (
        <span>
          Included <PricingDetailsLink>strings</PricingDetailsLink>
        </span>
      ),
      items: [
        (1000).toLocaleString(),
        (1000).toLocaleString(),
        (20000).toLocaleString(),
        'Unlimited',
      ],
    },
    {
      type: 'item',
      label: (
        <span>
          Included <PricingDetailsLink>MT credits</PricingDetailsLink>
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
          Included <PricingDetailsLink>seats</PricingDetailsLink>
        </span>
      ),
      items: ['Unlimited', 'Unlimited', 'Unlimited', 'Unlimited'],
    },
    {
      type: 'item',
      label: (
        <span>
          Extra 1000 <PricingDetailsLink>strings</PricingDetailsLink>
        </span>
      ),
      items: [
        'n',
        `€${(10).toLocaleString()}/month`,
        `€${(7).toLocaleString()}/month`,
        'n',
      ],
    },
    {
      type: 'item',
      label: (
        <span>
          Extra 1000 <PricingDetailsLink>MT credits</PricingDetailsLink>
        </span>
      ),
      items: [
        'n',
        `€${(0.2).toLocaleString()}`,
        `€${(0.15).toLocaleString()}`,
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
    {
      type: 'item',
      label: 'One-click screenshots',
      items: ['y', 'y', 'y', 'y'],
    },
    { type: 'item', label: 'Figma plugin', items: ['y', 'y', 'y', 'y'] },
    {
      type: 'item',
      label: 'Granular permissions',
      items: ['n', 'n', 'y', 'y'],
    },
    { type: 'item', label: 'CDN', items: ['n', 'n', 'd', 'd'] },
    { type: 'item', label: 'Webhooks', items: ['n', 'n', 'd', 'd'] },

    { type: 'title', label: 'Assistance' },
    {
      type: 'item',
      label: 'Prioritized feature requests',
      items: ['n', 'n', 'y', 'y'],
    },
    {
      type: 'item',
      label: 'Standard support',
      items: ['n', 'n', 'y', 'y'],
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
