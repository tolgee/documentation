import React from "react";
import {FC} from "react";
import clsx from "clsx";

export const PageHeader: FC<{ className?: string }>
  = (props) =>
  <header className={clsx("header mt-[220px] flex flex-col items-center justify-center mx-4", props.className)}> {props.children}</header>
