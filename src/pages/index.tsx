import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import {T} from "../component/tolgee";

const features = [
    {
        title: <T>In context localization</T>,
        imageUrl: 'img/undraw_click.svg',
        description: (
            <T>
                Let your colleagues or translators edit translation strings directly in the App you develop!
            </T>
        ),
    },
    {
        title: <T>Relieve developers of localization process</T>,
        imageUrl: 'img/undraw_freedom.svg',
        description: (
            <T>
                Let translators modify translated texts without involving developer.
            </T>
        ),
    },
    {
        title: <T>Web application</T>,
        imageUrl: 'img/undraw_web_app.svg',
        description: (
            <T>
                Manage your localization strings using simple web application!
            </T>
        ),
    },
];

function Feature({imageUrl, title, description}) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div className={clsx('col col--4', styles.feature)}>
            {imgUrl && (
                <div className="text--center">
                    <img className={styles.featureImage} src={imgUrl} alt={title}/>
                </div>
            )}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

function Home() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    console.log(siteConfig);
    // noinspection HtmlUnknownTarget
    return (
        <Layout
            title={`Localization tool for efficiency`}
            description="Simple localization framework, which is easy to integrate to React, Angular and other applications.">

            <header className={clsx('hero hero--primary header', styles.heroBanner)}>
                <div className="container">
                    <div className="row">
                        <div className="col col--6 hero__image-wrapper">
                            <img src="img/cheese_flags.svg" alt="Cheese with flags" className="hero__image"></img>
                        </div>
                        <div className="col col--6" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <div>
                                <h1 className="hero__title">{siteConfig.title}</h1>
                                <p className="hero__subtitle">{siteConfig.tagline}</p>
                                <div className={styles.buttons}>
                                    <Link
                                        className={clsx(
                                            'button button--outline button--lg',
                                            styles.getStarted,
                                        )}
                                        to={useBaseUrl('docs/')}>
                                        Get Started
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                {features && features.length > 0 && (
                    <section className={styles.features}>
                        <div className="container">
                            <div className="row">
                                {features.map((props, idx) => (
                                    <Feature key={idx} {...props} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}
                <section className="hero">
                    <div className="container">
                        <div className="row">
                            <div className="col col--12" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                                <div>
                                    <h1 className="hero__title">It is Open Source!</h1>
                                    <p className="hero__subtitle">Yes, Tolgee is free to use and it's very simple to deploy it locally or
                                        on your private infrastructure.
                                    </p>
                                    <Link
                                        to={useBaseUrl('docs/server_and_web_app/self_hosting/running_with_docker')}>
                                        Let's get started!
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}

export default Home;
