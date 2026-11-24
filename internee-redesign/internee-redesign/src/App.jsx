import { useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import SectionPage from './pages/SectionPage.jsx';
import InfoPage from './pages/InfoPage.jsx';
import { routes } from './data/content.js';
import { pages } from './data/pages.js';

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) { window.scrollTo(0, 0); return; }
    const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' }), 60);
    return () => clearTimeout(t);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <a href="#main" className="skip">Skip to content</a>
      <ScrollManager />
      <Navbar />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          {routes.map((r) => <Route key={r.path} path={r.path} element={<SectionPage name={r.section} />} />)}
          {Object.entries(pages).map(([k, cfg]) => <Route key={k} path={`/${k}`} element={<InfoPage cfg={cfg} />} />)}
          <Route path="*" element={<div className="container sec c"><h1>Page not found</h1><p className="mu">That page doesn’t exist.</p><Link className="btn" to="/">Back home</Link></div>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
