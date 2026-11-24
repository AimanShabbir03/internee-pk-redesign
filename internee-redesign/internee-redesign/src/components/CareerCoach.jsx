import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const write = {
  resume: (f) => `${f.name} | ${f.role}\n\nProfessional summary\nMotivated ${f.role} candidate with hands-on experience in ${f.skills}. ${f.exp} Eager to contribute to real projects, learn quickly and deliver clean, reliable work.\n\nKey skills\n${f.skills.split(',').map((s) => `• ${s.trim()}`).join('\n')}`,
  cover: (f) => `Dear Hiring Manager,\n\nI am writing to apply for the ${f.role} position${f.company ? ` at ${f.company}` : ''}. ${f.exp} My skills in ${f.skills} allow me to contribute from day one.\n\nI would welcome the chance to discuss how I can help your team.\n\nSincerely,\n${f.name}`,
};

export default function CareerCoach() {
  const [tab, setTab] = useState('resume');
  const [f, setF] = useState({ name: '', role: '', skills: '', exp: '', company: '' });
  const [err, setErr] = useState('');
  const [out, setOut] = useState('');
  const [copied, setCopied] = useState(false);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const gen = (e) => {
    e.preventDefault();
    if (!f.name.trim() || !f.role.trim() || !f.skills.trim() || f.exp.trim().length < 10) { setErr('Fill name, role, skills and a short experience (10+ characters).'); setOut(''); return; }
    setErr(''); setOut(write[tab](f)); setCopied(false);
  };
  const copy = async () => { try { await navigator.clipboard.writeText(out); setCopied(true); } catch { setErr('Copy is not available. Select the text and copy it manually.'); } };
  return (
    <section className="sec alt" id="try"><div className="container narrow">
      <div className="head"><span className="pill">Try it</span><h2>Draft your resume or cover letter</h2><p className="note">Template-based demo that runs in your browser. It is not real AI.</p></div>
      <div className="tabs" role="tablist">
        {[['resume', 'Resume summary'], ['cover', 'Cover letter']].map(([k, l]) => <button key={k} role="tab" aria-selected={tab === k} className={`fbtn ${tab === k ? 'on' : ''}`} onClick={() => { setTab(k); setOut(''); }}>{l}</button>)}
      </div>
      <form className="card form mt" onSubmit={gen} noValidate>
        {[['name', 'Full name'], ['role', 'Target role'], ['skills', 'Skills (comma separated)'], ...(tab === 'cover' ? [['company', 'Company (optional)']] : [])].map(([k, l]) => (
          <div className="field" key={k}><label htmlFor={`c-${k}`}>{l}</label><input id={`c-${k}`} value={f[k]} onChange={set(k)} /></div>))}
        <div className="field"><label htmlFor="c-exp">Experience in one or two sentences</label><textarea id="c-exp" rows={3} value={f.exp} onChange={set('exp')} /></div>
        {err && <p className="fb bad" role="alert">{err}</p>}
        <button className="btn lg">Generate</button>
      </form>
      {out && <div className="card mt"><label htmlFor="out" className="lbl">Your draft</label><textarea id="out" rows={10} readOnly value={out} />
        <button className="btn ghost mt" onClick={copy}>{copied ? <><Check size={16} /> Copied</> : <><Copy size={16} /> Copy</>}</button></div>}
    </div></section>
  );
}
