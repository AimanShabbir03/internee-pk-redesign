import { useState } from 'react';
import { CalendarDays, Clock, Check } from 'lucide-react';
import useAsyncData from '../hooks/useAsyncData.js';
import Skeleton from './Skeleton.jsx';

const dateIn = (d) => new Date(Date.now() + d * 864e5).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' });

export default function WebinarBoard() {
  const { status, data, retry } = useAsyncData(() => import('../data/webinars.json'));
  const [reg, setReg] = useState({});
  return (
    <section className="sec" id="sessions"><div className="container">
      <p className="note c">Sample sessions for demonstration. Dates are generated relative to today.</p>
      <div className="mt" aria-live="polite">
        {status === 'loading' && <Skeleton />}
        {status === 'error' && <div className="empty"><button className="btn" onClick={retry}>Try again</button></div>}
        {status === 'ready' && <div className="grid g3">{data.map((w) => (
          <article key={w.id} className="card hover"><span className="tag">{w.topic}</span><h3>{w.title}</h3>
            <ul className="meta"><li><CalendarDays size={16} /> {dateIn(w.days)}</li><li><Clock size={16} /> {w.duration}</li></ul>
            <button className={`btn sm ${reg[w.id] ? 'ghost' : ''}`} aria-pressed={!!reg[w.id]} onClick={() => setReg({ ...reg, [w.id]: !reg[w.id] })}>
              {reg[w.id] ? <><Check size={16} /> Registered (tap to cancel)</> : 'Register'}</button>
          </article>))}</div>}
      </div>
    </div></section>
  );
}
