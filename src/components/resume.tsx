import { FC, useRef } from 'react';

import { Content, Header, Sidebar } from './';
import { usePrintEvent } from '../hooks';
import { ResumeData } from '../data';
import styles from '../styles/Home.module.scss';

export const Resume: FC<ResumeData> = props => {
  const info_ref = useRef<HTMLDivElement>(null);

  usePrintEvent(ev => {
    const anchor = document.createElement('a');
    anchor.style.visibility = 'hidden';
    anchor.href = `/Louis Orleans' Résumé.pdf`;
    anchor.download = `Louis Orleans' Résumé.pdf`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  });

  return (
    <main className={styles.main}>
      <Header info_ref={info_ref} {...props} />
      <Sidebar info_ref={info_ref} {...props} />
      <Content {...props} />
    </main>
  );
};
