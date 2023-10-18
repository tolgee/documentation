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
          <p>🛠️ Building the Future of Software Localization 🛠️</p>
          <p>
            We're always open to meeting talented individuals who share our
            passion for making software localization easier. If you have skills
            or ideas that could contribute to our mission, we'd love to hear
            from you! Reach out to{' '}
            <a href="mailto:granat@tolgee.io">granat@tolgee.io</a>, let us know
            what you bring to the table, and we can explore how you can be a
            part of our exciting journey. 🚀
          </p>
          <h2>
            <GradientText>Currently open positions</GradientText>
          </h2>
          <h3>Developer Relations (Dev Rel)</h3>
          <p>
            Are you passionate about developer advocacy and fostering meaningful
            relationships within the tech community? Join us as a Dev Rel at
            Tolgee, where you'll have the opportunity to build connections,
            create resources and share knowledge.
          </p>
          <h3>Backend Developer - Kotlin/Java</h3>
          <p>
            Are you a passionate Kotlin/Java developer ready to embark on a
            thrilling journey with Tolgee? We're a startup that offers a unique
            experience, challenging the status quo of software localization.
          </p>
          <h3>Prefer to start small?</h3>
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
