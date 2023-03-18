import { FC, useRef } from 'react';

import { Content, Header, Sidebar } from '.';
import { usePrintEvent } from '../hooks';
import { ResumeData } from '../data';
import { possess } from '../utils/possess';
import styles from './resume.module.scss';

export function download_pdf(name: string) {
  const pname = possess(name);
  const anchor = document.createElement('a');
  anchor.style.visibility = 'hidden';
  anchor.href = `/${pname} Résumé.pdf`;
  anchor.download = `${pname} Résumé.pdf`;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}

export const Resume: FC<ResumeData> = (props) => {
  const info_ref = useRef<HTMLDivElement>(null);

  usePrintEvent(() => download_pdf(props.about.name));

  return (
    <main className={styles.main}>
      <Header info_ref={info_ref} {...props} />
      <Sidebar info_ref={info_ref} {...props} />
      <Content {...props} />
    </main>
  );
};
