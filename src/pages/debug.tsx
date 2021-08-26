import React from 'react';
import Layout from '../components/Layouts';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Layout title="Debug | Next.js">
      <div className={'container'}>
        <p>Debugger</p>
      </div>
    </Layout>
  );
};

export default Home;
