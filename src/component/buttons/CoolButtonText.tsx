import React, { FC } from "react";
import "./CoolButtonText.css";

export const CoolButtonText: FC<{}> = ({ children }) => (
  <div className={"cool-button__text"}>{children}</div>
);
