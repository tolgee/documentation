import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
    {
        title: 'In context localization',
        imageUrl: 'img/undraw_social_strategy_1wuq.svg',
        description: (
            <>
                Let your colleagues or translators edit the translation strings directly in the app you develop!
            </>
        ),
    },
    {
        title: 'Relieve developers of localization process',
        imageUrl: 'img/undraw_researching_22gp.svg',
        description: (
            <>
                Let translators modify translated texts without involving developer.
            </>
        ),
    },
    {
        title: 'Web application',
        imageUrl: 'img/undraw_segment_uwu1.svg',
        description: (
            <>
                Manage your localization string using simple web application!
            </>
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
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <header className={clsx('hero hero--primary', styles.heroBanner)}>
                <div className="container">
                    <div className="row">
                        <div className="col col--6">
                            <img src="img/undraw_connected_world_wuay.svg" alt="World" style={{height: "300px"}}/>
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
            </main>
        </Layout>
    );
}

export default Home;
