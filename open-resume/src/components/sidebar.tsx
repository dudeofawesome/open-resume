import { FC, ReactElement, RefObject } from 'react';
import { Icon } from '@mdi/react';
import {
  mdiHome,
  mdiEmail,
  mdiPhone,
  mdiEarth,
  mdiGithub,
  mdiDownload,
} from '@mdi/js';

import styles from './sidebar.module.scss';
import { ResumeData } from '../data';
import { Skills, download_pdf } from '.';

function networkToIcon(network: string): ReactElement {
  switch (network.toLowerCase()) {
    case 'github':
      return <Icon size={1} path={mdiGithub} />;
    default:
      throw new Error(`Unknown network ${network}`);
  }
}

export const Sidebar: FC<
  ResumeData & { info_ref: RefObject<HTMLDivElement> }
> = (props) => {
  const gh_prof = props.about.profiles?.find((p) => p.network === 'github');
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
          <button
            onClick={() => download_pdf()}
            className={[styles.icon_button, 'no-print'].join(' ')}
            style={{ marginBottom: '0.5rem', marginRight: '0.25rem' }}
          >
            <Icon size={1} path={mdiDownload} />
          </button>
          <div className={styles.version}>
            {gh_prof != null ? (
              <>
                <a
                  href={`${gh_prof.url}/${props.package.name}/releases/tag/v${props.package.version}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  v{props.package.version}
                </a>
              </>
            ) : (
              `v${props.package.version}`
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
