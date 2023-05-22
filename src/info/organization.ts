import { WithContext, Organization } from 'schema-dts';

const URL = 'https://tolgee.io';

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Brno-Královo Pole, Czech Republic',
    postalCode: '621 00',
    streetAddress: 'Purkyňova 649/127',
  },
  slogan: 'Painless localization',
  description:
    'Open-source localization platform developers enjoy working with. Set up in seconds & speed up the translation process. Sign up for free. No credit card required.',
  name: 'Tolgee',
  legalName: 'Tolgee s.r.o.',
  url: URL,
  logo: `${URL}/img/tolgeeLogo.svg`,
  image: `${URL}/img/hero-1000.png`,
  foundingDate: '2021',
  sameAs: [
    'https://twitter.com/tolgee_i18n',
    'https://www.linkedin.com/company/tolgee/',
  ],
} as const;

// ensure that it's correct type
<WithContext<Organization>>organization;

export default organization;
