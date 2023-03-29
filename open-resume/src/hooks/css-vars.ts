import { useEffect } from 'react';

import { ResumeData } from '../data';

export function useCSSVars(data: ResumeData) {
  useEffect(() => {
    const style = document.documentElement.style;
    const c = data.theme.colors;
    const fs = data.theme.font?.sizes ?? {};

    style.setProperty('--color-primary', c.primary ?? '#d20000');
    style.setProperty('--color-primary-muted', c.primary_muted ?? '#920000');
    style.setProperty('--color-text', c.text ?? '#000');
    style.setProperty('--color-text-dim', c.text_dim ?? '#666');
    style.setProperty('--color-paper-background', c.paper_background ?? '#fff');
    style.setProperty('--color-background', c.background ?? '#181a1b');

    style.setProperty('--color-dark-text', c.dark_text ?? '#fff');
    style.setProperty('--color-dark-text-dim', c.dark_text_dim ?? '#d6d2cd');
    style.setProperty(
      '--color-dark-paper-background',
      c.dark_paper_background ?? '#323232',
    );
    style.setProperty(
      '--color-dark-background',
      c.dark_background ?? '#181a1b',
    );

    style.setProperty('--font-size-name', fs.name ?? '3rem');
    style.setProperty(
      '--font-size-section-header',
      fs.section_header ?? '1.1rem',
    );
    style.setProperty('--font-size-body', fs.body ?? '0.85rem');

    return () => {
      style.removeProperty('--color-primary');
      style.removeProperty('--color-primary-muted');
      style.removeProperty('--color-text');
      style.removeProperty('--color-text-dim');
      style.removeProperty('--color-paper-background');
      style.removeProperty('--color-background');
      style.removeProperty('--color-dark-text');
      style.removeProperty('--color-dark-text-dim');
      style.removeProperty('--color-dark-paper-background');
      style.removeProperty('--color-dark-background');
    };
  }, [data.theme.colors]);
}
