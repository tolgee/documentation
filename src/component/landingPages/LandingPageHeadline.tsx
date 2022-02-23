import React, { FC } from "react";
import { CSSProperties } from "styled-components";
import { TechnologyLove } from "../TechnologyLove";
import "./LandingPageHeadline.css";

export const LandingPageHeadline: FC<{
  badges: {
    name: string;
    imgSrc: string;
    aHref: string;
  }[];
  loveImage: {
    name: string;
    img: React.ReactNode;
  };
  style?: CSSProperties;
}> = ({ loveImage, badges, children, style }) => (
  <div className="integration__headline-background-wrapper" style={style}>
    <div className="integration__headline container">
      <div className="integration__headline-left">
        <div className="integration__badges">
          {badges.map((badge, key) => (
            <a key={key} href={badge.aHref} target="_blank">
              <img src={badge.imgSrc} alt={badge.name} />
            </a>
          ))}
        </div>
        <h1>{children}</h1>
      </div>
      <div className="integration__headline-right">
        <div className="integration__headline-image">
          <TechnologyLove technologyName={loveImage.name}>
            {loveImage.img}
          </TechnologyLove>
        </div>
      </div>
    </div>
  </div>
);
