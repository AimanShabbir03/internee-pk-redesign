import { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const rules = {
  name: (v) => (v.trim().length < 3 ? 'Please enter your full name (at least 3 characters).' : ''),
  email: (v) => (!v.trim() ? 'Email is required.' : /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? '' : 'Enter a valid email address.'),
  subject: (v) => (v.trim().length < 3 ? 'Please add a subject.' : ''),
  message: (v) => (v.trim().length < 10 ? 'Message must be at least 10 characters.' : ''),
};
const labels = { name: 'Full Name', email: 'Email Address', subject: 'Subject', message: 'Message' };
const empty = { name: '', email: '', subject: '', message: '' };

export default function ContactForm() {
  const [v, setV] = useState(empty);
  const [err, setErr] = useState({});
  const [status, setStatus] = useState('idle');

  const change = (k, val) => { setV({ ...v, [k]: val }); if (err[k]) setErr({ ...err, [k]: rules[k](val) }); };
  const submit = (e) => {
    e.preventDefault();
    const er = Object.fromEntries(Object.keys(rules).map((k) => [k, rules[k](v[k])]));
    setErr(er);
    if (Object.values(er).some(Boolean)) { setStatus('error'); return; }
    setStatus('loading');
    // Demo only: no backend is connected, so nothing is actually sent.
    setTimeout(() => { setStatus('success'); setV(empty); }, 1000);
  };

  return (
    <section className="sec" id="contact">
      <div className="container narrow">
        <div className="head"><span className="pill">Contact</span><h2>Get in touch</h2><p>Questions about internships? Send us a message.</p></div>
        <form className="card form" onSubmit={submit} noValidate>
          {Object.keys(rules).map((k) => {
            const Tag = k === 'message' ? 'textarea' : 'input';
            return (
              <div key={k} className="field">
                <label htmlFor={k}>{labels[k]} <span aria-hidden="true">*</span></label>
                <Tag id={k} name={k} rows={5} type={k === 'email' ? 'email' : 'text'} value={v[k]} required
                  aria-invalid={!!err[k]} aria-describedby={err[k] ? `${k}-e` : undefined} className={err[k] ? 'bad' : ''}
                  onChange={(e) => change(k, e.target.value)} onBlur={() => setErr({ ...err, [k]: rules[k](v[k]) })} />
                {err[k] && <small id={`${k}-e`} className="e" role="alert">{err[k]}</small>}
              </div>
            );
          })}
          <button className="btn lg" type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? <><Loader2 className="spin" size={18} /> Sending…</> : 'Send Message'}
          </button>
          <div aria-live="polite">
            {status === 'success' && <p className="fb ok"><CheckCircle2 size={18} /> Form validated successfully. This demo has no backend, so no message was sent.</p>}
            {status === 'error' && <p className="fb bad"><AlertCircle size={18} /> Please fix the highlighted fields.</p>}
          </div>
        </form>
      </div>
    </section>
  );
}
