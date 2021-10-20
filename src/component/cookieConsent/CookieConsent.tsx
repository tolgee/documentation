import React from "react";
import RCC from "react-cookie-consent";
import Link from "@docusaurus/Link";
import "./CookieConsent.css";

export const CookieConsent = () => (
  <RCC
    buttonClasses="cookie-consent__button"
    containerClasses="cookie-consent__container"
    contentClasses="cookie-consent__content"
    buttonWrapperClasses="cookie-consent__button-wrapper"
    disableStyles
  >
    This website uses cookies to enhance the user experience. Check our{" "}
    <Link to="/docs/terms_and_conditions/cookie_policy">Cookie Policy.</Link>
  </RCC>
);
