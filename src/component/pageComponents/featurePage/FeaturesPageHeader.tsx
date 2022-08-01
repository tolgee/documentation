import React from "react"
import {PageHeaderTitle} from "../header/PageHeaderTitle";
import {PageHeader} from "../header/PageHeader";
import Link from "@docusaurus/Link";
import {useRouteMatch} from "react-router-dom";
import clsx from "clsx";

const sections = [
  {name: 'Dev tools', slug: 'dev-tools'},
  {name: 'Translation Assistance', slug: 'translation-assistance'},
  {
    name: 'Collaboration', slug: 'collaboration'
  }];

export const FeaturesPageHeader = (props: { title: string, title2: string }) => {
  const path = useRouteMatch();

  return <PageHeader>
    <PageHeaderTitle className="mt-3 text-2xl" active>{props.title}</PageHeaderTitle>
    {props.title2 && <PageHeaderTitle className="mt-2">{props.title2}</PageHeaderTitle>}
    <div className="flex gap-2 sm:gap-8 sm:text-xl mt-12">
      {sections.map((section) => {
          const link = `/features/${section.slug}`;
          const isActive = path.path == link;
          return <Link className={clsx(`text-home-text hover:no-underline`, isActive && 'border-0 border-b border-solid pb-1 text-primary')} key={section.slug}
                       to={`/features/${section.slug}`}>{section.name}</Link>;
        }
      )}
    </div>
  </PageHeader>
}
