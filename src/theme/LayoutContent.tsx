import React, {useEffect} from "react";

import {useColorMode} from "@docusaurus/theme-common";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {getChatwootScript} from "../component/externalScripts/getChatwootScript";
import {getGtagScript} from "../component/externalScripts/getGtagScript";
import websiteSchema from "../info/website";

export const LayoutContent = ({children}) => {
  const isDarkTheme = useColorMode().colorMode === "dark";
  const {siteConfig} = useDocusaurusContext();

  const trackingId = siteConfig.customFields.googleTrackingId;
  const chatwootToken = siteConfig.customFields.chatwootToken;

  useEffect(() => {
    setTimeout(() => {
      // this switches cookie content to dark mode
      if (isDarkTheme) {
        document.body.parentElement.classList.add("c_darkmode");
        document.body.parentElement.classList.add("dark");
      } else {
        document.body.parentElement.classList.remove("c_darkmode");
        document.body.parentElement.classList.remove("dark");
      }
    }, 30)
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
