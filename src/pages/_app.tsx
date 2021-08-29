/*
 * _App is the pattern used by all of the pages of this web app.  Pages will be inserted into the Component element.
 */

import React from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import Layout from '../components/Layouts';
import 'tailwindcss/tailwind.css';

import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  // Use the layout defined at page level, if available
  // const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <React.StrictMode>
      <Head>
        <title>Next App</title>
        <meta
          name="description"
          content="Built from jsizeland/Next-Typescript-Boilerplate"
        />
        <link rel="icon" href="/longtail.png" />
      </Head>
      <Provider store={store}>
        <Layout title={'Next.js'}>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </React.StrictMode>
  );
};

export default MyApp;
