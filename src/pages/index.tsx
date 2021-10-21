import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import { Features } from "../component/home/Features/Features";
import { Social } from "../component/home/Social/Social";
import { VideoPlaceholder } from "../component/VideoPlaceholder/VideoPlaceholder";
import { RoboMouse } from "../component/images/RoboMouse";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const [animatedMouseLeft, setAnimatedMouseLeft] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const scroll = window.scrollY;
      const height = window.innerHeight;
      const newLeft = Math.min(((scroll / height) * 100) / 2, 50);
      if (Math.abs(animatedMouseLeft - newLeft) > 5) {
        setAnimatedMouseLeft(newLeft);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        <main className="home__main">
          <div className="home__animated-mouse-and-video-wrapper">
            <div
              className="home__animated-mouse"
              style={{ left: `${animatedMouseLeft}%` }}
            >
              <RoboMouse />
            </div>
            <div className="home__video-placeholder-wrapper">
              <VideoPlaceholder
                src="/intro.mp4"
                placeholderSrc="/img/video-placeholder.png"
              />
            </div>
          </div>
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
