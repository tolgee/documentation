import React, { useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export const UtmToCookie = () => {
  const { siteConfig } = useDocusaurusContext();
  const domain = (siteConfig.customFields.utmCookieDomain as string) || '';

  useEffect(() => {
    setUTMCookie(domain);
  }, []);

  return <></>;
};

function setUTMCookie(domain: string): void {
  const urlParams = new URLSearchParams(window.location.search);
  const utmParams = {};

  // Retrieve UTM parameters from the URL
  for (const [param, value] of urlParams.entries()) {
    if (param.startsWith('utm_')) {
      utmParams[param] = value;
    }
  }

  // Convert UTM parameters to Base64
  const base64UTMParams = btoa(JSON.stringify(utmParams));

  // Store UTM parameters in a cookie
  document.cookie = `tolgee_utm=${encodeURIComponent(
    base64UTMParams
  )};domain=${domain};path=/;`;
}
