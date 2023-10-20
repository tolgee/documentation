import React, { useEffect, useMemo } from 'react';

import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { getChatwootScript } from '../component/externalScripts/getChatwootScript';
import { getGtagScript } from '../component/externalScripts/getGtagScript';
import websiteSchema from '../info/website';
import {
  createTheme,
  Experimental_CssVarsProvider,
  ThemeProvider as MuiThemeProvider,
  useColorScheme,
} from '@mui/material';
import { useDarkMode } from '../utils';
import { getHotjarScript } from '../component/externalScripts/getHotjarScript';

const MuiThemeSynchronizer = () => {
  const isDarkTheme = useDarkMode();
  const { setMode } = useColorScheme();

  useEffect(() => {
    setMode(isDarkTheme ? 'dark' : 'light');
  }, [isDarkTheme]);

  return null;
};

export const LayoutContent = ({ children }) => {
  const isDarkTheme = useDarkMode();
  const { siteConfig } = useDocusaurusContext();

  const trackingId = siteConfig.customFields.googleTrackingId;
  //const cookieYesId = siteConfig.customFields.cookieYesId;
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
          main: isDarkTheme ? 'rgb(255, 105, 149)' : '#EC407A',
        },
      },
    });
  }, [isDarkTheme]);

  return (
    <>
      <Head>
        {/*{cookieYesId && (*/}
        {/*  <script*/}
        {/*    id="cookieyes"*/}
        {/*    type="text/javascript"*/}
        {/*    src={`https://cdn-cookieyes.com/client_data/${cookieYesId}/script.js`}*/}
        {/*  ></script>*/}
        {/*)}*/}
        {trackingId && (
          <script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${trackingId}');`}</script>
        )}
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
      {trackingId && (
        <div
          dangerouslySetInnerHTML={{
            __html: `<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${trackingId}"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->`,
          }}
        ></div>
      )}
      <Experimental_CssVarsProvider>
        <MuiThemeProvider theme={theme}>
          <MuiThemeSynchronizer />
          <>{children}</>
        </MuiThemeProvider>
      </Experimental_CssVarsProvider>
    </>
  );
};
