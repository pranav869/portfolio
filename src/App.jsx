import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Results from './components/Results';
import Services from './components/Services';
import Projects from './components/Projects';
import WhyChooseMe from './components/WhyChooseMe';
import CTASection from './components/CTASection';
import Contact from './components/Contact';
import WhatsAppWidget from './components/WhatsAppWidget';
import './App.css';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed'); }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Results />
        <Services />
        <Projects />
        <WhyChooseMe />
        <CTASection />
        <Contact />
      </main>
      <WhatsAppWidget />
    </>
  );
}

export default App;
