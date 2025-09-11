import Link from '@docusaurus/Link';
import React from 'react';
import Heading from '@theme/Heading';

type Props = {
  title: string;
  text: React.ReactNode;
  link: string;
  linkText: string;
};

export const DocsTile = ({ title, text, link, linkText }: Props) => {
  return (
    <div
      className="grid gap-4 p-5 border-[1px] border-solid border-emphasis-200 rounded-2xl shadow-sm"
      style={{ gridTemplateRows: 'auto 1fr auto' }}
    >
      <Heading as="h2" className="m-0">
        {title}
      </Heading>
      <p className="m-0">{text}</p>
      <Link className="place-self-start" to={link}>
        {linkText}
      </Link>
    </div>
  );
};
