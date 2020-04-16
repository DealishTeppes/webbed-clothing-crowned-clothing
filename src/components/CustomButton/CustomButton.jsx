import React from 'react';

import './customButton.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...other }) => {
  return (
    <button
      className={`${isGoogleSignIn ? 'google-sign-in' : ''} ${
        inverted ? 'inverted' : ''
      } custom-button`}
      {...other}
    >
      {children}
    </button>
  );
};

export default CustomButton;
