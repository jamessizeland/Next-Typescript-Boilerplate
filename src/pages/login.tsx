import React from 'react';
import Layout from '../components/Layouts';

import type { NextPage } from 'next';

const LoginPage: NextPage = () => {
  return (
    <Layout title="Login | Next.js">
      <div className={'container'}>
        <p>Login</p>
      </div>
    </Layout>
  );
};

export default LoginPage;
