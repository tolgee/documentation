import {RoboMouse} from "../images/RoboMouse";
import React from "react";
import {GradientText} from "../GradientText";

export const PageHeader = (props: {
  title: string,
  title2?: string
}) => {
  return <header className="header mt-[220px] flex flex-col items-center justify-center mx-4">
    <div className="flex md:ml-[-300px] ml-[-120px]">
      <RoboMouse className="w-44 w-[151px]"/>
      <img className="w-48 ml-3" src="/img/swingArrow.svg"/>
    </div>
    <h1 className="header__title--active mt-3"><GradientText>{props.title}</GradientText></h1>
    {props.title2 && <h1 className="header__title mt-2">{props.title2}</h1>}
    <a className="button--primary mt-[115px]" href="https://app.tolgee.io">I want it</a>
    <span className="text-[20px] pt-[34px] text-home-text">Open-source. Transparent.</span>
  </header>
}
