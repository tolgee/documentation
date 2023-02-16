/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './roadmap.css';
import DecoratedLayout from '../../theme/DecoratedLayout';
import { PageHeader } from '../../component/pageComponents/header/PageHeader';
import { PageHeaderTitle } from '../../component/pageComponents/header/PageHeaderTitle';
import { PageHeaderSubtitle } from '../../component/pageComponents/header/PageHeaderSubtitle';
import Head from '@docusaurus/Head';

type Item = {
  name: string;
  description: React.ReactNode;
  done?: boolean;
  gitHubIssueLink?: string;
};

type PeriodData = {
  active?: boolean;
  future?: boolean;
  items: Item[];
};

const roadmapData = {
  '2023/Q1-Q2': {
    active: false,
    future: true,
    items: [
      {
        name: 'Permission enhancements',
        gitHubIssueLink:
          'https://github.com/tolgee/tolgee-platform/issues/1336',
        description: (
          <p>
            Currently, the permissions are level oriented. You can have MANAGE
            permission, which enables you to do everything in the project, or
            EDIT which enables you to manage keys, translations, or screenshots.
            But what if you want to enable a specific user to only add
            screenshots? With enhanced permissions users will be able to set
            granular permissions for each scope like uploading screenshots,
            adding a key, modifying translations, you name it.
          </p>
        ),
      },
      {
        name: 'Batch operations',
        gitHubIssueLink: 'https://github.com/tolgee/tolgee-platform/issues/911',
        description: (
          <p>
            Select as many keys as you want and then tag them, find and replace
            in them, auto-translate, or change their state.
          </p>
        ),
      },
      {
        name: 'Webhooks',
        gitHubIssueLink:
          'https://github.com/tolgee/tolgee-platform/issues/1544',
        description: (
          <p>
            With webhooks, developers would be able to create their custom
            automation when project data change without periodically calling the
            REST API. They will be notified by specific events automatically!
          </p>
        ),
      },
      {
        name: 'Backups and data export',
        gitHubIssueLink:
          'https://github.com/tolgee/tolgee-platform/issues/1540',
        description: (
          <p>
            For our subscribers, we would like to provide an automated backups
            feature, which will enable users to restore their project data to a
            specific state when something goes wrong. Users will be also able to
            export all project data including metadata and screenshots and
            import them later.
          </p>
        ),
      },
      {
        name: 'CDN',
        gitHubIssueLink:
          'https://github.com/tolgee/tolgee-platform/issues/1538',
        description: (
          <p>
            Tolgee will automatically upload the exported localization data
            after every change, so your translations will be always up to date.
            You will be also able to configure your S3-compatible bucket, so the
            data stay with you.
          </p>
        ),
      },
      {
        name: 'Tasks',
        gitHubIssueLink:
          'https://github.com/tolgee/tolgee-platform/issues/1548',
        description: (
          <p>
            Tasks will enhance project management, improve collaboration, and
            enable better time management for translators. You will easily break
            down your large project into smaller, more manageable sections which
            helps translators to prioritize and work more efficiently.
          </p>
        ),
      },
      {
        name: 'Notifications',
        gitHubIssueLink:
          'https://github.com/tolgee/tolgee-platform/issues/1539',
        description: (
          <p>
            When something changes in your project, users will be notified, if
            enabled. So you can get your strings translated asap.
          </p>
        ),
      },
      {
        name: 'Community translations',
        gitHubIssueLink:
          'https://github.com/tolgee/tolgee-platform/issues/1360',
        description: (
          <p>
            Tolgee is currently used by many open source projects, but Tolgee
            doesn&apos;t support a safe way of community translating. It can
            limit translation permissions to specific users, but the user can
            then modify all the strings in the language. We need to provide a
            better way, where the community members would be able to only
            propose changes, which have to be approved and merged by somebody
            who is permitted to.
          </p>
        ),
      },
      {
        name: 'All format support',
        gitHubIssueLink:
          'https://github.com/tolgee/tolgee-platform/issues/1547',
        description: (
          <p>
            Tolgee currently works fine with ICU message format and you can
            import data in .po format. However, there are many more formats we
            want to support. In this task, we would like to create a universal
            solution for format support, so we will be able to support any
            format in the future.
          </p>
        ),
      },
      {
        name: 'Visual editor',
        gitHubIssueLink:
          'https://github.com/tolgee/tolgee-platform/issues/1547',
        description: (
          <>
            <p>
              The current editor helps you with ICU syntax but doesn&apos;t help
              you with placeholders or HTML tags. For many, this is not an issue
              but it&apos;s problematic for example in the Arabic language,
              where it&apos;s hard to mix HTML and Arabic characters.
            </p>
            <p>
              By visual editor, we mean a nice environment, where tags and
              parameter placeholders are represented visually, so translators
              don&apos;t have to worry about them. The plurals are also visually
              represented, so users can edit them without understanding the
              message formatting language.
            </p>
          </>
        ),
      },
      {
        name: 'Tolgee Translator (experimental)',
        gitHubIssueLink:
          'https://github.com/tolgee/tolgee-platform/issues/1543',
        description: (
          <p>
            Tolgee's very own Translator, which uses open-source projects data
            to provide the best possible results. For enterprise customers, it
            will use their specific data to deliver results reflecting their
            particular context and terminology.
          </p>
        ),
      },
    ],
  },
  '2023/Q3-Q4': {
    active: false,
    future: true,
    items: [
      {
        name: 'Git integrations',
        gitHubIssueLink:
          'https://github.com/tolgee/tolgee-platform/issues/1542',
        description: (
          <>
            <p>
              There are times when it would be great if localization data were
              synced with your Git repository. Or maybe you would like to create
              pull requests automatically when translations are changed...
            </p>
            <p>
              To do this, integrations to <b>GitHub, GitLab</b>, or just support
              for Git itself will be helpful.
            </p>
          </>
        ),
      },
      {
        name: 'Glossaries',
        gitHubIssueLink:
          'https://github.com/tolgee/tolgee-platform/issues/1418',
        description: (
          <p>
            To translate the same terms the same way every time, you need to
            store the terminology to reuse it in the future. Glossaries are the
            feature that enables you to do that.
          </p>
        ),
      },
      {
        name: 'Ordering professional translation',
        gitHubIssueLink:
          'https://github.com/tolgee/tolgee-platform/issues/1561',
        description: (
          <p>
            Looking for a way to localize your product into foreign markets
            Tolgee will help you with that. With Tolgee, you will easily find
            the ideal professional translator for your needs.
          </p>
        ),
      },
      {
        name: 'Document formats support',
        gitHubIssueLink:
          'https://github.com/tolgee/tolgee-platform/issues/1549',
        description: (
          <p>
            Support for document file formats like DOCX, PPTX, or HTML will
            enable you to have them translated with ease.
          </p>
        ),
      },
      {
        name: 'Design tools integrations',
        gitHubIssueLink:
          'https://github.com/tolgee/tolgee-platform/issues/1560',
        description: (
          <p>
            With Tolgee, developers and translators can translate apps very
            easily. We would also like to provide translators with simplicity by
            enabling them to translate texts directly in tools like{' '}
            <b>Figma, XD, or Miro</b>.
          </p>
        ),
      },
      {
        name: 'In-context support for mobile apps',
        gitHubIssueLink:
          'https://github.com/tolgee/tolgee-platform/issues/1545',
        description: (
          <p>
            The in-context translating works great with web apps, and we would
            like to provide the same comfort to mobile developers.
          </p>
        ),
      },
      {
        name: 'QA Checks',
        gitHubIssueLink:
          'https://github.com/tolgee/tolgee-platform/issues/1546',
        description: (
          <p>
            Even translators make mistakes, but some of these mistakes can be
            detected, and translators can be notified. No more mistakes like
            missing tags, missing parameters, or missing punctuation marks.
          </p>
        ),
      },
    ],
  },
  '2024/Q1-Q2': {
    active: false,
    future: true,
    items: [
      {
        name: 'Branching',
        gitHubIssueLink:
          'https://github.com/tolgee/tolgee-platform/issues/1550',
        description: (
          <p>
            Sometimes you need to maintain multiple versions of your software,
            so you’ll need to have multiple versions of your localization data
            stored in Tolgee as well.
          </p>
        ),
      },
    ],
  },
  '2021/Q3-Q4': {
    items: [
      {
        name: 'V1 Release',
        description: `After a year and a half of development, we’ve decided to finally release the 
first official and stable version of Tolgee. Tolgee is now tested and stable, so 
it's time to celebrate. 🎉🎉🎉`,
        done: true,
      },
      {
        name: 'Start to promote Tolgee',
        description: `Until now, we have been working hard to come up with a product that will 
satisfy most of the needs of our users. Since Tolgee is now production-ready, 
and we are going to promote it hard!`,
        done: true,
      },
      {
        name: 'Clean and improve UI',
        description: `Before we released Tolgee V1, we wanted to clean up the UI since we wanted 
        our users to have a great user experience.`,
        done: true,
      },
      {
        name: 'Automatic screenshot generation',
        description: `Context is the most important thing for translators to do their job correctly. 
We wanted to enable software developers to provide the context to translators
without wasting their time. With Tolgee JS SDK and Tolgee Chrome plugin, 
developers are able to generate screenshots automatically while creating the 
key in the in-context translation UI.`,
        done: true,
      },
    ],
  },
  '2022/Q1': {
    items: [
      {
        name: 'Translation memory',
        description: `Translation memory will suggest sentences that will have already been 
translated in your projects before.`,
        gitHubIssueLink: 'https://github.com/tolgee/server/pull/920',
        done: true,
      },
      {
        name: 'Automated/Machine translations',
        description: `Don't translate everything manually. With an automated translations feature, 
services like DeepL, Google Translate, or AWS translate will help by suggesting or 
translating your new keys automatically when enabled.`,
        gitHubIssueLink: 'https://github.com/tolgee/server/pull/920',
        done: true,
      },
      {
        name: 'Translating on production',
        description: `Currently, in-context localization works only when the application is in development mode which is cool, but we would like
         to enable users to translate directly in the deployed app by providing API key using the Tolgee Tools Chrome plugin.`,
        gitHubIssueLink: 'https://github.com/tolgee/tolgee-js/pull/1775',
        done: true,
      },
      {
        name: 'More export options',
        description: `More formats (json, xliff) and export options like filtering or structuring will be provided, so exports will be more versatile.`,
        done: true,
      },
    ],
  },
  '2022/Q2-Q3': {
    active: false,
    future: false,
    items: [
      {
        name: 'Project Dashboard',
        description: `To see detailed statistics for the project and for each language.`,
        gitHubIssueLink: 'https://github.com/tolgee/server/issues/915',
        done: true,
      },
      {
        name: 'Translation history',
        description: `Enable users to see, how translation was edited in the past.`,
        gitHubIssueLink: 'https://github.com/tolgee/server/issues/1001',
        done: true,
      },
      {
        name: 'Translation permissions limited by language',
        description: `Add an option specifying a particular language a user can translate to.`,
        gitHubIssueLink: 'https://github.com/tolgee/server/pull/991',
        done: true,
      },
      {
        name: 'Billing on Tolgee Cloud',
        description: `To generate some profit from providing this great localization tool, we need to
enable our users to pay for our services. To do so, we have to implement backend services and UI to bill for our services.
If you are self-hosting Tolgee, don't worry. Tolgee stays free for you.`,
        done: true,
      },
    ],
  },
  '2022/Q4': {
    active: false,
    future: false,
    items: [
      {
        name: 'CLI',
        description: `Command Line Interface will help users with extracting localization
data from the Tolgee platform, analyzing code, looking for new keys,
and extracting data in specific formats. Everything mentioned is
customizable and flexible!`,
        done: true,
      },

      {
        name: 'Namespaces in Tolgee JS integrations',
        description: `Enable localization data export to be split to multiple files not
          only by the language but also by their namespace.`,
        done: true,
      },

      {
        name: 'New Core of Tolgee JS',
        description: `The new @tolgee/core package will provide refactored core of all js
integrations and cleaner API with enhanced customization reduced
bundle size and new features.`,
        done: true,
      },
    ],
  },
} as Record<string, PeriodData>;

