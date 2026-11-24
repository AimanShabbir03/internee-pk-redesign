import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { forms } from '../data/pages.js';
import { useAuth } from '../context/AuthContext.jsx';
import { SUBMIT_DELAY } from '../config.js';

export const check = (fd, v) => {
  const s = (v || '').trim();
  if (!s) return `${fd.label} is required.`;
  if (fd.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s)) return 'Enter a valid email address.';
  if (fd.type === 'tel' && !/^[0-9+\s-]{10,15}$/.test(s)) return 'Enter a valid phone number.';
  if (fd.type === 'password' && s.length < 8) return 'Use at least 8 characters.';
  if (fd.type === 'textarea' && s.length < 10) return 'Please write at least 10 characters.';
  return '';
};

/** Generic validated form. cfg: { title, submit, fields, successMsg?, demo?, auth?: 'login'|'signup' } */
export function FormCard({ cfg, formKey = 'form' }) {
  const [v, setV] = useState({});
  const [err, setErr] = useState({});
  const [st, setSt] = useState('idle');
  const { login } = useAuth();
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    const er = Object.fromEntries(cfg.fields.map((fd) => [fd.name, check(fd, v[fd.name])]));
    setErr(er);
    if (Object.values(er).some(Boolean)) { setSt('error'); return; }
    setSt('loading');
    setTimeout(() => {
      if (cfg.auth) login(v.email, v.name);
      setSt('success'); setV({});
      if (cfg.auth) setTimeout(() => navigate('/'), 1400);
    }, SUBMIT_DELAY);
  };

  return (
    <form className="card form" onSubmit={submit} noValidate>
      <h2 style={{ fontSize: '1.4rem' }}>{cfg.title}</h2>
      {cfg.demo && <p className="note">{cfg.demo}</p>}
      {cfg.fields.map((fd) => {
        const id = `${formKey}-${fd.name}`;
        const common = { id, value: v[fd.name] || '', className: err[fd.name] ? 'bad' : '', 'aria-invalid': !!err[fd.name],
          onChange: (e) => { setV({ ...v, [fd.name]: e.target.value }); if (err[fd.name]) setErr({ ...err, [fd.name]: check(fd, e.target.value) }); },
          onBlur: () => setErr({ ...err, [fd.name]: check(fd, v[fd.name]) }) };
        return (
          <div className="field" key={fd.name}>
            <label htmlFor={id}>{fd.label}</label>
            {fd.type === 'textarea' ? <textarea rows={4} {...common} />
              : fd.type === 'select' ? <select {...common}><option value="">Select…</option>{fd.options.map((o) => <option key={o}>{o}</option>)}</select>
              : <input type={fd.type} {...common} />}
            {err[fd.name] && <small className="e" role="alert">{err[fd.name]}</small>}
          </div>
        );
      })}
      <button className="btn lg" disabled={st === 'loading'}>{st === 'loading' ? <><Loader2 className="spin" size={18} /> Please wait…</> : cfg.submit}</button>
      <div aria-live="polite">
        {st === 'success' && <p className="fb ok"><CheckCircle2 size={18} /> {cfg.successMsg || 'Form validated. This demo has no backend, so nothing was sent.'}</p>}
        {st === 'error' && <p className="fb bad"><AlertCircle size={18} /> Please fix the highlighted fields.</p>}
      </div>
    </form>
  );
}

export default function FormSection({ formKey }) {
  return <section className="sec" id="form"><div className="container narrow"><FormCard cfg={forms[formKey]} formKey={formKey} /></div></section>;
}
