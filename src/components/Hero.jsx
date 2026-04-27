import { ArrowRight, CheckCircle2 } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="bg-mesh"></div>
      <div className="container hero-container animate-fade-in">
        <div className="hero-content">
          <div className="hero-avatar-wrap animate-fade-in" style={{ animationDelay: '80ms' }}>
            <img
              src="/profile.jpg"
              alt="Pranav profile"
              className="hero-avatar"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>

          <div className="hero-badge delay-100">
            <span className="badge-dot"></span>
            Available for new projects
          </div>
          
          <h1 className="heading-xl hero-headline delay-200">
            Performance-driven design<br />
            <span className="text-gradient">for the modern web.</span>
          </h1>
          
          <p className="subtitle hero-subtitle delay-300">
            I build high-conversion websites that command attention, accelerate growth, and make your brand <strong>impossible to ignore.</strong>
          </p>
          
          <div className="hero-cta delay-300">
            <a href="#contact" className="btn btn-primary">
              Start a Project <ArrowRight size={18} />
            </a>
            <a href="#projects" className="btn btn-secondary">
              View My Work
            </a>
          </div>

          <div className="hero-trust delay-300">
            <div className="trust-line">
              <CheckCircle2 size={16} className="text-accent" />
              <span>Worked with 20+ clients globally</span>
              <span className="trust-divider">|</span>
              <CheckCircle2 size={16} className="text-accent" />
              <span>50+ projects delivered successfully</span>
            </div>
            
            <div className="trust-logos">
              <span className="logo-text">SmileElite</span>
              <span className="logo-divider">·</span>
              <span className="logo-text">ApexGym</span>
              <span className="logo-divider">·</span>
              <span className="logo-text">UnitedTurf</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
