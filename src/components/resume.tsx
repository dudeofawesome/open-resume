import { FC, useRef } from 'react';

import { Content, Header, Sidebar } from './';
import { usePrintEvent } from '../hooks';
import { ResumeData } from '../data';
import styles from '../styles/Home.module.scss';

export const Resume: FC<ResumeData> = props => {
  const info_ref = useRef<HTMLDivElement>(null);

  usePrintEvent(() => {
    const iframe = document.createElement('iframe');
    iframe.style.visibility = 'hidden';
    iframe.src = `/Louis Orleans' Résumé.pdf`;
    document.body.appendChild(iframe);

    function load() {
      iframe.contentWindow?.focus();
      iframe.contentWindow?.print();
      setTimeout(() => {
        iframe.removeEventListener('load', load);
        document.body.removeChild(iframe);
      }, 1000);
    }
    iframe.addEventListener('load', load);
  });

  return (
    <main className={styles.main}>
      <Header info_ref={info_ref} {...props} />
      <Sidebar info_ref={info_ref} {...props} />
      <Content {...props} />
    </main>
  );
};
