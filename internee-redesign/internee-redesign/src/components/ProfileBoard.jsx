import useAsyncData from '../hooks/useAsyncData.js';
import Skeleton from './Skeleton.jsx';

export default function ProfileBoard() {
  const { status, data, retry } = useAsyncData(() => import('../data/profiles.json'));
  return (
    <section className="sec" id="profiles"><div className="container">
      <p className="note c">Sample profiles for demonstration.</p>
      <div className="mt">
        {status === 'loading' && <Skeleton />}
        {status === 'error' && <div className="empty"><button className="btn" onClick={retry}>Try again</button></div>}
        {status === 'ready' && <div className="grid g3">{data.map((p) => (
          <article key={p.id} className="card hover"><div className="avatar" aria-hidden="true">{p.name.slice(-1)}</div>
            <h3>{p.name}</h3><p>{p.track} · {p.tasks} tasks completed</p>
            <ul className="metachips">{p.badges.map((b) => <li key={b}>🏅 {b}</li>)}</ul></article>))}</div>}
      </div>
    </div></section>
  );
}
