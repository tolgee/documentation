import React from 'react';
import Link from '@docusaurus/Link';
import Admonition from '@theme/Admonition';

export default function ExampleBanner({ framework, appName }) {
  return (
    <Admonition type="tip">
      You can also check the{' '}
      <Link
        href={`https://github.com/tolgee/${
          appName || framework.toLowerCase()
        }-example`}
      >
        {framework} example application
      </Link>{' '}
      to learn more.
    </Admonition>
  );
}
