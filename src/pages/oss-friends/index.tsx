import React from 'react';
import Head from '@docusaurus/Head';
import './oss-friends.css';
import { data } from './data.json';

import DecoratedLayout from '../../theme/DecoratedLayout';
import { PageHeaderSubtitle } from '../../component/pageComponents/header/PageHeaderSubtitle';
import { PageHeaderTitle } from '../../component/pageComponents/header/PageHeaderTitle';

export default function OssFriends() {
  return (
    <DecoratedLayout
      title="Oss friends"
      description="We are proud to promote open-source software from our friends who are just as passionate about open source as we are."
    >
      <PageHeader className="mb-[100px] md:mb-[220px]">
        <PageHeaderTitle active h1>
          Our OSS friends
        </PageHeaderTitle>
        <PageHeaderSubtitle className="oss-friends--subtitle">
          We love open source and so should you, below you can find a list of
          our friends who are just as passionate about open source as we are.
        </PageHeaderSubtitle>
      </PageHeader>
      <div className="oss-friends--content">
        {data
          .filter(({ name }) => name !== 'Tolgee')
          .map(({ name, description, href }, i) => (
            <div key={i} className="oss-friends--friend">
              <a href={href}>
                <h3>{name}</h3>
              </a>
              <div>{description}</div>
              <div className="oss-friends--friend-learn-more">
                <a href={href}>Learn more</a>
              </div>
            </div>
          ))}
      </div>
    </DecoratedLayout>
  );
}
