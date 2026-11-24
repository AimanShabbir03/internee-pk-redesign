import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SearchX } from 'lucide-react';
import useAsyncData from '../hooks/useAsyncData.js';
import { categories } from '../data/content.js';
import { forms } from '../data/pages.js';
import Skeleton from './Skeleton.jsx';
import Modal from './Modal.jsx';
import { FormCard } from './FormSection.jsx';

function Listing({ item, onApply }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="card hover job">
      <span className="tag">{item.category}</span>
      <h3>{item.title}</h3>
      <ul className="metachips">{item.meta.map((m) => <li key={m}>{m}</li>)}</ul>
      {open && <p className="mu">{item.summary}</p>}
      <div className="row">
        <button className="btn ghost sm" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? 'Hide details' : 'View details'}</button>
        <button className="btn sm" onClick={() => onApply(item)}>Apply now</button>
      </div>
    </article>
  );
}

/** Searchable, filterable list loaded from local JSON, with skeleton, error, empty and apply-modal states. */
export default function ListingBoard({ loader, noun, searchLabel }) {
  const [sp] = useSearchParams();
  const { status, data, retry } = useAsyncData(loader);
  const [q, setQ] = useState('');
  const [cat, setCat] = useState(sp.get('track') || 'All');
  const [apply, setApply] = useState(null);
  const list = useMemo(() => (data || []).filter((i) => (cat === 'All' || i.category === cat)
    && `${i.title} ${i.meta.join(' ')} ${i.category}`.toLowerCase().includes(q.trim().toLowerCase())), [data, q, cat]);
  const cfg = apply && { title: `Apply: ${apply.title}`, submit: 'Submit application', formKey: 'apply',
    successMsg: 'Application received (demo). Nothing was sent to a server.',
    fields: forms.apply.fields.filter((f) => f.name !== 'track') };

  return (
    <section className="sec" id={noun}>
      <div className="container">
        <p className="note c">Sample listings for demonstration. Edit them in the local JSON file.</p>
        <label className="search"><Search size={18} /><span className="sr">{searchLabel}</span>
          <input type="search" placeholder={searchLabel} value={q} onChange={(e) => setQ(e.target.value)} /></label>
        <div className="filters mt" role="group" aria-label="Filter by category">
          {['All', ...categories.map((c) => c.name)].map((c) => <button key={c} className={`fbtn ${cat === c ? 'on' : ''}`} aria-pressed={cat === c} onClick={() => setCat(c)}>{c}</button>)}
        </div>
        <div className="mt" aria-live="polite">
          {status === 'loading' && <Skeleton />}
          {status === 'error' && <div className="empty"><p>Couldn’t load {noun}.</p><button className="btn" onClick={retry}>Try again</button></div>}
          {status === 'ready' && (list.length
            ? <><p className="mu" style={{ marginBottom: 14 }}>{list.length} {noun} found</p><div className="grid g3">{list.map((i) => <Listing key={i.id} item={i} onApply={setApply} />)}</div></>
            : <div className="empty"><SearchX size={40} /><h3>No {noun} match your search</h3><p>Try a different keyword or category.</p><button className="btn" onClick={() => { setQ(''); setCat('All'); }}>Clear filters</button></div>)}
        </div>
      </div>
      {apply && <Modal title={cfg.title} onClose={() => setApply(null)}><FormCard cfg={cfg} formKey={`apply-${apply.id}`} /></Modal>}
    </section>
  );
}
