import React from 'react';
import Layout from '../components/Layouts';
import LoginForm from '../components/LoginForm';

import type { NextPage } from 'next';
// import { UserActions } from '~/redux/user/user.reducer';

const LoginPage: NextPage = () => {
  return (
    <Layout title="Login | Next.js">
      <div className={'container'}>
        <h1>Login</h1>
        <LoginForm />
      </div>
    </Layout>
  );
};

export default LoginPage;
