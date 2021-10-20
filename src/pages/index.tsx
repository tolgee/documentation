import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import { Features } from "../component/home/Features/Features";
import { Social } from "../component/home/Social/Social";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <div className="dark-mode-disabled">
      <Layout
        title={`All in One localization for your project`}
        description="Localization tool which makes the localization process simple. Easy to integrate to React, Angular and other applications."
      >
        <div className="header__wrapper">
          <header className={clsx("hero hero--primary header")}>
            <div className={"header__container container"}>
              <div
                className="header__content"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div>
                  <h1 className="hero__title">
                    {
                      // @ts-ignore
                      siteConfig.title
                    }
                  </h1>
                  <p className="hero__subtitle">
                    All in One localization for your project
                  </p>
                  <div className={styles.buttons}>
                    <Link
                      className={clsx(
                        "button button--outline button--lg",
                        styles.getStarted
                      )}
                      to={useBaseUrl("docs/")}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
        <main>
          <Features />
          <section>
            <Social />
          </section>
        </main>
      </Layout>
    </div>
  );
}

export default Home;
