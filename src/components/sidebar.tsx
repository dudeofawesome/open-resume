import { FC, ReactElement } from 'react';
import { Icon } from '@mdi/react';
import { mdiHome, mdiEmail, mdiPhone, mdiEarth, mdiGithub } from '@mdi/js';

import styles from './sidebar.module.scss';
import { ResumeData } from '../data';
import { Skills } from './';

export const Sidebar: FC<ResumeData> = props => {
  return (
    <>
      <div
        key={0}
        className={[styles.sidebar_contact, styles.sidebar_part].join(' ')}
      >
        {props.about.location && (
          <div className={styles.address}>
            <address>{props.about.location}</address>
            <Icon size={1} path={mdiHome} />
          </div>
        )}
        {props.about.email && (
          <div className={styles.email}>
            <a href={`mailto:${props.about.email}`}>{props.about.email}</a>
            <Icon size={1} path={mdiEmail} />
          </div>
        )}
        {props.about.phone && (
          <div className={styles.phone}>
            <a href="tel:+{{header.phone_clean}}">{props.about.phone}</a>
            <Icon size={1} path={mdiPhone} />
          </div>
        )}
        {props.about.website && (
          <div className={styles.url}>
            <a href={props.about.website.url}>{props.about.website.pretty}</a>
            <Icon size={1} path={mdiEarth} />
          </div>
        )}
        {props.about.profiles?.map((prof, i) => (
          <div key={i} className={styles.github}>
            <a href={prof.url}>{prof.username}</a>
            {networkToIcon(prof.network)}
          </div>
        ))}
      </div>
      <div
        key={1}
        className={[styles.sidebar_info, styles.sidebar_part].join(' ')}
      >
        <div className="large-screen-only">
          <Skills {...props} />
        </div>

        {/* <div className="footer">
          <div className="buttons">
            <button onclick="window.pdfPrint()" className="icon-only">
              <i className="mdi mdi-printer">printer</i>
            </button>
          </div>
          <div className="version">
            {{#header.github_username}}
            <a href="https://github.com/{{header.github_username}}/{{package.name}}/releases/tag/v{{& package.version}}"
              name="GitHub Résumé">v{{package.version}}</a>
            - {{date}}
            {{/header.github_username}}
            {{^header.github_username}}
            v{{package.version}} - {{date}}
            {{/header.github_username}}
          </div>
        </div> */}
      </div>
      <div
        key={2}
        className={[
          styles.sidebar_background,
          styles.sidebar_part,
          'large-screen-only',
        ].join(' ')}
      ></div>
    </>
  );
};

function networkToIcon(network: string): ReactElement {
  switch (network.toLowerCase()) {
    case 'github':
      return <Icon size={1} path={mdiGithub} />;
    default:
      throw new Error(`Unknown network ${network}`);
  }
}
