import Link from '@docusaurus/Link';
import React from 'react';

export default function ExampleBanner({ framework, appName }) {
  return (
    <blockquote>
      Check our{' '}
      <Link
        href={`https://github.com/tolgee/${
          appName || framework.toLowerCase()
        }-example`}
      >
        {framework} example application
      </Link>{' '}
      to get a complete image of working {framework} integration.
    </blockquote>
  );
}
