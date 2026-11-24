import { Link } from 'react-router-dom';
import FeatureSection from '../components/FeatureSection.jsx';
import FormSection from '../components/FormSection.jsx';
import JobPortal from '../components/JobPortal.jsx';
import InternshipBoard from '../components/InternshipBoard.jsx';
import BlogBoard from '../components/BlogBoard.jsx';
import WebinarBoard from '../components/WebinarBoard.jsx';
import ProfileBoard from '../components/ProfileBoard.jsx';
import ContactForm from '../components/ContactForm.jsx';
import HowItWorks from '../components/HowItWorks.jsx';

const boards = { internships: InternshipBoard, blog: BlogBoard, webinars: WebinarBoard, profiles: ProfileBoard };

export default function InfoPage({ cfg }) {
  const { tag, title, text, blocks, board, jobs, legal, form, alt, contact } = cfg;
  const Board = boards[board];
  return (
    <>
      {blocks ? <FeatureSection page tag={tag} title={title} text={text} items={blocks} /> : (
        <section className="sec" style={{ paddingBottom: 0 }}><div className="container head"><span className="pill">{tag}</span><h1>{title}</h1><p>{text}</p></div></section>
      )}
      {legal && <div className="container narrow">{legal.map(([h, t]) => <div key={h} className="card mt"><h3>{h}</h3><p>{t}</p></div>)}</div>}
      {Board && <Board />}
      {board === 'internships' && <HowItWorks />}
      {jobs && <JobPortal />}
      {contact && <ContactForm />}
      {form && <FormSection formKey={form} />}
      {alt && <p className="c" style={{ marginTop: -30, paddingBottom: 60 }}>{alt === '/sign-up' ? 'New here?' : 'Already have an account?'} <Link to={alt} style={{ color: 'var(--pr)', fontWeight: 600 }}>{alt === '/sign-up' ? 'Create an account' : 'Login'}</Link></p>}
    </>
  );
}
