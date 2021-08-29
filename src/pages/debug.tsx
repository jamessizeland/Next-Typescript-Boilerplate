import React from 'react';
import Layout from '../components/Layouts';
import ReactJson from 'react-json-view';
import { useAppSelector } from '../store/hooks';

import type { NextPage } from 'next';
import type { RootState } from '../store/store';

const DebugPage: NextPage = () => {
  const globalState = useAppSelector((state: RootState) => state);
  return (
    <Layout title="Debug | Next.js">
      <div className={'container'}>
        <h1>Debugger</h1>
        <ReactJson src={globalState} />
      </div>
    </Layout>
  );
};

export default DebugPage;
