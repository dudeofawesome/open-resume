import { FC } from 'react';
import { ResumeData } from '../data';
import styles from './header.module.scss';

export const Header: FC<ResumeData> = props => {
  return (
    <header className={styles.header}>
      <div className={styles.name} id="header">
        <div className={styles.name_container}>{props.about.name}</div>
      </div>

      <div className={[styles.description, 'large-screen-only'].join(' ')}>
        <span className={styles.summary}>{props.about.label}</span>
        &nbsp;&ndash;&nbsp;
        {props.about.summary}
      </div>
    </header>
  );
};
