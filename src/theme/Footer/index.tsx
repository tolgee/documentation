import React, { type ReactNode } from 'react';

import { useThemeConfig } from '@docusaurus/theme-common';
import FooterLinks from '@theme/Footer/Links';
import FooterLogo from '@theme/Footer/Logo';
import FooterCopyright from '@theme/Footer/Copyright';
import FooterLayout from '@theme/Footer/Layout';
import { useDarkMode } from '../../utils';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

function TechnologyIncubation() {
  const isDarkTheme = useDarkMode();
  return (
    <div className={styles.footerLogoSection}>
      <Link
        href="https://www.czechinvest.org/en?force"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={
            isDarkTheme
              ? '/img/technology-incubation-light.webp'
              : '/img/technology-incubation-dark.webp'
          }
          alt="CzechInvest Technology Incubation"
          className={styles.footerLogoImage}
        />
      </Link>
      <p className={styles.textDescription}>
        This project was implemented with funding from the national budget via
        the&nbsp;Ministry&nbsp;of&nbsp;Industry&nbsp;and&nbsp;Trade of
        the&nbsp;Czech&nbsp;Republic within
        the&nbsp;CzechInvest&nbsp;Technology&nbsp;Incubation programme.
      </p>
    </div>
  );
}

function Footer(): ReactNode {
  const { footer } = useThemeConfig();
  if (!footer) {
    return null;
  }
  const { copyright, links, logo, style } = footer;

  return (
    <FooterLayout
      style={style}
      links={links && links.length > 0 && <FooterLinks links={links} />}
      logo={
        <>
          <TechnologyIncubation />
          {logo && <FooterLogo logo={logo} />}
        </>
      }
      copyright={copyright && <FooterCopyright copyright={copyright} />}
    />
  );
}

export default React.memo(Footer);
