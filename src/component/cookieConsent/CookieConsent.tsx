import Head from '@docusaurus/Head';
import React, { useEffect } from 'react';

declare global {
  interface Window {
    openCookieSettings: () => void;
    initCookieConsent: () => {
      showSettings: () => void;
      run: (arg: any) => void;
    };
    // added in getGtagScript.ts
    onGtagLoaded: () => void;
    // added in getGtagScript.ts
    gtag: (...args: any[]) => void;
  }
}

export const CookieConsent = () => {
  useEffect(() => {
    if (typeof window.initCookieConsent !== 'function') {
      return;
    }

    const cc = window.initCookieConsent();

    window.openCookieSettings = () => {
      cc.showSettings();
    };

    const update = (data: { level: string }) => {
      window.onGtagLoaded = () => {
        const settings = {
          analytics_storage:
            data.level.indexOf('analytics') > -1 ? 'granted' : 'denied',
        };

        window.gtag('consent', 'update', settings);
      };

      // we are not sure if this script, or gTag initialization goes first
      // if window.gtag is already there, then we can call it right
      // otherwise, it will be called after gTag initialization
      if (typeof window.gtag === 'function') {
        window.onGtagLoaded();
      }
    };

    cc.run({
      current_lang: 'en',
      autoclear_cookies: true, // default: false
      theme_css: '/scripts/cookieconsent.css',
      page_scripts: true, // default: false
      gui_options: {
        consent_modal: {
          layout: 'cloud', // box/cloud/bar
          position: 'bottom left', // bottom/middle/top + left/right/center
          transition: 'slide', // zoom/slide
          swap_buttons: false, // enable to invert buttons
        },
        settings_modal: {
          layout: 'box', // box/bar
          // position: 'left',           // left/right
          transition: 'slide', // zoom/slide
        },
      },

      onAccept: function (cookie) {
        update(cookie);
      },

      onChange: function (cookie) {
        update(cookie);
      },

      languages: {
        en: {
          consent_modal: {
            title: 'We use cookies!',
            description:
              'Hi, this website uses essential cookies to ensure ' +
              'its proper operation and tracking cookies to understand ' +
              'how you interact with it. The latter will be set only after consent. ' +
              '<button type="button" data-cc="c-settings" class="cc-link">Let me choose</button>',
            primary_btn: {
              text: 'Accept all',
              role: 'accept_all', // 'accept_selected' or 'accept_all'
            },
            secondary_btn: {
              text: 'Reject all',
              role: 'accept_necessary', // 'settings' or 'accept_necessary'
            },
          },
          settings_modal: {
            title: 'Cookie preferences',
            save_settings_btn: 'Save settings',
            accept_all_btn: 'Accept all',
            reject_all_btn: 'Reject all',
            close_btn_label: 'Close',
            cookie_table_headers: [
              { col1: 'Name' },
              { col2: 'Domain' },
              { col3: 'Expiration' },
              { col4: 'Description' },
            ],
            blocks: [
              {
                title: 'Cookie usage 📢',
                description:
                  'We use cookies to ensure the basic functionalities of the website and to enhance your online experience. ' +
                  'You can choose for each category to opt-in/out whenever you want. ' +
                  'For more details relative to cookies and other sensitive data, please read the full ' +
                  '<a href="/docs/terms_and_conditions/cookie_policy" class="cc-link">cookie policy</a>.',
              },
              {
                title: 'Strictly necessary cookies',
                description:
                  'These cookies are essential for the proper functioning of our website. ' +
                  'Without these cookies, the website would not work properly',
                toggle: {
                  value: 'necessary',
                  enabled: true,
                  readonly: true,
                },
              },
              {
                title: 'Analytics',
                description:
                  'We are using Google Analytics to analyze our traffic. Without these cookies, we would not be able to analyze ' +
                  'what users do on this page.',
                toggle: {
                  value: 'analytics',
                  enabled: false,
                  readonly: false,
                },
              },
            ],
          },
        },
      },
    });
  });

  // prevent docosaurus from removing this class from html
  // (which was closing the consent popup when switching to different page)
  return (
    <Head>
      <html className="show--consent" />
    </Head>
  );
};
