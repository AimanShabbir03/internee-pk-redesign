import Section from '../components/Sections.jsx';
import MockInterview from '../components/MockInterview.jsx';
import CareerCoach from '../components/CareerCoach.jsx';
import CTA from '../components/CTA.jsx';
import ContactForm from '../components/ContactForm.jsx';

export default function SectionPage({ name }) {
  return (
    <>
      <Section name={name} page />
      {name === 'interview' && <MockInterview />}
      {name === 'coach' && <CareerCoach />}
      <CTA />
      <ContactForm />
    </>
  );
}
