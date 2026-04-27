import { Mail, MessageSquare, Phone } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  return (
    <>
      <section id="contact" className="section-padding contact-section">
        <div className="container">
          <div className="contact-info-centered">
            <h2 className="heading-lg">Let's build your <br/><span className="text-gradient">next growth engine.</span></h2>
            <p className="subtitle mt-4">
              Available for new projects. Reach out via the direct links below for a faster response.
            </p>
            
            <div className="contact-methods mt-6">
              <a href="mailto:mainsjee237@gmail.com" className="contact-method-link">
                <div className="method-icon"><Mail size={20} /></div>
                <div className="method-text">mainsjee237@gmail.com</div>
              </a>
              <a href="tel:+918838250227" className="contact-method-link mt-4">
                <div className="method-icon" style={{backgroundColor: '#38bdf8'}}><Phone size={20} /></div>
                <div className="method-text">Call +91 8838250227</div>
              </a>
              <a href="https://wa.me/918838250227?text=Hi%20Pranav%2C%20I%27m%20interested%20in%20building%20a%20website." className="contact-method-link mt-4" target="_blank" rel="noreferrer">
                <div className="method-icon" style={{backgroundColor: '#25D366'}}><MessageSquare size={20} /></div>
                <div className="method-text">Message on WhatsApp</div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer border-t border-glass">
        <div className="container footer-container">
          <div className="logo text-xl font-bold">Pranav<span className="text-gradient">.</span></div>
          <p className="footer-text">© {new Date().getFullYear()} Pranav. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
