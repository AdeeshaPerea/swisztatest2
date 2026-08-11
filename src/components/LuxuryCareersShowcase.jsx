import React from 'react';
import { ArrowRight, Globe, ThumbsUp, ShieldCheck, Leaf } from 'lucide-react';

/**
 * LuxuryCareersShowcase Component
 * Uses the exact user image /images/swiszta_team.png with precise right alignment
 * so ALL 4 staff members (Housekeeping, Concierge, Front Office, Kitchen) are 100% visible
 * alongside the solid crimson curved panel and gold trim.
 */
export default function LuxuryCareersShowcase({ onExploreCareers }) {
  return (
    <div className="luxury-careers-wrapper">
      
      {/* TOP PART: Luxury Burgundy & Gold Stat Bar */}
      <div className="luxury-stat-bar-container">
        
        {/* Right Side Desk Bell Background */}
        <div className="stat-bar-bell-bg">
          <img 
            src="/images/gold_hotel_desk_bell.png" 
            alt="Gold Hotel Reception Bell" 
            className="bell-photo" 
          />
        </div>

        {/* Left Side Burgundy Gradient Overlay with Gold Arc */}
        <div className="stat-bar-burgundy-overlay">
          {/* Gold Curved Divider Trim */}
          <svg className="stat-gold-curve" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L66,0 C74,25 73,70 58,100 L0,100 Z" fill="url(#burgundyGrad)" />
            <path d="M66,0 C74,25 73,70 58,100" stroke="url(#goldGrad)" strokeWidth="1.2" fill="none" />
            <defs>
              <linearGradient id="burgundyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7A0C16" />
                <stop offset="50%" stopColor="#58080F" />
                <stop offset="100%" stopColor="#3B0409" />
              </linearGradient>
              <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFE599" />
                <stop offset="50%" stopColor="#D4AF37" />
                <stop offset="100%" stopColor="#AA7C11" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Stat Badges Grid Content */}
        <div className="stat-badges-content">
          <div className="stat-badge-item">
            <div className="stat-gold-icon-ring">
              <Globe size={20} color="#F5D77F" />
            </div>
            <div className="stat-badge-text">
              <strong className="stat-number">1M+</strong>
              <span className="stat-label">GUESTS SERVED GLOBALLY</span>
            </div>
          </div>

          <div className="stat-divider-line"></div>

          <div className="stat-badge-item">
            <div className="stat-gold-icon-ring">
              <ThumbsUp size={20} color="#F5D77F" />
            </div>
            <div className="stat-badge-text">
              <strong className="stat-number">98%</strong>
              <span className="stat-label">CLIENT SATISFACTION</span>
            </div>
          </div>

          <div className="stat-divider-line"></div>

          <div className="stat-badge-item">
            <div className="stat-gold-icon-ring">
              <ShieldCheck size={20} color="#F5D77F" />
            </div>
            <div className="stat-badge-text">
              <strong className="stat-number">99.8%</strong>
              <span className="stat-label">SERVICE COMPLIANCE</span>
            </div>
          </div>

          <div className="stat-divider-line"></div>

          <div className="stat-badge-item">
            <div className="stat-gold-icon-ring">
              <Leaf size={20} color="#F5D77F" />
            </div>
            <div className="stat-badge-text">
              <strong className="stat-number">GREEN</strong>
              <span className="stat-label">SUSTAINABLE OPERATIONS</span>
            </div>
          </div>
        </div>

      </div>

      {/* BOTTOM PART: 100% Full-Width Luxury Careers Banner with swiszta_team.png */}
      <div className="careers-banner-section-outer">
        <div className="careers-banner-frame">
          
          {/* Right Side Team Background Photo: /images/swiszta_team.png */}
          <div className="careers-swiszta-photo-wrapper">
            <img 
              src="/images/swiszta_team.png" 
              alt="Swiszta Hospitality Team" 
              className="swiszta-team-img"
            />
          </div>

          {/* Left Solid Crimson Curved Panel Layer */}
          <div className="careers-crimson-curved-layer">
            <svg className="crimson-panel-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="crimsonSolidGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7A0C16" />
                  <stop offset="50%" stopColor="#55070E" />
                  <stop offset="100%" stopColor="#350408" />
                </linearGradient>
                <linearGradient id="goldCurveStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF0B3" />
                  <stop offset="50%" stopColor="#E5C158" />
                  <stop offset="100%" stopColor="#B38B22" />
                </linearGradient>
              </defs>
              <path d="M0,0 L76,0 C54,28 54,72 72,100 L0,100 Z" fill="url(#crimsonSolidGrad)" />
              <path d="M0,0 L76,0 C54,28 54,72 72,100" stroke="url(#goldCurveStroke)" strokeWidth="2.2" fill="none" />
            </svg>
          </div>

          {/* Left Readable Text Overlay Card */}
          <div className="careers-card-overlay">
            <div className="careers-eyebrow-group">
              <span className="careers-eyebrow-text">JOIN OUR TEAM</span>
              <div className="careers-gold-bar"></div>
            </div>

            <h2 className="careers-heading-title">
              <span className="title-white">Build a Career</span>
              <span className="title-gold">in Hospitality</span>
              <span className="title-gold">Excellence</span>
            </h2>

            <p className="careers-description">
              Be part of a passionate team that takes pride in delivering extraordinary experiences every day.
            </p>

            <button 
              className="careers-explore-btn"
              onClick={onExploreCareers}
            >
              <span>EXPLORE CAREERS</span>
              <ArrowRight size={18} className="btn-arrow" />
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}
