import { FC, useRef } from 'react';

import { Content, Header, Sidebar } from './';
import { ResumeData } from '../data';
import styles from '../styles/Home.module.scss';

export const Resume: FC<ResumeData> = props => {
  const info_ref = useRef<HTMLDivElement>(null);

  return (
    <main className={styles.main}>
      <Header info_ref={info_ref} {...props} />
      <Sidebar info_ref={info_ref} {...props} />
      <Content {...props} />
    </main>
  );
};
