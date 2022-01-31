import { FC } from 'react';
import { data, ResumeData } from '../data';
import { Skills, VerySimpleMD } from './';
import styles from './content.module.scss';

export const Content: FC<ResumeData> = props => {
  return (
    <div className={styles.content}>
      {data.sections.map((section, i) => (
        <section key={i}>
          <header>{section.title}</header>

          <ul>
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
                      {item.description.map(line => (
                        <li>
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

      <div className="small-screen-only">
        <Skills {...props} />
      </div>
    </div>
  );
};
