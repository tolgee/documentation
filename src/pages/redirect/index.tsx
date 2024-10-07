import React from 'react';
import { usePlausible } from '../../component/externalScripts/plausible';

export default function Index() {
  const { search } = window.location;
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
}
