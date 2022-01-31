import type { NextPage } from 'next';
import Head from 'next/head';

import { data } from '../data';
import { Resume } from '../components';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  const title = `${data.about.name} Résumé`;

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        {data.about.label != null && (
          <meta name="description" content={data.about.label} />
        )}
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        {/* <link rel="manifest" href="manifest.json" /> */}

        <link rel="icon" href="/public/assets/icon.svg" />
        <meta name="theme-color" content={data.theme.colors.primary_muted} />

        <meta property="og:site_name" content={title} />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content="/public/assets/icon.svg" />
        <meta property="og:url" content="https://resume.orleans.io" />
        {data.about.label != null && (
          <meta property="og:description" content={data.about.label} />
        )}
      </Head>

      <Resume {...data} />
    </div>
  );
};

export default Home;
