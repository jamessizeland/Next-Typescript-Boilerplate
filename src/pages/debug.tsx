import React from 'react';
import { useAppSelector } from '../store/hooks';

import type { NextPage } from 'next';
import type { RootState } from '../store/store';

const DebugPage: NextPage = () => {
  const globalState = useAppSelector((state: RootState) => state);
  return (
    <div className={'container'}>
      <h1>Debugger</h1>
      <p>{JSON.stringify(globalState)}</p>
    </div>
  );
};

export default DebugPage;
