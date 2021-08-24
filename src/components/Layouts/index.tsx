import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from '../Header';

type Props = {
  children: ReactNode;
  title?: string;
};

const Layout = ({
  children,
  title = 'TypeScript Next.js Example',
}: Props): JSX.Element => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <div className="container">{children}</div>
    <footer className="banner">
      <span>
        <p>This is a footer</p>
      </span>
    </footer>
  </>
);

export default Layout;
