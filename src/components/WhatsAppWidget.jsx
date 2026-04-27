import { X } from 'lucide-react';
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
        <svg
          viewBox="0 0 32 32"
          className="whatsapp-icon"
          aria-hidden="true"
          focusable="false"
        >
          <path
            fill="currentColor"
            d="M19.11 17.25c-.25-.12-1.46-.72-1.69-.8-.23-.09-.4-.12-.57.12-.17.25-.66.8-.8.97-.15.17-.3.2-.55.07-.25-.12-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.38.11-.5.11-.11.25-.3.37-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.12-.57-1.37-.78-1.88-.2-.48-.41-.41-.57-.41h-.48c-.17 0-.45.06-.69.32-.23.25-.88.86-.88 2.1 0 1.23.9 2.42 1.03 2.58.12.17 1.76 2.69 4.27 3.77.6.26 1.06.42 1.42.54.6.19 1.15.16 1.58.1.48-.07 1.46-.6 1.67-1.17.21-.57.21-1.06.15-1.17-.06-.1-.23-.16-.48-.28z"
          />
          <path
            fill="currentColor"
            d="M16 4.8c-6.17 0-11.2 5.02-11.2 11.2 0 1.98.52 3.91 1.5 5.61L4.8 27.2l5.73-1.5a11.14 11.14 0 0 0 5.47 1.43c6.17 0 11.2-5.02 11.2-11.2S22.17 4.8 16 4.8zm0 20.46c-1.76 0-3.48-.47-4.99-1.37l-.36-.21-3.4.89.91-3.31-.23-.38a9.28 9.28 0 0 1-1.43-4.96c0-5.15 4.2-9.35 9.36-9.35 2.5 0 4.85.97 6.61 2.74a9.3 9.3 0 0 1 2.74 6.61c0 5.15-4.2 9.34-9.35 9.34z"
          />
        </svg>
        <span className="pulse-ring"></span>
      </button>
    </div>
  );
}
