import React from 'react';
import Link from '@docusaurus/Link';
import { CoolButton } from '../buttons/CoolButton';
import { CoolButtonText } from '../buttons/CoolButtonText';
import { CoolButtonImage } from '../buttons/CoolButtonImage';
import { GitHub } from '@mui/icons-material';
import DocsImage from '../images/Docs.svg';

type Props = {
  docs?: {
    label?: string;
    link: string;
  };
  githubRepo?: {
    explicitLink?: boolean;
    link: string;
  };
  primary?: boolean;
  additionalDocs?: {
    label: string;
    link: string;
    icon?: JSX.Element;
  };
  exampleApp?: string;
};

export const LandingPageActions: React.FC<Props> = ({
  docs,
  githubRepo,
  primary,
  additionalDocs,
  exampleApp: exampleApp,
}) => {
  return (
    <>
      {additionalDocs && (
        <CoolButton component={Link} to={additionalDocs.link} primary={primary}>
          <CoolButtonText>{additionalDocs.label}</CoolButtonText>
          <CoolButtonImage>
            {additionalDocs.icon ? (
              <div className="h-5 w-5 -mt-1">{additionalDocs.icon}</div>
            ) : (
              <DocsImage className="max-h-5" />
            )}
          </CoolButtonImage>
        </CoolButton>
      )}
      {docs && (
        <CoolButton component={Link} to={docs.link} primary={primary}>
          <CoolButtonText>{docs.label || 'Docs'}</CoolButtonText>
          <CoolButtonImage>
            <DocsImage className="max-h-5" />
          </CoolButtonImage>
        </CoolButton>
      )}
      {githubRepo && (
        <CoolButton
          component={Link}
          to={
            githubRepo.explicitLink
              ? githubRepo.link
              : `https://github.com/tolgee/tolgee-js/tree/main/packages/${githubRepo.link}`
          }
          primary={primary}
        >
          <CoolButtonText>GitHub Repository</CoolButtonText>
          <CoolButtonImage>
            <GitHub />
          </CoolButtonImage>
        </CoolButton>
      )}
      {exampleApp && (
        <CoolButton
          component={Link}
          to={`https://github.com/tolgee/${exampleApp}`}
          primary={primary}
        >
          <CoolButtonText>Example App</CoolButtonText>
        </CoolButton>
      )}
    </>
  );
};
