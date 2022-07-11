import React, {FC, ReactNode} from "react";
import {GradientText} from "../../GradientText";

export const TextColumnTitle: FC = props => <h2 className="text-3xl lg:text-[40px] lg:leading-[44px]"><GradientText>{props.children}</GradientText></h2>;

export const TextColumnText: FC = props => <p className="text-[16px] md:text-[20px]">{props.children}</p>;

export const TextColumn: FC = (props) => <div className="flex justify-center items-center flex-col">
  <div className="max-w-[475px]">
    {props.children}
  </div>
</div>;
