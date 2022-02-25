import OriginalLayout from "@theme-original/Layout";

import React from "react";
import { CookieConsent } from "../component/cookieConsent/CookieConsent";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { getChatwootScript } from "../component/externalScripts/getChatwootScript";
import { getGtagScript } from "../component/externalScripts/getGtagScript";
import websiteSchema from "../info/website";
import { LayoutContent } from "./LayoutContent";

export default function Layout(props) {
  const { siteConfig } = useDocusaurusContext();
  const trackingId = siteConfig.customFields.googleTrackingId;
  const chatwootToken = siteConfig.customFields.chatwootToken;

  return (
    <>
      <Head>
        <script>{getGtagScript(trackingId as string)}</script>
        <script>{getChatwootScript(chatwootToken as string)}</script>
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
      </Head>
      <OriginalLayout {...props}>
        <LayoutContent>{props.children}</LayoutContent>
      </OriginalLayout>
      <CookieConsent />
    </>
  );
}