const passedPeriods = Object.entries(roadmapData)
  .filter((i) => !i[1].active && !i[1].future)
  .reduce((acc, [name, data]) => ({ ...acc, [name]: data }), {}) as Record<
  string,
  PeriodData
>;

const activePeriods = Object.entries(roadmapData)
  .filter((i) => i[1].active)
  .reduce((acc, [name, data]) => ({ ...acc, [name]: data }), {}) as Record<
  string,
  PeriodData
>;

const futurePeriods = Object.entries(roadmapData)
  .filter((i) => i[1].future)
  .reduce((acc, [name, data]) => ({ ...acc, [name]: data }), {}) as Record<
  string,
  PeriodData
>;

export default function Roadmap() {
  return (
    <div>
      <DecoratedLayout title={`Roadmap`}>
        <PageHeader className="mb-[220px]">
          <PageHeaderSubtitle h1>Roadmap</PageHeaderSubtitle>
          <PageHeaderTitle active>We are on it.</PageHeaderTitle>
          <Head>
            <meta
              name="description"
              content="Roadmap of Tolgee localization tool. Learn what we have done so far and what new features we plan for the next year ahead."
            />
          </Head>
        </PageHeader>
        <div className="container roadmap__container">
          <div className="roadmap__items-wrapper">
            {[activePeriods, futurePeriods, passedPeriods].map((periods, i) => (
              <React.Fragment key={i}>
                {periods == passedPeriods && (
                  <h2 className="roadmap-period__passed-divider">
                    What have we done so far...
                  </h2>
                )}
                {Object.entries(periods).map(([period, data], index) => (
                  <section key={index} className="roadmap-period__section">
                    <h2 className="roadmap-period__title">{period}</h2>
                    <div className={`roadmap-period__items`}>
                      {data.items.map((item, idx) => (
                        <div
                          key={idx}
                          className={`roadmap-item ${
                            item.done ? 'roadmap-item--done' : ''
                          }`}
                        >
                          <h3>
                            {item.name}
                            <GitHubLink
                              done={item.done}
                              link={item.gitHubIssueLink}
                            />
                          </h3>
                          {item.description &&
                            (Array.isArray(item.description)
                              ? item.description
                              : [item.description]
                            ).map((d, i) =>
                              typeof d === 'string' ? (
                                <p dangerouslySetInnerHTML={{ __html: d }} />
                              ) : (
                                <React.Fragment key={i}>{d}</React.Fragment>
                              )
                            )}
                        </div>
                      ))}
                    </div>
                  </section>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </DecoratedLayout>
    </div>
  );
}

const GitHubLink = (props: { link?: string; done: boolean }) => {
  return props.link && !props.done ? (
    <>
      {` `}
      <a href={props.link}>(GitHub link)</a>
    </>
  ) : null;
};
