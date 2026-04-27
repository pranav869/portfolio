import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="logo">
          Pranav<span className="text-gradient">.</span>
        </a>

        <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
          <a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a>
          <a href="#contact" className="btn btn-primary nav-cta" onClick={() => setMobileMenuOpen(false)}>Hire Me</a>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
