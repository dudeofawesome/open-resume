import { useEffect } from 'react';

export function usePrintEvent(callback: (ev: KeyboardEvent) => void) {
  useEffect(() => {
    function on_keydown(ev: KeyboardEvent) {
      if ((ev.ctrlKey || ev.metaKey) && ev.key === 'p') {
        ev.preventDefault();
        callback(ev);
      }
    }

    window.addEventListener('keydown', on_keydown);
    return () => window.removeEventListener('keydown', on_keydown);
  }, []);
}
