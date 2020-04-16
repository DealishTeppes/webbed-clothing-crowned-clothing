import React from 'react';

import SignIn from '../../components/signIn/SignIn';
import SignUp from '../../components/signUp/SignUp';

import './signInUp.styles.scss';

const SignInUp = () => {
  return (
    <div className='sign-in-up'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInUp;
