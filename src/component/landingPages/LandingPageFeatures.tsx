import React, { FC } from "react";
import "./LandingPageFeatures.css";

export const LandingPageFeatures: FC<{}> = ({ children }) => (
  <div className="integration__feature-section-background-wrapper">
    <section className="integration__feature-section container">
      {children}
    </section>
  </div>
);
