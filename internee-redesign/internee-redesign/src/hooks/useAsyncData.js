import { useEffect, useState } from 'react';
import { DELAY } from '../config.js';

/** Loads local JSON through a dynamic import. Returns { status: 'loading'|'ready'|'error', data, retry }. */
export default function useAsyncData(loader, delay = DELAY) {
  const [state, setState] = useState({ status: 'loading', data: null });
  const [n, setN] = useState(0);
  useEffect(() => {
    let live = true;
    setState({ status: 'loading', data: null });
    Promise.all([loader(), new Promise((r) => setTimeout(r, delay))])
      .then(([m]) => live && setState({ status: 'ready', data: m.default }))
      .catch(() => live && setState({ status: 'error', data: null }));
    return () => { live = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [n]);
  return { ...state, retry: () => setN((x) => x + 1) };
}
