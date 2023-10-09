import React from 'react';
import { IWantItButton } from '../header/IWantItButton';

type Props = {
  label: string;
};

export const BottomSignUp = ({ label }: Props) => {
  return (
    <div className="flex justify-center mt-24">
      <IWantItButton className="flex justify-center items-center">
        {label}
      </IWantItButton>
    </div>
  );
};
