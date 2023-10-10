import React from 'react';
import Link from '@docusaurus/Link';
import { AuthorSummary } from '../AuthorSummary';

export const NotConvincedYet = () => {
  return (
    <section className="flex flex-col items-center font-[300] my-32 mx-6">
      <div className="max-w-[500px] flex flex-col items-center">
        <h2>Not convinced yet?</h2>
        <p className="text-[20px] text-center mb-0">
          Not sure whether Tolgee is a great match for you?
        </p>
        <p className="text-[20px] text-center">
          Just reach out to us at{' '}
          <a href="mailto:info@tolgee.io">info@tolgee.io</a>, check our
          community{' '}
          <a
            href="https://join.slack.com/t/tolgeecommunity/shared_invite/zt-195isb5u8-_RcSRgVJfvgsPpOBIok~IQ"
            target="_blank"
            rel="noreferrer noopener"
          >
            slack
          </a>
          ,{' '}
          <a
            href="https://github.com/tolgee/tolgee-platform/discussions"
            target="_blank"
            rel="noreferrer noopener"
          >
            github discussions
          </a>{' '}
          or <Link href="/platform/">docs</Link>.
        </p>

        <div className="flex justify-between items-center mt-8 flex-wrap">
          <AuthorSummary
            author={{
              name: 'Marketa Chalupnikova',
              imageURL: '/img/blog/profile-photos/marketa.png',
              title: 'Co-founder & COO',
            }}
          />
          <div>
            <a
              href="https://calendly.com/tolgee/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="button--primary block button--small whitespace-nowrap ml-4"
            >
              Book a demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
