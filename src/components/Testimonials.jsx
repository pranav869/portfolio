import { Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    quote: "Pranav didn't just build a website; he built a growth engine for our clinic. Our online bookings increased by 40% in the first month. His attention to detail is truly world-class.",
    author: "Dr. Arun Kumar",
    role: "CEO, Smile Elite Dental"
  },
  {
    quote: "The speed and design of our new platform are incredible. Our members love the new booking flow, and we've seen a significant jump in lead quality. Highly recommended for any business.",
    author: "Siddharth",
    role: "Founder, United Turf Pro"
  },
  {
    quote: "Professional, fast, and results-driven. Pranav delivered exactly what he promised: a premium dark-themed site that actually converts. Best investment for our gym.",
    author: "Vikram R.",
    role: "Director, APEX Gym"
  }
];

export default function Testimonials() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-header" style={{ marginBottom: '3rem' }}>
          <h2 className="heading-lg">Results that<br /><span className="text-gradient">speak for themselves.</span></h2>
          <p className="subtitle">From the founders and teams who trust me with their brand.</p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((test, index) => (
            <div key={index} className={`testimonial-card glass-card reveal reveal-delay-${index}`}>
              <Quote className="quote-icon" size={32} />
              <p className="testimonial-text">"{test.quote}"</p>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>{test.author}</h4>
                  <p>{test.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
