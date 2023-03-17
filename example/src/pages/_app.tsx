import type { AppProps } from 'next/app';
import React from 'react';

import '@dudeofawesome/open-resume/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
