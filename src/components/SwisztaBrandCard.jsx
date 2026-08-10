import React from 'react';

/**
 * SwisztaBrandCard Component
 * Displays the luxury brand card with hotel lounge background,
 * golden diamond dividers, "Care. Comfort. Excellence." tagline,
 * and glowing golden social media buttons. Matches exact user mockup design.
 */
export default function SwisztaBrandCard({ className = '', style = {} }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`footer-brand-col ${className}`} style={style}>
      <a 
        href="#top" 
        className="footer-logo-link" 
        onClick={(e) => { e.preventDefault(); scrollToTop(); }}
        title="SWISZTA Hotel Services"
      >
        <div className="custom-footer-logo">
          <div className="logo-icon-grid">
            <div className="tile"></div>
            <div className="tile"></div>
            <div className="tile"></div>
            <div className="tile"></div>
          </div>
          <div className="logo-text-block">
            <div className="brand-name">
              <span className="white-txt">SWIS</span>
              <span className="red-txt">ZTA</span>
            </div>
            <span className="sub-txt">HOTEL SERVICES</span>
          </div>
        </div>
      </a>

      <div className="gold-diamond-divider">
        <span className="line"></span>
        <span className="diamond">◆</span>
        <span className="line"></span>
      </div>

      <p className="footer-tagline">Care. Comfort. Excellence.</p>

      <div className="gold-diamond-divider">
        <span className="line"></span>
        <span className="diamond">◆</span>
        <span className="line"></span>
      </div>

      <div className="footer-social-circle-row">
        <a href="#" aria-label="Facebook" className="social-circle-btn" onClick={(e) => e.preventDefault()} title="Facebook">
          <span className="social-txt-f">f</span>
        </a>
        <a href="#" aria-label="LinkedIn" className="social-circle-btn" onClick={(e) => e.preventDefault()} title="LinkedIn">
          <span className="social-txt-in">in</span>
        </a>
        <a href="#" aria-label="Instagram" className="social-circle-btn" onClick={(e) => e.preventDefault()} title="Instagram">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
        </a>
        <a href="#" aria-label="YouTube" className="social-circle-btn" onClick={(e) => e.preventDefault()} title="YouTube">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#ffffff">
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#0b0204"/>
          </svg>
        </a>
      </div>
    </div>
  );
}
