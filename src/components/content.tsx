import { FC } from 'react';
import { ResumeData } from '../data';
import { Skills, VerySimpleMD } from './';
import styles from './content.module.scss';

export const Content: FC<ResumeData> = props => {
  return (
    <div className={styles.content}>
      {props.sections.map((section, i) => (
        <section key={i}>
          <header>{section.title}</header>

          <ul className={styles.section_list}>
            {section.items.map((item, i) => (
              <li key={i} className={styles.item}>
                <div className={styles.title_line}>
                  <div className={styles.title}>{item.title}</div>
                  <div className={styles.location_duration}>
                    {item.location} — {item.duration}
                  </div>
                </div>
                {item.description != null &&
                  (Array.isArray(item.description) ? (
                    <ul className={styles.description}>
                      {item.description.map((line, i) => (
                        <li key={i}>
                          <VerySimpleMD md={line} />
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className={styles.description}>
                      <VerySimpleMD md={item.description} />
                    </div>
                  ))}
              </li>
            ))}
          </ul>
        </section>
      ))}

      <Skills
        className={['small-screen-only', 'no-print'].join(' ')}
        {...props}
      />
    </div>
  );
};
