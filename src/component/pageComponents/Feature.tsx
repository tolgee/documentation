import React, {FC} from "react";
import {FeatureData} from "../home/Features";

export const Feature: FC<{ feature: FeatureData }> = (props) =>
  <a href={`/features/${props.feature.section}#${props.feature.id}`}
     className="flex flex-col rounded-[10px] bg-black/20 p-8 text-white hover:text-white hover:no-underline hover:bg-black/30 transition-all duration-200">
    <>
      <h3 className="font-[600] mb-4">{props.feature.title}</h3>
      <p>{props.feature.text}</p>
      <div className="flex flex-col items-center mt-auto">
        <img alt={props.feature.title} src={props.feature.imageUrl}/>
      </div>
    </>
  </a>;
