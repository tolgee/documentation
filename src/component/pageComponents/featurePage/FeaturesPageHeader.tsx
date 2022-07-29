import React from "react"
import {PageHeaderTitle} from "../header/PageHeaderTitle";
import {PageHeader} from "../header/PageHeader";

export const FeaturesPageHeader = (props: { title: string, title2: string }) => {
  return <PageHeader>
    <PageHeaderTitle className="mt-3 text-2xl" active>{props.title}</PageHeaderTitle>
    {props.title2 && <PageHeaderTitle className="mt-2">{props.title2}</PageHeaderTitle>}
  </PageHeader>
}
