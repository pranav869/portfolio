import { Zap, TrendingUp, BarChart3 } from 'lucide-react';
import './Results.css';

const results = [
  {
    icon: <Zap size={32} className="text-accent" />,
    value: "3x",
    label: "Faster Load Time",
    desc: "Optimized code for instant performance."
  },
  {
    icon: <TrendingUp size={32} className="text-accent" />,
    value: "40%",
    label: "More Conversions",
    desc: "Landing pages designed to sell."
  },
  {
    icon: <BarChart3 size={32} className="text-accent" />,
    value: "90+",
    label: "Lighthouse Score",
    desc: "Built with SEO & Best Practices."
  }
];

export default function Results() {
  return (
    <section className="results-section">
      <div className="container">
        <div className="results-grid">
          {results.map((item, index) => (
            <div key={index} className={`result-card reveal reveal-delay-${index}`}>
              <div className="result-icon">{item.icon}</div>
              <div className="result-info">
                <h3 className="result-value text-gradient">{item.value}</h3>
                <p className="result-label">{item.label}</p>
                <p className="result-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
