import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const perView = () => (typeof window === 'undefined' ? 3 : window.innerWidth >= 960 ? 3 : window.innerWidth >= 600 ? 2 : 1);

/** Responsive carousel: arrows, dots, swipe, keyboard arrows, autoplay (pauses on hover/focus). */
export default function Carousel({ items, renderItem, label = 'Carousel', autoplay = 5000 }) {
  const [per, setPer] = useState(perView);
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const x0 = useRef(0);
  const max = Math.max(0, items.length - per);
  const idx = Math.min(i, max);
  const go = (n) => setI(n < 0 ? max : n > max ? 0 : n);

  useEffect(() => { const f = () => setPer(perView()); window.addEventListener('resize', f); return () => window.removeEventListener('resize', f); }, []);
  useEffect(() => {
    if (paused || !autoplay || max === 0) return undefined;
    const t = setInterval(() => setI((v) => (v >= max ? 0 : v + 1)), autoplay);
    return () => clearInterval(t);
  }, [paused, autoplay, max]);

  return (
    <div className="car" role="region" aria-roledescription="carousel" aria-label={label} tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'ArrowLeft') go(idx - 1); if (e.key === 'ArrowRight') go(idx + 1); }}
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}
      onTouchStart={(e) => { x0.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => { const d = e.changedTouches[0].clientX - x0.current; if (Math.abs(d) > 40) go(idx + (d < 0 ? 1 : -1)); }}>
      <div className="car-view">
        <div className="car-track" style={{ transform: `translateX(-${(idx * 100) / per}%)` }}>
          {items.map((it, k) => (
            <div key={it.id || it.name} className="car-slide" style={{ flex: `0 0 ${100 / per}%` }} aria-hidden={k < idx || k >= idx + per}>{renderItem(it)}</div>
          ))}
        </div>
      </div>
      <div className="ctl">
        <button aria-label="Previous slide" onClick={() => go(idx - 1)}><ChevronLeft /></button>
        {Array.from({ length: max + 1 }, (_, k) => <button key={k} className={`dot ${k === idx ? 'on' : ''}`} aria-label={`Go to slide ${k + 1}`} aria-current={k === idx} onClick={() => go(k)} />)}
        <button aria-label="Next slide" onClick={() => go(idx + 1)}><ChevronRight /></button>
      </div>
    </div>
  );
}
