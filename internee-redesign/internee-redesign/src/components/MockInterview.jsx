import { useState } from 'react';
import { Mic } from 'lucide-react';
import questions from '../data/interview.json';

/** Rule-based feedback (not real AI): checks length, specifics, action words and structure. */
export function evaluate(answer) {
  const words = answer.trim().split(/\s+/).filter(Boolean).length;
  const tips = []; let score = 0;
  if (words >= 40) score += 4; else if (words >= 20) { score += 2; tips.push('Add more detail: aim for 40+ words.'); } else tips.push('Too short: explain what you did and why.');
  if (/\d/.test(answer)) score += 2; else tips.push('Include a number or measurable result.');
  if (/\b(built|led|created|improved|solved|designed|implemented|learned|launched|analysed|analyzed)\b/i.test(answer)) score += 2; else tips.push('Use action verbs such as built, led or improved.');
  if (/\b(first|then|finally|because|result|so that)\b/i.test(answer)) score += 2; else tips.push('Structure it: situation, action, result.');
  return { score, tips, words };
}

export default function MockInterview() {
  const roles = Object.keys(questions);
  const [role, setRole] = useState(roles[0]);
  const [step, setStep] = useState(-1);
  const [ans, setAns] = useState('');
  const [fb, setFb] = useState(null);
  const [results, setResults] = useState([]);
  const qs = questions[role];
  const done = step >= qs.length;
  const total = results.reduce((a, r) => a + r.score, 0);

  const submit = () => { if (ans.trim().length < 5) { setFb({ error: 'Please write an answer first.' }); return; } const r = evaluate(ans); setFb(r); setResults([...results, r]); };
  const next = () => { setStep(step + 1); setAns(''); setFb(null); };
  const reset = () => { setStep(-1); setAns(''); setFb(null); setResults([]); };

  return (
    <section className="sec alt" id="try"><div className="container narrow">
      <div className="head"><span className="pill">Try it</span><h2>Practice a mock interview</h2><p className="note">Rule-based demo that runs in your browser. It is not real AI.</p></div>
      <div className="card" aria-live="polite">
        {step === -1 && <>
          <label htmlFor="role" className="lbl">Choose a role</label>
          <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>{roles.map((r) => <option key={r}>{r}</option>)}</select>
          <button className="btn lg mt" onClick={() => setStep(0)}><Mic size={18} /> Start interview</button></>}
        {step >= 0 && !done && <>
          <p className="mu">Question {step + 1} of {qs.length} · {role}</p>
          <h3 style={{ margin: '8px 0 14px' }}>{qs[step]}</h3>
          <label htmlFor="answer" className="sr">Your answer</label>
          <textarea id="answer" rows={5} value={ans} disabled={fb && !fb.error} onChange={(e) => setAns(e.target.value)} placeholder="Type your answer…" />
          {fb?.error && <small className="e" role="alert">{fb.error}</small>}
          {fb && !fb.error && <div className="fb ok" style={{ display: 'block', marginTop: 12 }}><b>Score: {fb.score}/10</b> ({fb.words} words)<ul className="ticks">{fb.tips.length ? fb.tips.map((t) => <li key={t}>{t}</li>) : <li>Great answer, well structured.</li>}</ul></div>}
          <div className="row mt">{!fb || fb.error ? <button className="btn" onClick={submit}>Submit answer</button> : <button className="btn" onClick={next}>{step + 1 === qs.length ? 'Finish' : 'Next question'}</button>}</div></>}
        {done && <><h3>Interview complete</h3><p className="lead">Total score: <b>{total}</b> / {qs.length * 10}</p>
          <p className="mu">Average {(total / qs.length).toFixed(1)} per answer. Retry to improve your structure and add measurable results.</p>
          <button className="btn mt" onClick={reset}>Practice again</button></>}
      </div>
    </div></section>
  );
}
