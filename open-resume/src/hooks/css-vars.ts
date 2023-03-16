import { useEffect } from 'react';

import { ResumeData } from '../data';

export function useCSSVars(data: ResumeData) {
  useEffect(() => {
    const style = document.documentElement.style;
    const c = data.theme.colors;
    if (c.primary != null) style.setProperty('--color-primary', c.primary);
    if (c.primary_muted != null)
      style.setProperty('--color-primary-muted', c.primary_muted);
    if (c.text != null) style.setProperty('--color-text', c.text);
    if (c.text_dim != null) style.setProperty('--color-text-dim', c.text_dim);
    if (c.paper_background != null)
      style.setProperty('--color-paper-background', c.paper_background);
    if (c.background != null)
      style.setProperty('--color-background', c.background);

    if (c.dark_text != null)
      style.setProperty('--color-dark-text', c.dark_text);
    if (c.dark_text_dim != null)
      style.setProperty('--color-dark-text-dim', c.dark_text_dim);
    if (c.dark_paper_background != null)
      style.setProperty(
        '--color-dark-paper-background',
        c.dark_paper_background,
      );
    if (c.dark_background != null)
      style.setProperty('--color-dark-background', c.dark_background);

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
