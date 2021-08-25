import React from 'react';
// import Head from 'next/head';
// import Image from 'next/image';
import Layout from '../components/Layouts';
import styles from '../styles/Home.module.scss';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Layout title="Home | Next.js">
      <div className={styles.container}>
        <h1>Hello World</h1>
      </div>
    </Layout>
  );
};

export default Home;
