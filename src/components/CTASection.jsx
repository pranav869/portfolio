import { ArrowRight, Calendar } from 'lucide-react';
import './CTASection.css';

export default function CTASection() {
  return (
    <section className="cta-section section-padding">
      <div className="container">
        <div className="cta-card glass-card animate-fade-in">
          <div className="cta-content">
            <div className="urgency-badge">
              <Calendar size={16} />
              <span>Available for 2 more projects this month</span>
            </div>
            <h2 className="heading-lg">Your brand deserves<br /><span className="text-gradient">a website that works.</span></h2>
            <p className="subtitle">Fast delivery. Premium design. Measurable results. Let's build something exceptional together.</p>
            <div className="cta-actions">
              <a href="#contact" className="btn btn-primary btn-lg">
                Start Your Project <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
