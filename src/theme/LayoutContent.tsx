import React, { useEffect } from "react";

import { useColorMode } from "@docusaurus/theme-common";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { getChatwootScript } from "../component/externalScripts/getChatwootScript";
import { getGtagScript } from "../component/externalScripts/getGtagScript";
import websiteSchema from "../info/website";

export const LayoutContent = ({ children }) => {
  const { isDarkTheme } = useColorMode();
  const { siteConfig } = useDocusaurusContext();

  const trackingId = siteConfig.customFields.googleTrackingId;
  const chatwootToken = siteConfig.customFields.chatwootToken;

  useEffect(() => {
    // this switches cookie content to dark mode
    if (isDarkTheme) {
      document.body.classList.add("c_darkmode");
    } else {
      document.body.classList.remove("c_darkmode");
    }
  }, [isDarkTheme]);
  return (
    <>
      <Head>
        <script>{getGtagScript(trackingId as string)}</script>
        <script>
          {getChatwootScript(chatwootToken as string, isDarkTheme)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
      </Head>
      {children}
    </>
  );
};
