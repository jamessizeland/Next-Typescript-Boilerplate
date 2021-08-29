import React from 'react';
import LoginForm from '../components/LoginForm';

import type { NextPage } from 'next';
// import { UserActions } from '~/redux/user/user.reducer';

const LoginPage: NextPage = () => {
  return (
    <div className={'container'}>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
