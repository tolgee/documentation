import React from "react";

import {CookieConsent} from "../component/cookieConsent/CookieConsent";
import {LayoutContent} from "./LayoutContent";
import {PageMetadata, ThemeClassNames, useKeyboardNavigation} from "@docusaurus/theme-common";
import LayoutProviders from "@theme/LayoutProviders";
import SkipToContent from "@theme/SkipToContent";
import AnnouncementBar from "@theme/AnnouncementBar";
import Navbar from "@theme/Navbar";
import clsx from "clsx";
import ErrorBoundary from "@docusaurus/ErrorBoundary";
import ErrorPageContent from "@theme/ErrorPageContent";
import Footer from "@theme/Footer";

export default function Layout({
                                 children,
                                 noFooter,
                                 wrapperClassName,
                                 // Not really layout-related, but kept for convenience/retro-compatibility
                                 title,
                                 description,
                                 wholePageWrapperClassName
                               }
) {

  useKeyboardNavigation();

  return (
    <div className={clsx(wholePageWrapperClassName)}>
      <LayoutProviders>
        <PageMetadata title={title} description={description}/>

        <SkipToContent/>

        <AnnouncementBar/>

        <Navbar/>

        <div className={clsx(ThemeClassNames.wrapper.main, wrapperClassName)}>
          <ErrorBoundary fallback={(params) => <ErrorPageContent {...params} />}>
            <LayoutContent>{children}</LayoutContent>
          </ErrorBoundary>
        </div>

        {!noFooter && <Footer/>}
      </LayoutProviders>
      <CookieConsent/>
    </div>
  );
}
