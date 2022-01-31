import { useState, useEffect } from 'react';

export function useMediaQuery(query: string) {
  const [is_match, set_is_match] = useState(false);

  useEffect(() => {
    const match_list = window.matchMedia(query);

    if (match_list.matches !== is_match) {
      set_is_match(match_list.matches);
    }

    const listener = (ev: MediaQueryListEvent) => set_is_match(ev.matches);
    match_list.addEventListener('change', listener);
    return () => match_list.removeEventListener('change', listener);
  }, [query]);

  return is_match;
}
