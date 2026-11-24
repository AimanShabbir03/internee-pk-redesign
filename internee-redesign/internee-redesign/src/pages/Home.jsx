import Hero from '../components/Hero.jsx';
import Partners from '../components/Partners.jsx';
import TracksSection from '../components/TracksSection.jsx';
import Section from '../components/Sections.jsx';
import HowItWorks from '../components/HowItWorks.jsx';
import Testimonials from '../components/Testimonials.jsx';
import CTA from '../components/CTA.jsx';
import FAQ from '../components/FAQ.jsx';
import ContactForm from '../components/ContactForm.jsx';

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <TracksSection />
      <Section name="task" />
      <Section name="instructor" />
      <Section name="career" />
      <Section name="interview" />
      <HowItWorks />
      <Section name="coach" />
      <Testimonials />
      <CTA />
      <FAQ />
      <ContactForm />
    </>
  );
}
