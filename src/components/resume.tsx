import { FC } from 'react';

import { Content, Header, Sidebar } from './';
import { ResumeData } from '../data';
import styles from '../styles/Home.module.scss';

export const Resume: FC<ResumeData> = props => {
  return (
    <main className={styles.main}>
      <Header {...props} />
      <Sidebar {...props} />
      <Content {...props} />
    </main>
  );
};
