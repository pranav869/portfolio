import { ArrowRight } from 'lucide-react';
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
              width="124"
              height="124"
              sizes="(max-width: 768px) 104px, 124px"
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

        </div>
      </div>
    </section>
  );
}
