import { FC } from 'react';

import { ResumeData } from '../data';
import { possess } from '../utils/possess';

export const HeadData: FC<ResumeData> = (props) => {
  const title = `${possess(props.about.name)} Résumé`;

  return (
    <>
      {props.about.label != null && (
        <meta name="description" content={props.about.label} />
      )}
      <meta name="format-detection" content="telephone=no" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      {/* <link rel="manifest" href="manifest.json" /> */}

      <link rel="icon" href={props.about.image_url} />
      <meta name="theme-color" content={props.theme.colors.primary_muted} />

      <meta property="og:site_name" content={title} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="profile" />
      <meta property="og:image" content={props.about.image_url} />
      {props.about.label != null && (
        <meta property="og:description" content={props.about.label} />
      )}
    </>
  );
};
