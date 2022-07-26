import {RoboMouse} from "../../images/RoboMouse";
import React from "react";
import {PageHeader} from "./PageHeader";
import {PageHeaderTitle} from "./PageHeaderTitle";
import {IWantItButton} from "./IWantItButton";
import {OpenSourceTransparentText} from "./OpenSourceTransparentText";

export const EmphasisPageHeader = (props: {
  title: string,
  title2?: string
}) => {
  return <PageHeader>
    <div className="flex md:ml-[-300px] ml-[-120px]">
      <RoboMouse className="w-44 w-[151px]"/>
      <img className="w-48 ml-3" src="/img/swingArrow.svg"/>
    </div>
    <PageHeaderTitle className="mt-3" active>{props.title}</PageHeaderTitle>
    {props.title2 && <PageHeaderTitle className="mt-2">{props.title2}</PageHeaderTitle>}
    <IWantItButton/>
    <OpenSourceTransparentText/>
  </PageHeader>
}
