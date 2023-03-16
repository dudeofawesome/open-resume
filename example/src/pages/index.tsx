import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Resume, HeadData, useCSSVars } from '@dudeofawesome/open-resume';

import { data } from '../data';

const Home: NextPage = () => {
  useCSSVars(data);

  return (
    <div style={{ padding: '0 2rem' }}>
      <Head>
        <HeadData {...data} />
      </Head>

      <Resume {...data} />
    </div>
  );
};

export default Home;
