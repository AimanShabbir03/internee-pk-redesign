import SmartLink from './SmartLink.jsx';
import Reveal from './Reveal.jsx';

export default function FeatureSection({ id, tag, title, text, cta, items, alt, pills, page, children }) {
  const H = page ? 'h1' : 'h2';
  return (
    <section className={`sec ${alt ? 'alt' : ''}`} id={id}>
      <div className="container">
        <div className="head">
          <span className="pill">{tag}</span><H>{title}</H><p>{text}</p>
          {pills && <ul className="chips cc">{pills.map((p) => <li key={p}>{p}</li>)}</ul>}
          {cta && <SmartLink className="btn lg mt" to={cta.href}>{cta.label}</SmartLink>}
        </div>
        <div className="grid g3">
          {items.map(({ icon: Icon, title: t, text: d, list }, i) => (
            <Reveal key={t} delay={i * 60}>
              <article className="card hover">
                <div className="ico"><Icon /></div><h3>{t}</h3>{d && <p>{d}</p>}
                {list && <ul className="ticks">{list.map((l) => <li key={l}>{l}</li>)}</ul>}
              </article>
            </Reveal>
          ))}
        </div>
        {children}
      </div>
    </section>
  );
}
