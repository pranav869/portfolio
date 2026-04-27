import { Clock, MousePointer2, Target, DollarSign } from 'lucide-react';
import './WhyChooseMe.css';

const reasons = [
  {
    icon: <Clock size={28} />,
    title: "Fast Delivery",
    desc: "I don't waste time. Your project goes live in weeks, not months."
  },
  {
    icon: <MousePointer2 size={28} />,
    title: "Modern Design",
    desc: "Apple-level simplicity that makes your brand look world-class."
  },
  {
    icon: <Target size={28} />,
    title: "Result Focused",
    desc: "Every pixel is engineered to turn your visitors into customers."
  },
  {
    icon: <DollarSign size={28} />,
    title: "Affordable Pricing",
    desc: "Premium quality development at a price that makes sense for your ROI."
  }
];

export default function WhyChooseMe() {
  return (
    <section className="section-padding why-choose-section">
      <div className="container">
        <div className="section-header">
          <h2 className="heading-lg">Built different.<br /><span className="text-gradient">Engineered to convert.</span></h2>
          <p className="subtitle">Technical precision combined with a sharp understanding of what drives revenue.</p>
        </div>
        
        <div className="why-grid">
          {reasons.map((reason, index) => (
            <div key={index} className={`glass-card why-card reveal reveal-delay-${index % 3}`}>
              <div className="why-icon-wrapper">{reason.icon}</div>
              <h3 className="why-title">{reason.title}</h3>
              <p className="why-desc">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
