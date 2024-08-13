/* eslint-disable react/no-unescaped-entities */
import Head from '@docusaurus/Head';
import React from 'react';

import DecoratedLayout from '../../theme/DecoratedLayout';
import { PageHeader } from '../../component/pageComponents/header/PageHeader';
import { PageHeaderTitle } from '../../component/pageComponents/header/PageHeaderTitle';
import { PageHeaderSubtitle } from '../../component/pageComponents/header/PageHeaderSubtitle';
import { GradientText } from '../../component/GradientText';
import { ReviewAuthor } from '../../component/reviewAuthor/ReviewAuthor';
import './career.css';

export default function Career() {
  return (
    <div>
      <DecoratedLayout title={`Why open-source?`}>
        <PageHeader className="mb-[180px]">
          <PageHeaderTitle active h1>
            Join Us on Our Journey
          </PageHeaderTitle>
          <PageHeaderSubtitle>We are hiring!</PageHeaderSubtitle>
        </PageHeader>
        <Head>
          <meta
            name="description"
            content="Why is open source our passion? Learn why we follow the open-source model with Tolgee localization tool and what are the benefits."
          />
        </Head>

        <div className="container career__container">
          <p>
            We're always open to meeting talented individuals who share our
            passion for making software localization easier. If you have skills
            or ideas that could contribute to our mission, we'd love to hear
            from you! Reach out to{' '}
            <a href="mailto:granat@tolgee.io">granat@tolgee.io</a>, let us know
            what you bring to the table, and we can explore how you can be a
            part of our exciting journey. 🚀
          </p>
          <h2 className="mt-[30px]">
            <GradientText>Currently open positions</GradientText>
          </h2>
          <h3>
            <a href="/blog/we-are-hiring-full-stack-engineer-with-focus-on-the-backend">
              Full-stack engineer with focus on the backend
            </a>
          </h3>
          <p>
            We are looking for someone would will become integral part of Tolgee
            team and who will continues building a great, stable, clean and
            scalable backend of Tolgee Platform.
            <br />
            <a href="/blog/we-are-hiring-full-stack-engineer-with-focus-on-the-backend">
              Read more.
            </a>
          </p>
          <h3>Full-stack engineer with focus on mobile development</h3>
          <p>
            We are looking for someone would will become integral part of Tolgee
            team and who will build the best ever i18n mobile SDKs for Android,
            iOS or Flutter.
          </p>
          <h2 className="mt-[30px] mb-[50px]">
            <GradientText>Prefer to start small?</GradientText>
          </h2>
          <p>
            Join and contribute to the Tolgee Open-Source Community on{' '}
            <a href="https://github.com/tolgee/tolgee-platform">GitHub</a> and
            be a part of shaping the future of software localization! 🛠️
          </p>
          <div className="flex justify-center mt-16">
            <div className="max-w-[500px]">
              <ReviewAuthor
                author={{
                  imageURL: '/img/blog/profile-photos/stepan.jpeg',
                  name: 'Stepan Granat',
                  title: 'CTO & Co-Founder',
                }}
                description="We are small team, but we cover a wide range of technologies. Nobody has just one role in Tolgee. Join us, if you like learning new things and want to experience open-source development!"
              />
            </div>
          </div>
        </div>
      </DecoratedLayout>
    </div>
  );
}
