import { Facebook, Twitter, Linkedin, Instagram, Phone } from 'lucide-react';
import { SITE } from '../data/content.js';
import SmartLink from './SmartLink.jsx';
import Img from './Img.jsx';

const icons = { Facebook, Twitter, LinkedIn: Linkedin, Instagram };
import { social } from '../data/content.js';

const company = [['Home', '/'], ['Blog', '/blog'], ['Student Ambassador', '/student-ambassador'], ['Intern Profiles', '/intern-profiles'], ['About Us', '/about'], ['Contact', '/contact']];
const resources = [['Community', '/student-ambassador'], ['Certification', '/sign-in'], ['Task Portal', '/task-portal'], ['AI Mock Interview', '/ai-interview'], ['AI Career Coach', '/ai-career-coach'], ['FAQs', '/#faq']];

export default function Footer() {
  return (
    <footer className="foot">
      <div className="container fgrid">
        <div>
          <span className="logo-box"><Img src={`${SITE}/logo.png`} alt="Internee.pk" className="logo" fallback="Internee.pk" /></span>
          <p>The platform designed to turbocharge the IT sector in Pakistan.</p>
          <p><Phone size={14} /> +92 312 3023645</p>
          <div className="soc">{social.map(([n, u]) => { const I = icons[n]; return <a key={n} href={u} target="_blank" rel="noreferrer" aria-label={n}><I size={18} /></a>; })}</div>
        </div>
        <div><h4>Company</h4>{company.map(([t, u]) => <SmartLink key={t} to={u}>{t}</SmartLink>)}</div>
        <div><h4>Resources</h4>{resources.map(([t, u]) => <SmartLink key={t} to={u}>{t}</SmartLink>)}</div>
      </div>
      <p className="copy">© {new Date().getFullYear()} Internee.pk redesign concept · <SmartLink  to="/terms">Terms</SmartLink> · <SmartLink  to="/privacy">Privacy</SmartLink></p>
    </footer>
  );
}
