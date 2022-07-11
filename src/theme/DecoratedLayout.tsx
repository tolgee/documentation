import React, {useEffect, useState} from "react";

import {CookieConsent} from "../component/cookieConsent/CookieConsent";
import Layout from "./Layout";
import clsx from "clsx";

export default function DecoratedLayout(props) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const scrollListener = () => {
      setScrolled(document.body.parentElement.scrollTop > 100)
    }

    scrollListener();

    document.addEventListener("scroll", scrollListener)
    return () => {
      document.removeEventListener("scroll", scrollListener)
    };
  }, []);

  const scrolledClass = scrolled ? "page-with-decoration--scrolled" : "page-with-decoration--not-scrolled"

  return (
    <>
      <Layout {...props}
              wrapperClassName="page-with-decoration--content"
              wholePageWrapperClassName={
                clsx(
                  "page-with-decoration", scrolledClass
                )
              }>
        <div className="page-with-decoration--content-inner">
          {props.children}
        </div>
      </Layout>
      <CookieConsent/>
    </>
  );
}
