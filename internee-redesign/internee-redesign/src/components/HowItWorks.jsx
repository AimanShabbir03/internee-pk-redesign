import SmartLink from './SmartLink.jsx';
import { steps, SITE } from '../data/content.js';
import Reveal from './Reveal.jsx';

export default function HowItWorks() {
  return (
    <section className="sec" id="how">
      <div className="container">
        <div className="head"><span className="pill">How it works</span><h2>Start fast. Learn smart. Get job-ready.</h2>
          <p>Three clear steps from sign-up to certificate.</p>
          <SmartLink className="btn lg mt" to="/internship">Get started now</SmartLink></div>
        <ol className="grid g3 steps">
          {steps.map(([t, d], i) => (
            <Reveal key={t} delay={i * 80}><li className="card step"><span className="num">0{i + 1}</span><h3>{t}</h3><p>{d}</p></li></Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
