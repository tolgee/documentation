import React, {FC} from "react";

export const Feature: FC<{ feature: any }> = (props) =>
  <a href={`/features/${props.feature.slug}`}
     className="flex flex-col rounded-[10px] bg-black/20 p-8 text-white hover:text-white hover:no-underline hover:bg-black/30 transition-all duration-200">
    <>
      <h3 className="font-[600] mb-4">{props.feature.title}</h3>
      <p>{props.feature.text}</p>
      <div className="flex flex-col items-center mt-auto">
        <img alt={props.feature.title} src={props.feature.imageUrl}/>
      </div>
    </>
  </a>;
