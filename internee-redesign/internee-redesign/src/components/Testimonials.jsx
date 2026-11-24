import SmartLink from './SmartLink.jsx';
import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials as items, SITE } from '../data/content.js';

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const startX = useRef(null);
  const many = items.length > 1;
  const go = (n) => setI((n + items.length) % items.length);
  useEffect(() => {
    if (paused || !many) return;
    const t = setInterval(() => setI((x) => (x + 1) % items.length), 6000);
    return () => clearInterval(t);
  }, [paused, many]);
  return (
    <section className="sec alt" id="stories">
      <div className="container narrow">
        <div className="head"><span className="pill">Trusted by thousands</span><h2>Join thousands of achievers</h2></div>
        <div className="card tcard" aria-live="polite" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
          onTouchStart={(e) => (startX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => { const d = e.changedTouches[0].clientX - startX.current; if (many && Math.abs(d) > 40) go(i + (d < 0 ? 1 : -1)); }}>
          <Quote className="q" />
          <p key={i} className="tq">“{items[i].text}”</p>
          <strong>{items[i].name}</strong><span className="mu"> · {items[i].place}</span>
          {items[i].sample && <span className="tag">Sample testimonial: replace with a real one</span>}
        </div>
        {many && (
          <div className="ctl">
            <button aria-label="Previous testimonial" onClick={() => go(i - 1)}><ChevronLeft /></button>
            {items.map((_, k) => <button key={k} className={`dot ${k === i ? 'on' : ''}`} aria-label={`Testimonial ${k + 1}`} aria-current={k === i} onClick={() => setI(k)} />)}
            <button aria-label="Next testimonial" onClick={() => go(i + 1)}><ChevronRight /></button>
          </div>
        )}
        <p className="c mt"><SmartLink className="btn ghost" to="/internship">Join our community</SmartLink></p>
      </div>
    </section>
  );
}
