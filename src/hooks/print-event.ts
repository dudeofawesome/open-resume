import { useEffect } from 'react';

export function usePrintEvent(callback: () => void) {
  useEffect(() => {
    function on_keydown(ev: KeyboardEvent) {
      if ((ev.ctrlKey || ev.metaKey) && ev.key === 'p') {
        ev.preventDefault();
        callback();
      }
    }

    window.addEventListener('keydown', on_keydown);
    return () => window.removeEventListener('keydown', on_keydown);
  }, []);
}
