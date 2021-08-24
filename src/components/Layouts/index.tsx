import React, { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';

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
    <div className="container">
      <header>
        <div className="header-content">
          <Link href="/">
            <a className="logo">
              <img src="/longtail.png" />
            </a>
          </Link>
          <h1>
            <span className="light">Next.js TypeScript Boilerplate</span>
          </h1>
        </div>
      </header>
      {children}
    </div>
    <footer className="banner">
      <span>
        <p>This is a footer</p>
      </span>
    </footer>
  </>
);

export default Layout;
