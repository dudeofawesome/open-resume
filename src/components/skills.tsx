import { FC } from 'react';

import { ResumeData } from '../data';
import styles from './sidebar.module.scss';

export const Skills: FC<ResumeData & { className?: string }> = props => {
  return (
    <>
      {[
        { name: 'Skills / Tools', list: props.skills },
        { name: 'Languages', list: props.languages },
      ]
        .filter(s => s != null)
        .map((set, i) => (
          <section
            key={i}
            className={[styles.skills, props.className].join(' ')}
          >
            <header>{set.name}</header>
            <ul>
              {set.list?.map((skill, i) => {
                const is_string = typeof skill === 'string';
                const style = {
                  fontWeight: !is_string && skill.featured ? 'bold' : 'unset',
                };
                const name = is_string ? skill : skill.name;
                return (
                  <li key={i} style={style}>
                    {!is_string && skill.link ? (
                      <a href={skill.link}>{name}</a>
                    ) : (
                      <>{name}</>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      {props.education != null && (
        <section className={[styles.education, props.className].join(' ')}>
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
        </section>
      )}
    </>
  );
};
