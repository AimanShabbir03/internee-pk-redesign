import { partners } from '../data/content.js';
import Img from './Img.jsx';

export default function Partners() {
  return (
    <section className="sec partners" aria-labelledby="ph">
      <div className="container c">
        <h2 id="ph" className="sm">Collaborated with trusted partners</h2>
        <ul className="plogos">{partners.map((p) => <li key={p.name}><Img src={p.src} alt={`${p.name} logo`} fallback={p.name} /></li>)}</ul>
      </div>
    </section>
  );
}
