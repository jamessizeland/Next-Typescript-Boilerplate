import React from 'react';
import Layout from '../components/Layouts';
import { RootState } from '../redux/store';
import { connect } from 'react-redux';
import ReactJson from 'react-json-view';

import type { NextPage } from 'next';

const DebugPage: NextPage = (props) => {
  return (
    <Layout title="Debug | Next.js">
      <div className={'container'}>
        <h1>Debugger</h1>
        <ReactJson src={props} />
      </div>
    </Layout>
  );
};

const mapStateToProps = (state: RootState) => ({
  ...state,
});

export default connect(mapStateToProps)(DebugPage);
