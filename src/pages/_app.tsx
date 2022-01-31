import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { data } from '../data';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const style = document.documentElement.style;
    const c = data.theme.colors;
    c.primary != null && style.setProperty('--color-primary', c.primary);
    c.primary_muted != null &&
      style.setProperty('--color-primary-muted', c.primary_muted);
    c.text != null && style.setProperty('--color-text', c.text);
    c.text_dim != null && style.setProperty('--color-text-dim', c.text_dim);
    c.paper_background != null &&
      style.setProperty('--color-paper-background', c.paper_background);
    c.background != null &&
      style.setProperty('--color-background', c.background);

    c.dark_text != null && style.setProperty('--color-dark-text', c.dark_text);
    c.dark_text_dim != null &&
      style.setProperty('--color-dark-text-dim', c.dark_text_dim);
    c.dark_paper_background != null &&
      style.setProperty(
        '--color-dark-paper-background',
        c.dark_paper_background,
      );
    c.dark_background != null &&
      style.setProperty('--color-dark-background', c.dark_background);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
