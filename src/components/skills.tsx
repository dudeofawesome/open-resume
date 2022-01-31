import { FC, ReactElement } from 'react';

import styles from './sidebar.module.scss';
import { ResumeData } from '../data';

export const Skills: FC<ResumeData> = props => {
  const sections: ReactElement[] = [];
  if (props.skills != null) {
    sections.push(
      <section className={styles.skills}>
        <header>Skills / Tools</header>
        <ul>
          {props.skills?.map((skill, i) => {
            const is_string = typeof skill === 'string';
            return (
              <li
                key={i}
                style={{
                  fontWeight: !is_string && skill.featured ? 'bold' : 'unset',
                }}
              >
                {is_string ? skill : skill.name}
              </li>
            );
          })}
        </ul>
      </section>,
    );
  }

  if (props.languages != null)
    sections.push(
      <section className={styles.skills}>
        <header>Languages</header>
        <ul>
          {props.languages?.map((lang, i) =>
            typeof lang === 'string' ? (
              <li key={i}>{lang}</li>
            ) : (
              <li
                key={i}
                style={{ fontWeight: lang.featured ? 'bold' : 'unset' }}
              >
                {lang.name}
              </li>
            ),
          )}
        </ul>
      </section>,
    );

  if (props.education != null)
    sections.push(
      <section className={styles.education}>
        <header>Education</header>
        <ul>
          {props.education?.map((ed, i) => (
            <li key={i}>
              <div className={styles.title}>{ed.name}</div>
              {ed.description != null && ed.duration != null ? (
                <div className={styles.description}>
                  {ed.description} ({ed.duration})
                </div>
              ) : ed.description != null ? (
                <div className={styles.description}>
                  {ed.description} ({ed.duration})
                </div>
              ) : (
                ed.duration != null && (
                  <div className={styles.description}>({ed.duration})</div>
                )
              )}
              {ed.location != null && (
                <div className={styles.location}>{ed.location}</div>
              )}
            </li>
          ))}
        </ul>
      </section>,
    );

  return <>{sections}</>;
};
