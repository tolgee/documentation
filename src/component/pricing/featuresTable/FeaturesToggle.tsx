import React from 'react';

type Props = {
  hidden: boolean;
  onToggle: () => void;
  openTitle: string;
};

export const FeaturesToggle = ({ hidden, onToggle, openTitle }: Props) => {
  return (
    <div className="pricing__features-toggle">
      <div
        role="button"
        className="pricing__features-toggle--button"
        onClick={() => onToggle()}
      >
        {hidden ? openTitle : 'Hide plan details'}
      </div>
    </div>
  );
};
