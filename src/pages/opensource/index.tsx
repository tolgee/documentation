import React from 'react';
import './openSource.css';
import DecoratedLayout from '../../theme/DecoratedLayout';
import { PageHeader } from '../../component/pageComponents/header/PageHeader';
import { PageHeaderTitle } from '../../component/pageComponents/header/PageHeaderTitle';
import { PageHeaderSubtitle } from '../../component/pageComponents/header/PageHeaderSubtitle';
import { GradientText } from '../../component/GradientText';
import Head from '@docusaurus/Head';
import { ReviewAuthor } from '../../component/reviewAuthor/ReviewAuthor';

export default function WhyOpensource() {
  return (
    <div>
      <DecoratedLayout title={`Why open-source?`}>
        <PageHeader className="mb-[180px]">
          <PageHeaderTitle active h1>
            Opensource is our passion.
          </PageHeaderTitle>
          <PageHeaderSubtitle>Why so?</PageHeaderSubtitle>
        </PageHeader>
        <Head>
          <meta
            name="description"
            content="Why is open source our passion? Learn why we follow the open-source model with Tolgee localization tool and what are the benefits."
          />
        </Head>

        <div className="container opensource__container">
          <p>Open-source is just a wonderful thing.</p>

          <p>
            In Tolgee, we decided to follow the open-source model, believing it
            is the best way to distribute the tool widely. Developers usually
            prefer open-source solutions, and it is for sure a smart decision
            for many reasons. That’s also why open&#x2011;source software is
            growing more popular and widespread all over the IT world today.
          </p>

          <p>
            However, not everything is for free, even when it comes to
            open&#x2011;source software. Tolgee is free to run on your own
            infrastructure in a small team, or you can pay us for cloud storage,
            computing power, and maintenance of the system. Believe it or not,
            even with these expenses, our open&#x2011;source solution is way
            cheaper than other closed&#x2011;source alternatives.
          </p>

          <p>
            We have no secrets about our plan to build a good business with
            Tolgee. With an open&#x2011;core business model, we believe we can
            bring high value to companies and individuals and have a
            well&#x2011;running company at the same time. In an ideal world,
            companies could create great localized products without being
            restricted to a single vendor.
          </p>

          <p>
            Tolgee is not all&#x2011;powerful. Not yet, anyway. 😜 But with the
            power of the community, we can collaborate on new integrations and
            features together, making Tolgee accessible to many more users and
            clearing the way for them to easily localize their projects.
          </p>

          <h2>
            <GradientText>So, what are Tolgee’s revenue streams?</GradientText>
          </h2>

          <p>
            We have different ways of covering the development costs of the
            Tolgee tool. It primarily is:
          </p>

          <p>
            👨‍💻 <GradientText>Software as a Service</GradientText> &#x2011;
            Firstly, paying for the cloud system hosted by Tolgee will save time
            for developers maintaining the system and make the whole process
            more comfortable. This means fewer headaches and less time spent
            troubleshooting technical issues, allowing developers to focus their
            energy on what truly matters - building and improving their
            applications.
          </p>

          <p>
            🏠 <GradientText>Self-hosted Tolgee for big teams</GradientText>{' '}
            &#x2011; For larger organizations with specific security and
            customization needs, Tolgee offers self-hosted plans. This option
            allows big teams to host Tolgee on their own servers, providing
            greater control over data privacy and system configuration. With
            self-hosting, organizations can tailor Tolgee to their unique
            requirements while ensuring seamless integration within their
            existing infrastructure.
          </p>

          <p>
            💼 <GradientText>Enterprise solution</GradientText> &#x2011;
            Enterprises have the freedom to modify and customize the platform
            according to their specific needs and requirements, empowering them
            to tailor the solution to their unique workflows and processes.
            Being open-source, Tolgee provides the assurance of transparency and
            flexibility, mitigating the risk of vendor lock-in.
          </p>

          <p>Join us in shaping the future of localization technology!</p>

          <div className="flex justify-center mt-16">
            <div className="max-w-[500px]">
              <ReviewAuthor
                author={{
                  imageURL: '/img/reviewers/anze.png',
                  name: 'Anze M.',
                  title: 'Tech Lead',
                }}
                description="When choosing our internal localization platform we had 2 main criteria: open-source and support for standard localization formats (XLIFF). Tolgee covers both of them well and also offer great tech/customer support on their Slack channel."
                capterraReview="https://www.capterra.com/p/10002120/Tolgee/reviews/4345670/"
              />
            </div>
          </div>
        </div>
      </DecoratedLayout>
    </div>
  );
}
