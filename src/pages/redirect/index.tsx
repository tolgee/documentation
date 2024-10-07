import React, { FC } from 'react';
import { usePlausible } from '../../component/externalScripts/plausible';
import { useHistory } from 'react-router-dom';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function Redirect() {
  return (
    <BrowserOnly>
      {() => {
        const { search } = useHistory().location;
        const targetUrl = new URLSearchParams(search).get('to');

        const redirect = () => (window.location.href = targetUrl);

        usePlausible((plausible) => {
          plausible('External Redirect', {
            callback: () => {
              redirect();
            },
            props: { targetUrl },
          });
        });

        setTimeout(redirect, 5000);

        return <>Redirecting you to {targetUrl}!</>;
      }}
    </BrowserOnly>
  );
}
