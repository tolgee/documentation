import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {RedocStandalone} from 'redoc';

export default function ApiReference() {
    const {siteConfig} = useDocusaurusContext();
    const options = {
        theme: {
            typography: {
                fontSize: 'var(--ifm-font-size-base)',
                lineHeight: 'var(--ifm-line-height-base)',
                fontFamily: 'var(--ifm-font-family-base)',
                headings: {
                    fontFamily: 'var(--ifm-font-family-base)',
                    fontWeight: 'var(--ifm-heading-font-weight)'
                },
                code: {
                    lineHeight: 'var(--ifm-pre-line-height)',
                    fontFamily: 'var(--ifm-font-family-monospace)'
                }
            },
            colors: {
                primary: {main: "#6d244c"},

            }
        }
    };
    return (
        <Layout>
            <main>
                <RedocStandalone spec={siteConfig.customFields.apiSpec} options={options}/>
            </main>
        </Layout>
    );
}
