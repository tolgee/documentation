import { CoolButton } from '../../buttons/CoolButton';
import Link from '@docusaurus/Link';
import { CoolButtonText } from '../../buttons/CoolButtonText';
import { CoolButtonImage } from '../../buttons/CoolButtonImage';
import React from 'react';

export const ReactDocsCoolButton = () => (
  <CoolButton component={Link} to="/docs/sdk/integrations/react/installation">
    <CoolButtonText>Tolgee for React Docs</CoolButtonText>
    <CoolButtonImage>📖</CoolButtonImage>
  </CoolButton>
);
