import { MessageCircle, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import './WhatsAppWidget.css';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const phoneNumber = "+91 8838250227";

  useEffect(() => {
    // Show tooltip after a short delay
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const message = "Hi Pranav, I'm interested in building a website. Can we discuss?";
    const sanitizedPhoneNumber = phoneNumber.replace(/\D/g, '');
    const whatsappUrl = `https://wa.me/${sanitizedPhoneNumber}?text=${encodeURIComponent(message)}`;
    const openedWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    if (!openedWindow) {
      window.location.href = whatsappUrl;
    }
  };

  return (
    <div className="whatsapp-widget">
      {showTooltip && !isOpen && (
        <div className="whatsapp-tooltip">
          <p>Need a website? Chat with me!</p>
          <button className="close-tooltip" onClick={() => setShowTooltip(false)}>
            <X size={12} />
          </button>
        </div>
      )}
      
      <button 
        className={`whatsapp-button ${isOpen ? 'active' : ''}`}
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setShowTooltip(true)}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
        <span className="pulse-ring"></span>
      </button>
    </div>
  );
}
