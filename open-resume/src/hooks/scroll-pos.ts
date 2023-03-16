import { useState, useEffect } from 'react';

export function useScrollPos() {
  const [scroll_pos, set_scroll_pos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const listener = () =>
      set_scroll_pos({ x: window.scrollX, y: window.scrollY });

    document.addEventListener('scroll', listener);
    return () => document.removeEventListener('scroll', listener);
  }, []);

  return scroll_pos;
}
