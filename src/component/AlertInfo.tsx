import React from 'react';
import { Alert } from '@mui/material';
import { Info } from '@mui/icons-material';

export const AlertInfo: React.FC = ({ children }) => {
  return (
    <Alert color="info" icon={<Info />}>
      {children}
    </Alert>
  );
};
