import OriginalLayout from "@theme-original/Layout";
import React from "react";
import { CookieConsent } from "../component/cookieConsent/CookieConsent";

export default function Layout(props) {
  return (
    <>
      <OriginalLayout {...props} />
      <CookieConsent />
    </>
  );
}
