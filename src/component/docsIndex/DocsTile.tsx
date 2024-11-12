import Link from '@docusaurus/Link';
import React from 'react';

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
      <h2 className="m-0">{title}</h2>
      <p className="m-0">{text}</p>
      <Link className="place-self-start" to={link}>
        {linkText}
      </Link>
    </div>
  );
};
