import { FC, ReactElement, RefObject } from 'react';
import { Icon } from '@mdi/react';
import { mdiHome, mdiEmail, mdiPhone, mdiEarth, mdiGithub } from '@mdi/js';

import styles from './sidebar.module.scss';
import { data, ResumeData } from '../data';
import Package from '../../package.json';
import { Skills } from './';

export const Sidebar: FC<
  ResumeData & { info_ref: RefObject<HTMLDivElement> }
> = props => {
  const gh_prof = data.about.profiles?.find(p => p.network === 'github');
  const build_date = process.env.build_time?.split('T')[0] ?? 'Unknown Time';

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
            <a href={`tel:+${props.about.phone}`}>{props.about.phone}</a>
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
        ref={props.info_ref}
        className={[styles.sidebar_info, styles.sidebar_part].join(' ')}
      >
        <div className="large-screen-only">
          <Skills {...props} />
        </div>

        <div className={styles.footer}>
          {/* <div className="buttons">
            <button onclick="window.pdfPrint()" className="icon-only">
              <i className="mdi mdi-printer">printer</i>
            </button>
          </div> */}
          <div className={styles.version}>
            {gh_prof != null ? (
              <>
                <a
                  href={`${gh_prof.url}/${Package.name}/releases/tag/v${Package.version}`}
                >
                  v{Package.version}
                </a>
              </>
            ) : (
              `v${Package.version}`
            )}
            &nbsp;-&nbsp;{build_date}
          </div>
        </div>
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
