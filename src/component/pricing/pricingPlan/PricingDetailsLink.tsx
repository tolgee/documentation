import React from 'react';
import { QuestionId } from '../questions';

type Props = {
  children: React.ReactNode;
  item?: QuestionId;
};

export const PricingDetailsLink = ({ children, item }: Props) => {
  return (
    <a
      href="#pricing-details"
      className="pricing__with-hint"
      onClick={(e) => {
        e.preventDefault();
        const hash = item ? `pricing-question-${item}` : 'pricing-details';
        window.location.hash = hash;
        document
          .querySelector('#pricing-details')
          .scrollIntoView({ behavior: 'smooth' });
      }}
    >
      {children}
    </a>
  );
};
