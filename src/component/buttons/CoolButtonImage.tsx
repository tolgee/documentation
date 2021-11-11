import React, { FC } from "react";
import "./CoolButtonImage.css";

export const CoolButtonImage: FC<{}> = ({ children }) => (
  <div className="cool-button__image">{children}</div>
);
