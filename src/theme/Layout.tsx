import React from "react";
import OriginalLayout from "@theme-original/Layout";

import { CookieConsent } from "../component/cookieConsent/CookieConsent";
import { LayoutContent } from "./LayoutContent";

export default function Layout(props) {
  return (
    <>
      <OriginalLayout {...props}>
        <LayoutContent>{props.children}</LayoutContent>
      </OriginalLayout>
      <CookieConsent />
    </>
  );
}
