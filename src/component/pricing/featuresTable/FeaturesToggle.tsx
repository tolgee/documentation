import React from 'react';

type Props = {
  hidden: boolean;
  onToggle: () => void;
};

export const FeaturesToggle = ({ hidden, onToggle }: Props) => {
  return (
    <div className="pricing__features-toggle">
      <div
        role="button"
        className="pricing__features-toggle--button"
        onClick={() => onToggle()}
      >
        {hidden ? 'Detailed plan comparison' : 'Hide plans details'}
      </div>
    </div>
  );
};
