import React, { useEffect } from 'react';
import posthog from 'posthog-js';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { reportMarketingTouch } from './marketingTouch';

/**
 * The file is MarketingTouchMount, not MarketingTouch: on a case-insensitive filesystem that would be the
 * same path as marketingTouch.ts, which holds the snippet logic shared with the Framer copy.
 */

export const MarketingTouch = () => {
  const { siteConfig } = useDocusaurusContext();
  const endpoint =
    (siteConfig.customFields.marketingSessionEndpoint as string) || '';
  const root =
    (siteConfig.customFields.utmCookieDomain as string) || 'tolgee.io';

  useEffect(() => {
    let distinctId: string | undefined;
    try {
      // LayoutContent initialises posthog in its own effect, so this can run first and throw.
      distinctId = posthog.get_distinct_id() || undefined;
    } catch (e) {
      distinctId = undefined;
    }
    reportMarketingTouch(endpoint, root, distinctId);
  }, []);

  return <></>;
};
