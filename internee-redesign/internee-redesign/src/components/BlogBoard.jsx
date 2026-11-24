import { useMemo, useState } from 'react';
import { Search, SearchX } from 'lucide-react';
import useAsyncData from '../hooks/useAsyncData.js';
import Skeleton from './Skeleton.jsx';

export default function BlogBoard() {
  const { status, data, retry } = useAsyncData(() => import('../data/blog.json'));
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(null);
  const list = useMemo(() => (data || []).filter((p) => `${p.title} ${p.category} ${p.excerpt}`.toLowerCase().includes(q.toLowerCase())), [data, q]);
  return (
    <section className="sec" id="posts"><div className="container narrow">
      <p className="note c">Sample articles for demonstration.</p>
      <label className="search"><Search size={18} /><span className="sr">Search articles</span><input type="search" placeholder="Search articles…" value={q} onChange={(e) => setQ(e.target.value)} /></label>
      <div className="mt">
        {status === 'loading' && <Skeleton count={2} />}
        {status === 'error' && <div className="empty"><button className="btn" onClick={retry}>Try again</button></div>}
        {status === 'ready' && (list.length ? list.map((p) => (
          <article key={p.id} className="card mt">
            <span className="tag">{p.category}</span><h3>{p.title}</h3><p>{open === p.id ? p.body : p.excerpt}</p>
            <button className="link" aria-expanded={open === p.id} onClick={() => setOpen(open === p.id ? null : p.id)}>{open === p.id ? 'Show less' : 'Read more'}</button>
          </article>
        )) : <div className="empty"><SearchX size={40} /><h3>No articles found</h3><button className="btn" onClick={() => setQ('')}>Clear search</button></div>)}
      </div>
    </div></section>
  );
}
