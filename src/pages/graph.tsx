import React from 'react';
import Layout from '../components/Layouts';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Layout title="Graph | Next.js">
      <div className={'container'}>
        <p>Graph</p>
      </div>
    </Layout>
  );
};

export default Home;
