import React from 'react';
import Link from '@docusaurus/Link';

export const OpensourceLink = () => {
  return (
    <div className="pricing__opensource--container">
      <Link
        className="pricing__opensource--link"
        to="mailto:info@tolgee.io?subject=Tolgee for open-source"
      >
        Free for open-source
      </Link>
    </div>
  );
};
