import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
// import Image from 'next/image';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next App</title>
        <meta
          name="description"
          content="Built from jsizeland/Next-Typescript-Boilerplate"
        />
        <link rel="icon" href="/longtail.png" />
      </Head>
      <h1>Hello World</h1>
    </div>
  );
};

export default Home;
