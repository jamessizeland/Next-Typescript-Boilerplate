import React from 'react';
import Layout from '../components/Layouts';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Layout title="Login | Next.js">
      <div className={'container'}>
        <p>Login</p>
      </div>
    </Layout>
  );
};

export default Home;
