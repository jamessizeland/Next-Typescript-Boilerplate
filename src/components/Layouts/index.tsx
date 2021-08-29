import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';

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
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 lg:container px-4 py-6 mx-auto md:px-6 md:py-12">
        {children}
      </main>
      <Footer />
    </div>
  </>
);

export default Layout;
