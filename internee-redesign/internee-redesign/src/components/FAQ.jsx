import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../data/faqs.js';

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="sec alt" id="faq">
      <div className="container narrow">
        <div className="head"><span className="pill">Help</span><h2>Frequently asked questions</h2></div>
        {faqs.map((f, i) => (
          <div key={f.q} className={`acc ${open === i ? 'open' : ''}`}>
            <h3>
              <button aria-expanded={open === i} aria-controls={`a${i}`} id={`q${i}`} onClick={() => setOpen(open === i ? -1 : i)}>
                {f.q}<ChevronDown />
              </button>
            </h3>
            <div id={`a${i}`} role="region" aria-labelledby={`q${i}`} className="panel"><div><p>{f.a}</p></div></div>
          </div>
        ))}
      </div>
    </section>
  );
}
