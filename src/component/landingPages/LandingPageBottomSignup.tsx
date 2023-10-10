import React from 'react';
import { IWantItButton } from '../pageComponents/header/IWantItButton';

type Props = {
  label: string;
};

export const LandingPageBottomSignUp = ({ label }: Props) => {
  return (
    <div className="flex justify-center pb-10 pt-10">
      <IWantItButton className="whitespace-nowrap">{label}</IWantItButton>
    </div>
  );
};
