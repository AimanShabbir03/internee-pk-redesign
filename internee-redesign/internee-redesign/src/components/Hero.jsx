import { ArrowRight, Users, Briefcase, Award } from 'lucide-react';
import SmartLink from './SmartLink.jsx';
import { SITE } from '../data/content.js';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div>
          <span className="pill">Pakistan’s virtual internship platform</span>
          <h1>Build skills. Get experience. <em>Land your job.</em></h1>
          <p className="lead">Stop waiting for opportunities. Build real skills on Pakistan’s virtual internship platform and start your tech career today.</p>
          <div className="row">
            <SmartLink className="btn lg" to={'/jobs'}>Our Job Portal <ArrowRight size={18} /></SmartLink>
            <SmartLink className="btn lg ghost" to="/internship">Explore Internships</SmartLink>
          </div>
          <ul className="chips"><li>No experience required</li><li>Industry-ready projects</li></ul>
        </div>
        <div className="art" aria-hidden="true">
          <svg viewBox="0 0 400 320">
            <rect x="40" y="40" width="320" height="200" rx="18" fill="#fff" stroke="#dfe3f5" strokeWidth="2" />
            <rect x="40" y="40" width="320" height="34" rx="18" fill="#eef0ff" />
            <circle cx="64" cy="57" r="5" fill="#ff6b6b" /><circle cx="82" cy="57" r="5" fill="#ffd166" /><circle cx="100" cy="57" r="5" fill="#2ec4a6" />
            <rect x="62" y="96" width="120" height="12" rx="6" fill="#4338ca" /><rect x="62" y="120" width="200" height="10" rx="5" fill="#c7cbe8" />
            <rect x="62" y="140" width="160" height="10" rx="5" fill="#c7cbe8" /><rect x="62" y="170" width="90" height="30" rx="10" fill="#2ec4a6" />
            <rect x="240" y="150" width="90" height="70" rx="12" fill="#eef0ff" /><path d="M252 204l20-24 16 14 28-34" stroke="#4338ca" strokeWidth="4" fill="none" strokeLinecap="round" />
            <rect x="120" y="250" width="160" height="14" rx="7" fill="#dfe3f5" />
          </svg>
          <div className="float f1"><Users size={18} /> Learn with peers</div>
          <div className="float f2"><Briefcase size={18} /> Real tasks</div>
          <div className="float f3"><Award size={18} /> Certificates</div>
        </div>
      </div>
    </section>
  );
}
