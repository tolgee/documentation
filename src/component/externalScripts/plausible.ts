import { appendScript } from './appendScript';
import { useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export const usePlausible = (
  callback?: (plausible: (...args: any[]) => void) => void
) => {
  const { siteConfig } = useDocusaurusContext();

  const plausibleTrackingDomain = siteConfig.customFields
    .plausibleTrackingDomain as string | undefined;

  useEffect(() => {
    if (plausibleTrackingDomain) {
      const removeUrlScript = appendPlausibleUrlScript(plausibleTrackingDomain);
      const removeInlineScript = appendPlausibleInlineScript();
      callback?.call(null, window['plausible']);
      return () => {
        removeUrlScript();
        removeInlineScript();
      };
    }
  }, []);
};

export const appendPlausibleUrlScript = (trackingDomain: string) =>
  appendScript(
    '/js/script.hash.outbound-links.pageview-props.revenue.tagged-events.js',
    false,
    { domain: trackingDomain }
  );

export const appendPlausibleInlineScript = () => {
  const innerHTML = `
  window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }
  `;

  return appendScript(undefined, false, {}, innerHTML);
};
