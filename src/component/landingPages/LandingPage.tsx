import React, { FC } from 'react';
import './LandingPage.css';
import DecoratedLayout from '../../theme/DecoratedLayout';

export const LandingPage: FC<{
  title: string;
}> = ({ title, children }) => (
  <>
    <div>
      <DecoratedLayout title={title}>{children}</DecoratedLayout>
    </div>
  </>
);
