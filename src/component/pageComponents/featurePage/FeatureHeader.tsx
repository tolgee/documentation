import React from "react";
import {GradientText} from "../../GradientText";

export const FeatureHeader = (props: {
  title: string,
  id: string
}) => {
  return <header className="header mt-[220px] flex flex-col items-center justify-center mx-4">
    <h2 className="header__title--active mt-3" id={props.id}><GradientText>{props.title}</GradientText></h2>
  </header>
}
