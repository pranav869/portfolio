import { Layout, Code2, Rocket, LineChart } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: <Layout size={32} className="text-accent" />,
    title: "Website Design for Businesses",
    description: "I build premium, high-performance websites that establish authority and turn casual visitors into loyal customers."
  },
  {
    icon: <Rocket size={32} className="text-accent" />,
    title: "Landing Pages that Convert",
    description: "Highly optimized single-page layouts designed specifically to capture leads and maximize your marketing ROI."
  },
  {
    icon: <LineChart size={32} className="text-accent" />,
    title: "Performance Optimization",
    description: "I turn slow websites into speed demons. Better Lighthouse scores mean better SEO and higher user retention."
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="heading-lg">Specialized <span className="text-gradient">Services</span></h2>
          <p className="subtitle">Comprehensive solutions designed to elevate your brand.</p>
        </div>
        
        <div className="services-bento">
          <div className="glass-card service-card service-card--feature reveal">
            <div className="service-icon-wrapper">{services[0].icon}</div>
            <h3 className="service-title">{services[0].title}</h3>
            <p className="service-desc">{services[0].description}</p>
            <div className="service-feature-stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Sites Delivered</span>
            </div>
          </div>
          <div className="glass-card service-card reveal reveal-delay-1">
            <div className="service-icon-wrapper">{services[1].icon}</div>
            <h3 className="service-title">{services[1].title}</h3>
            <p className="service-desc">{services[1].description}</p>
          </div>
          <div className="glass-card service-card reveal reveal-delay-2">
            <div className="service-icon-wrapper">{services[2].icon}</div>
            <h3 className="service-title">{services[2].title}</h3>
            <p className="service-desc">{services[2].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
