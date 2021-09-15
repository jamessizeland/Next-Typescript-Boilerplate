import React from 'react';
// import Head from 'next/head';
// import Image from 'next/image';
import Banner from '../components/Banner';

import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-12">
      <Banner />
      <h2 className="p-3 font-bold bg-yellow-300 md:text-2xl">Home</h2>
    </div>
  );
};

export default HomePage;
