import React, { FC } from "react";
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
    imgSrc: string;
  };
}> = ({ loveImage, badges, children }) => (
  <div className="integration__headline-background-wrapper">
    <div className="integration__headline container">
      <div className="integration__headline-left">
        <div className="integration__badges">
          {badges.map((badge, key) => (
            <a key={key} href={badge.aHref} target="_blank">
              <img src={badge.imgSrc} alt={badge.name} />
            </a>
          ))}
        </div>
        <h1>Tolgee for Svelte</h1>
      </div>
      <div className="integration__headline-right">
        <div className="integration__headline-image">
          <TechnologyLove
            technologyName="Svelte"
            technologyImgUrl="/img/technologies/logo-svelte.svg"
          />{" "}
        </div>
      </div>
    </div>
  </div>
);
