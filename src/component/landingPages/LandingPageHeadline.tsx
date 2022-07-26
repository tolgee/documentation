import React, {FC} from "react";
import {CSSProperties} from "styled-components";
import {TechnologyLove} from "../TechnologyLove";
import "./LandingPageHeadline.css";
import {PageHeader} from "../pageComponents/header/PageHeader";
import {PageHeaderTitle} from "../pageComponents/header/PageHeaderTitle";
import {IWantItButton} from "../pageComponents/header/IWantItButton";
import {OpenSourceTransparentText} from "../pageComponents/header/OpenSourceTransparentText";

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
}> = ({loveImage, badges, children, style}) => (
  <div>
    <PageHeader className="mb-[180px]">
      {loveImage.img}
      <PageHeaderTitle active className="mb-2">{children}</PageHeaderTitle>
      <div className="integration__badges">
        {badges.map((badge, key) => (
          <a key={key} href={badge.aHref} target="_blank">
            <img src={badge.imgSrc} alt={badge.name}/>
          </a>
        ))}
      </div>
      <IWantItButton/>
      <OpenSourceTransparentText/>
    </PageHeader>
  </div>
);
