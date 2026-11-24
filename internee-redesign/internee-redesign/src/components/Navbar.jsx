import { useEffect, useRef, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { Menu, X, ChevronDown } from 'lucide-react';
import { navItems, SITE, SIGN_IN } from '../data/content.js';
import SmartLink from './SmartLink.jsx';
import Img from './Img.jsx';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dd, setDd] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const ref = useRef(null);
  const { user, logout } = useAuth();
  const { pathname } = useLocation();
  const home = () => { close(); if (pathname === '/') window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const close = () => { setOpen(false); setDd(null); };

  useEffect(() => {
    const s = () => setScrolled(window.scrollY > 10);
    const k = (e) => e.key === 'Escape' && close();
    const c = (e) => ref.current && !ref.current.contains(e.target) && setDd(null);
    s();
    window.addEventListener('scroll', s, { passive: true });
    window.addEventListener('keydown', k);
    document.addEventListener('mousedown', c);
    return () => { window.removeEventListener('scroll', s); window.removeEventListener('keydown', k); document.removeEventListener('mousedown', c); };
  }, []);

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`} ref={ref}>
      <div className="container nav-in">
        <Link to="/" className="brand" onClick={home} aria-label="Internee.pk home">
          <Img src={`${SITE}/logo.png`} alt="Internee.pk" className="logo" fallback="Internee.pk" />
        </Link>
        <nav id="menu" className={`menu ${open ? 'open' : ''}`} aria-label="Main">
          {navItems.map((n) => n.menu ? (
            <div key={n.label} className={`dd ${dd === n.label ? 'open' : ''}`}>
              <button aria-expanded={dd === n.label} aria-haspopup="true" onClick={() => setDd(dd === n.label ? null : n.label)}>{n.label} <ChevronDown size={16} /></button>
              <div className="dd-panel">
                {n.menu.map(([t, u]) => <SmartLink key={t} to={u} onClick={close}>{t}</SmartLink>)}
              </div>
            </div>
          ) : n.to.startsWith('/') && !n.to.includes('#') ? (
            <NavLink key={n.label} to={n.to} end onClick={n.to === '/' ? home : close} className={({ isActive }) => (isActive ? 'active' : '')}>{n.label}</NavLink>
          ) : (
            <SmartLink key={n.label} to={n.to} onClick={close}>{n.label}</SmartLink>
          ))}
          <div className="auth">
            {user ? (<><span className="hello">Hi, {user.name}</span><button className="btn ghost" onClick={() => { logout(); close(); }}>Logout</button></>) : (<>
              <SmartLink className="btn ghost" to="/sign-in" onClick={close}>Login</SmartLink>
              <SmartLink className="btn" to="/sign-up" onClick={close}>Sign Up</SmartLink></>)}
          </div>
        </nav>
        <button className="burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
