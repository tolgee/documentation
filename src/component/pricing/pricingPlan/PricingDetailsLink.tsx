import React from 'react';

export const PricingDetailsLink = ({ children }) => {
  return (
    <a
      href="#pricing-details"
      className="pricing__with-hint"
      onClick={(e) => {
        e.preventDefault();
        document
          .querySelector('#pricing-details')
          .scrollIntoView({ behavior: 'smooth' });
      }}
    >
      {children}
    </a>
  );
};
