import FeatureSection from './FeatureSection.jsx';
import { sections } from '../data/content.js';

function CareerExtras({ s }) {
  return (
    <>
      <ul className="stats">{s.stats.map(([n, l]) => <li key={l}><b>{n}</b><span>{l}</span></li>)}</ul>
      <div className="grid g2 mt">
        <div className="card"><h3>Your learning journey</h3>
          {s.journey.map(([t, v]) => (
            <div key={t} className="prog"><div><span>{t}</span><span>{v}%</span></div>
              <div className="bar" role="progressbar" aria-valuenow={v} aria-valuemin="0" aria-valuemax="100" aria-label={t}><i style={{ width: `${v}%` }} /></div></div>
          ))}
        </div>
        <div className="card"><h3>Career resources</h3><ul className="chips">{s.resources.map((r) => <li key={r}>{r}</li>)}</ul></div>
      </div>
    </>
  );
}

export default function Section({ name, page }) {
  const s = sections[name];
  return <FeatureSection {...s} page={page}>{name === 'career' && <CareerExtras s={s} />}</FeatureSection>;
}
