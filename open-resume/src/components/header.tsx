import { FC, RefObject, useMemo, useRef } from 'react';

import { ResumeData } from '../data';
import { useMediaQuery, useScrollPos } from '../hooks';
import styles from './header.module.scss';

export const Header: FC<
  ResumeData & { info_ref: RefObject<HTMLDivElement> }
> = (props) => {
  const name_ref = useRef<HTMLDivElement>(null);

  const is_small_screen = useMediaQuery('screen and (max-width: 35rem)');
  const { y: scroll_y } = useScrollPos();

  const scroll_percent = Math.max(Math.min(scroll_y / 23, 1), 0);

  const scale = Math.cos(scroll_percent * Math.PI) / 4 + 0.75;

  const name = name_ref.current?.getBoundingClientRect();
  const info = props.info_ref.current?.getBoundingClientRect();
  const border_width = useMemo(
    () =>
      props.info_ref.current != null
        ? parseInt(
            window.getComputedStyle(props.info_ref.current).borderBottomWidth,
            10,
          )
        : 8,
    [props.info_ref],
  );

  const is_scrolled_down =
    (info?.bottom ?? 0) / 2 <= (name?.bottom ?? 0) - border_width * 0.75;

  return (
    <header
      className={[
        styles.header,
        is_small_screen && is_scrolled_down ? styles.small_header : '',
      ].join(' ')}
      style={{ transform: `scale3d(1, ${is_small_screen ? scale : 1}, 1)` }}
    >
      <div
        ref={name_ref}
        className={styles.name}
        style={{ transform: `scale3d(${is_small_screen ? scale : 1}, 1, 1)` }}
      >
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
