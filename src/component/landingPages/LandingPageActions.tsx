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
  githubRepo?: string;
  primary?: boolean;
  additionalDocs?: {
    label: string;
    link: string;
  };
};

export const LandingPageActions: React.FC<Props> = ({
  docs,
  githubRepo,
  primary,
  additionalDocs,
}) => {
  return (
    <>
      {additionalDocs && (
        <CoolButton component={Link} to={additionalDocs.link} primary={primary}>
          <CoolButtonText>{additionalDocs.label}</CoolButtonText>
          <CoolButtonImage>
            <DocsImage className="max-h-5" />
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
          to={`https://github.com/tolgee/${githubRepo}`}
          primary={primary}
        >
          <CoolButtonText>Example App</CoolButtonText>
          <CoolButtonImage>
            <GitHub />
          </CoolButtonImage>
        </CoolButton>
      )}
    </>
  );
};
