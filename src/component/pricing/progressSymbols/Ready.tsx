import React from 'react';
import { PricingCheckMark } from './svg/PricingCheckMark';
import Link from '@docusaurus/Link';

type Props = {
  children?: React.ReactNode;
  link?: string;
};

export function Ready({ children, link }: Props) {
  const content = (
    <>
      <span className="pricing__features-option--checkmark">
        <PricingCheckMark />
      </span>
      {children}
    </>
  );

  if (link) {
    return (
      <Link className="pricing__with-hint" to={link}>
        {content}
      </Link>
    );
  }

  return content;
}
