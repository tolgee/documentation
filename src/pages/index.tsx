import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css";
import { Features } from "../component/home/Features/Features";
import { Social } from "../component/home/Social/Social";
import { VideoPlaceholder } from "../component/VideoPlaceholder/VideoPlaceholder";
import { RoboMouse } from "../component/images/RoboMouse";
import Head from "@docusaurus/Head";
import baseSchema from "../info/organization";

const hero1000 = "/img/hero-1000.png";
const hero2000 = "/img/hero-2000.png";
const hero3000 = "/img/hero-3000.png";

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
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="home__container">
      <Head>
        <script type="application/ld+json">{JSON.stringify(baseSchema)}</script>
      </Head>
      <Layout
        title={baseSchema.slogan}
        description={baseSchema.description}
        image={baseSchema.image}
      >
        <div className="header__wrapper">
          <header className={clsx("hero hero--primary header")}>
            <img
              srcSet={`
                ${hero1000} 1000w,
                ${hero2000} 2000w,
                ${hero3000} 3000w,
              `}
              className="header__image"
              alt="Tolgee city"
            />
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
                      to={"https://app.tolgee.io/sign_up"}
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
              style={{ right: `${animatedMouseLeft}%` }}
            >
              <RoboMouse />
            </div>
            <div className="home__video-and-social-wrapper container">
              <div className="home__video-wrapper">
                <VideoPlaceholder src="/intro.mp4" />
              </div>
              <Social />
            </div>
          </div>
          <Features />
        </main>
      </Layout>
    </div>
  );
}

export default Home;
