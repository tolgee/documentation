import React from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

interface SystemCardProps {
  title: string;
  emoji: string;
  description: string;
  links: Array<{
    href: string;
    label: string;
    color: 'blue' | 'green' | 'orange' | 'purple' | 'cyan';
  }>;
}

const colorClasses = {
  blue: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800',
  green: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 hover:bg-green-200 dark:hover:bg-green-800',
  orange: 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 hover:bg-orange-200 dark:hover:bg-orange-800',
  purple: 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 hover:bg-purple-200 dark:hover:bg-purple-800',
  cyan: 'bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 hover:bg-cyan-200 dark:hover:bg-cyan-800',
};

export default function SystemCard({
  title,
  emoji,
  description,
  links,
}: SystemCardProps) {
  return (
    <div
      className="grid gap-4 p-5 border-[1px] border-solid border-emphasis-200 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
      style={{ gridTemplateRows: 'auto 1fr auto' }}
    >
      <Heading as="h2" className="m-0 text-lg font-semibold">
        {emoji} {title}
      </Heading>
      <p
        className="m-0 text-sm"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <div className="flex flex-wrap gap-2 place-self-start">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.href}
            className={`text-xs px-2 py-1 rounded transition-colors ${
              colorClasses[link.color]
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
