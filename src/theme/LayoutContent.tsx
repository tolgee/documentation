import React, { useEffect, useMemo } from 'react';

import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { getChatwootScript } from '../component/externalScripts/getChatwootScript';
import { getGtagScript } from '../component/externalScripts/getGtagScript';
import websiteSchema from '../info/website';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { useDarkMode } from '../utils';
import { getHotjarScript } from '../component/externalScripts/getHotjarScript';

export const LayoutContent = ({ children }) => {
  const isDarkTheme = useDarkMode();
  const { siteConfig } = useDocusaurusContext();

  const trackingId = siteConfig.customFields.googleTrackingId;
  const chatwootToken = siteConfig.customFields.chatwootToken;
  const hotjarId = siteConfig.customFields.hotjarId;

  useEffect(() => {
    setTimeout(() => {
      // this switches cookie content to dark mode
      if (isDarkTheme) {
        document.body.parentElement.classList.add('c_darkmode');
        document.body.parentElement.classList.add('dark');
      } else {
        document.body.parentElement.classList.remove('c_darkmode');
        document.body.parentElement.classList.remove('dark');
      }
    }, 30);
  }, [isDarkTheme]);

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        primary: {
          main: isDarkTheme ? 'rgb(255, 105, 149)' : '#822B55',
        },
      },
    });
  }, [isDarkTheme]);

  return (
    <>
      <Head>
        {trackingId && <script>{getGtagScript(trackingId as string)}</script>}
        {chatwootToken && (
          <script>
            {getChatwootScript(chatwootToken as string, isDarkTheme)}
          </script>
        )}
        {hotjarId && <script>{getHotjarScript(hotjarId as string)}</script>}
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
        <meta
          name="facebook-domain-verification"
          content="boppg6u2f0982xhjbg7jtr9odtchvk"
        />
      </Head>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </>
  );
};
