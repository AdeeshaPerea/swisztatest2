import React from 'react';
import Logo from './Logo';
import { ArrowRight, Play } from 'lucide-react';

/**
 * ExcellenceBanner Component
 * Recreates the exact high-impact visual design from the user mockup:
 * - Official SWISZTA Logo with horizontal side accent rules
 * - Bold red and dark charcoal typography "EXCELLENCE IN EVERY DETAIL"
 * - Solid red underline accent bar
 * - Subtitle with highlighted "outstanding results." text
 * - Luxury hotel reception lobby background image with soft white gradient fade
 * - Interactive action buttons
 */
export default function ExcellenceBanner({ 
  onOpenQuote, 
  onOpenVideo, 
  onDiscoverServices,
  className = '', 
  style = {} 
}) {
  return (
    <section className={`excellence-banner-section ${className}`} style={style}>
      {/* Background Video Container */}
      <div className="banner-bg-container">
        <video 
          className="banner-bg-video"
          autoPlay 
          loop 
          muted 
          playsInline
          poster="/images/luxury_reception_banner.png"
        >
          <source src="/videos/swiszta_brand_video.mp4" type="video/mp4" />
          <img 
            src="/images/luxury_reception_banner.png" 
            alt="Luxury Hotel Reception Lobby" 
            className="banner-bg-photo"
          />
        </video>
        {/* Soft Left-to-Right Fade Overlay Mask */}
        <div className="banner-fade-mask"></div>
      </div>

      {/* Main Content Area */}
      <div className="excellence-banner-content container">
        <div className="banner-left-card">
          {/* Official SWISZTA Logo Header with Gold Accent Lines */}
          <div className="banner-logo-wrapper">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '60px', height: '2px', backgroundColor: '#E5C158' }}></div>
              <Logo size="md" variant="dark" />
              <div style={{ width: '60px', height: '2px', backgroundColor: '#E5C158' }}></div>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="excellence-headline">
            <span className="text-line gold-text">EXCELLENCE</span>
            <span className="text-line white-text">IN EVERY</span>
            <span className="text-line gold-text">DETAIL</span>
          </h1>

          {/* Solid Red Underline Bar */}
          <div className="red-accent-bar"></div>

          {/* Subtitle Description */}
          <p className="excellence-subtext">
            Delivering seamless hospitality solutions that elevate guest experiences and drive{' '}
            <strong className="bold-red-text">outstanding results.</strong>
          </p>

          {/* Action Buttons */}
          <div className="excellence-cta-group">
            {onOpenQuote && (
              <button 
                className="excellence-btn excellence-btn-primary" 
                onClick={onOpenQuote}
              >
                <span>GET A QUOTE</span>
                <ArrowRight size={16} />
              </button>
            )}

            {onOpenVideo && (
              <button 
                className="excellence-btn excellence-btn-secondary" 
                onClick={onOpenVideo}
              >
                <Play size={15} fill="#E5C158" color="#E5C158" />
                <span>WATCH VIDEO</span>
              </button>
            )}

            {onDiscoverServices && (
              <a 
                href="#services" 
                className="excellence-btn excellence-btn-link"
                onClick={(e) => {
                  e.preventDefault();
                  onDiscoverServices();
                }}
              >
                Explore Services &rarr;
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
