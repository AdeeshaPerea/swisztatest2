import React, { useState, useEffect, useRef } from 'react';
import './SwisztaTest2.css';
import Logo from '../components/Logo';
import SwisztaBrandCard from '../components/SwisztaBrandCard';
import ExcellenceBanner from '../components/ExcellenceBanner';
import LuxuryCareersShowcase from '../components/LuxuryCareersShowcase';
import { 
  Play, Pause, ArrowRight, Phone, Mail, Volume2, VolumeX, Settings, Maximize2, 
  ChevronUp, CheckCircle, Award, Globe, Building, Users, Clock, 
  Sparkles, ShieldCheck, Shirt, Utensils, Wrench, Menu, X, ArrowUpRight,
  ChevronRight, MapPin, Printer, Leaf, HardHat, Bell, Home
} from 'lucide-react';

export default function SwisztaTest2({ 
  onOpenQuote, 
  onOpenVideo, 
  onSelectService, 
  onOpenClients,
  currentVersion = 2,
  onSwitchVersion 
}) {
  const [navOpen, setNavOpen] = useState(false);
  const [backToTopVisible, setBackToTopVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoSeconds, setVideoSeconds] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [activeSection, setActiveSection] = useState('top');
  const [animatedStats, setAnimatedStats] = useState({
    established: 1982,
    countries: 12,
    sites: 150,
    professionals: 10000,
    years: 50,
    guests: 1
  });

  const totalVideoSeconds = 138; // 02:18

  /* Lock body scroll when mobile nav is open */
  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [navOpen]);

  /* Video player progress loop */
  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setVideoSeconds(prev => (prev + 1) % totalVideoSeconds);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  /* Scroll event listener for header, scrollspy & back-to-top */
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setBackToTopVisible(scrollPos > 400);

      const header = document.getElementById('siteHeaderTest2');
      if (header) {
        header.style.boxShadow = scrollPos > 20 
          ? '0 8px 28px -12px rgba(58,13,16,0.35)' 
          : 'none';
      }

      // Scrollspy active section detection
      const sections = ['top', 'about', 'services', 'standard', 'careers', 'news', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Scroll reveal observer & stat counter trigger */
  useEffect(() => {
    const revealTargets = document.querySelectorAll(
      '.swiszta-test2 .service-card, .swiszta-test2 .why-item, .swiszta-test2 .news-card, .swiszta-test2 .about-copy, .swiszta-test2 .about-media, .swiszta-test2 .value, .swiszta-test2 .number, .swiszta-test2 .stat, .swiszta-test2 .partner-badge'
    );
    revealTargets.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('in-view'), (i % 6) * 70);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealTargets.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setNavOpen(false);
    setActiveSection(targetId);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const headerOffset = 80;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const formatTime = (s) => {
    const m = Math.floor(s / 60).toString().padStart(2, '0');
    const sec = Math.floor(s % 60).toString().padStart(2, '0');
    return `${m}:${sec}`;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const servicesData = [
    {
      id: 'housekeeping',
      title: 'HOUSEKEEPING',
      image: '/images/housekeeping_hero.jpg',
      icon: <Home size={22} color="#FFFFFF" />,
      description: 'Impeccable cleanliness and hygiene with exceptional attention to detail.'
    },
    {
      id: 'concierge',
      title: 'CONCIERGE & GUEST SERVICES',
      image: '/images/concierge_hero.jpg',
      icon: <Bell size={22} color="#FFFFFF" />,
      description: 'Creating memorable experiences with warmth, care and professionalism.'
    },
    {
      id: 'catering',
      title: 'FOOD & BEVERAGE',
      image: '/images/catering_hero.jpg',
      icon: <Utensils size={22} color="#FFFFFF" />,
      description: 'Culinary excellence and innovative dining experiences.'
    },
    {
      id: 'laundry',
      title: 'LAUNDRY & LINEN',
      image: '/images/laundry_hero.jpg',
      icon: <Shirt size={22} color="#FFFFFF" />,
      description: 'Hygienic, fresh and perfect linen care, every single time.'
    },
    {
      id: 'maintenance',
      title: 'ENGINEERING & FACILITY MANAGEMENT',
      image: '/images/maintenance_hero.jpg',
      icon: <Wrench size={22} color="#FFFFFF" />,
      description: 'Reliable, efficient and sustainable facilities management solutions.'
    }
  ];

  return (
    <div className="swiszta-test2" id="swisztaTest2Root">

      {/* Optional Top Version Switcher Ribbon */}
      {onSwitchVersion && (
        <div className="swiszta-version-ribbon">
          <div className="swiszta-version-info">
            <span className="swiszta-version-badge">Design Option 2</span>
            <span>Viewing: <strong>Luxury Maroon &amp; Gold Edition (Swiszta Test 2)</strong></span>
          </div>
          <button 
            className="swiszta-version-btn"
            onClick={() => onSwitchVersion(1)}
            title="Switch back to Design Option 1"
          >
            ← Switch to Design Option 1 (Classic Slate)
          </button>
        </div>
      )}

      {/* Top utility bar */}
      <div className="topbar">
        <div className="container topbar-inner">
          <span className="topbar-tagline">
            <Sparkles size={14} className="text-accent" /> Excellence in Service. Every Time.
          </span>
          <div className="topbar-contact">
            <a href="mailto:enquiry@swiszta.com">
              <Mail size={13} /> enquiry@swiszta.com
            </a>
            <a href="tel:+912269141200" className="phone-highlight-link">
              <Phone size={15} className="phone-icon" />
              <span className="phone-number-text">+91 22 6914 1200</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile nav backdrop */}
      {navOpen && (
        <div className="nav-backdrop" onClick={() => setNavOpen(false)}></div>
      )}

      {/* Site Header / Nav */}
      <header className="site-header" id="siteHeaderTest2">
        <div className="container nav-inner">
          <a href="#top" className="logo" onClick={(e) => handleNavClick(e, 'top')}>
            <Logo variant="light" size="md" />
          </a>

          <nav className={`main-nav ${navOpen ? 'nav-open' : ''}`}>
            <a href="#top" className={activeSection === 'top' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'top')}>Home</a>
            <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'about')}>About Swiszta</a>
            <a href="#services" className={activeSection === 'services' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'services')}>Services</a>
            <a href="#standard" className={activeSection === 'standard' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'standard')}>Our Standard</a>
            <a href="#careers" className={activeSection === 'careers' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'careers')}>Careers</a>
            <a href="#news" className={activeSection === 'news' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'news')}>What's New</a>
            <a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
          </nav>

          <button 
            className="btn btn-primary nav-cta"
            onClick={onOpenQuote}
          >
            Enquire Now <span className="arrow">&rarr;</span>
          </button>

          <button 
            className={`nav-toggle ${navOpen ? 'active' : ''}`} 
            aria-label="Toggle menu"
            onClick={() => setNavOpen(!navOpen)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      {/* Hero Section - Excellence In Every Detail Mockup Design */}
      <div id="top">
        <ExcellenceBanner 
          onOpenQuote={onOpenQuote}
          onOpenVideo={onOpenVideo}
          onDiscoverServices={() => {
            const targetEl = document.getElementById('services');
            if (targetEl) {
              const headerOffset = 80;
              const elementPosition = targetEl.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
              window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
          }}
        />
      </div>

      {/* Stat Strip */}
      <section className="stat-strip">
        <div className="container stat-grid">
          <div className="stat">
            <div className="stat-icon-wrapper">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#ffcf40" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21h18" />
                <path d="M5 21V7l7-4 7 4v14" />
                <path d="M9 21v-4a3 3 0 0 1 6 0v4" />
                <path d="M9 9h.01M15 9h.01M9 13h.01M15 13h.01" />
              </svg>
            </div>
            <div className="stat-info">
              <strong>1982</strong>
              <small>ESTABLISHED</small>
            </div>
          </div>

          <div className="stat">
            <div className="stat-icon-wrapper">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#ffcf40" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <div className="stat-info">
              <strong>12+</strong>
              <small>COUNTRIES</small>
            </div>
          </div>

          <div className="stat">
            <div className="stat-icon-wrapper">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#ffcf40" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18" />
                <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                <path d="M10 6h4M10 10h4M10 14h4M10 18h4" />
              </svg>
            </div>
            <div className="stat-info">
              <strong>150+</strong>
              <small>HOTEL SITES</small>
            </div>
          </div>

          <div className="stat">
            <div className="stat-icon-wrapper">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#ffcf40" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div className="stat-info">
              <strong>10,000+</strong>
              <small>TRAINED PROFESSIONALS</small>
            </div>
          </div>

          <div className="stat">
            <div className="stat-icon-wrapper">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#ffcf40" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                <path d="M4 22h16" />
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
              </svg>
            </div>
            <div className="stat-info">
              <strong>50+</strong>
              <small>YEARS OF EXCELLENCE</small>
            </div>
          </div>

          <div className="stat">
            <div className="stat-icon-wrapper">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#ffcf40" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div className="stat-info">
              <strong>24/7</strong>
              <small>OPERATIONAL SUPPORT</small>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="services" id="services">
        <div className="container">
          <p className="section-eyebrow">&mdash; Our Core Services &mdash;</p>
          <div className="services-grid">
            {servicesData.map((svc) => (
              <article 
                className="service-card" 
                data-service={svc.id} 
                key={svc.id}
                onClick={() => onSelectService ? onSelectService(svc) : onOpenQuote()}
                style={{ cursor: 'pointer' }}
              >
                <div 
                  className={`service-media service-media-${svc.id}`} 
                  style={{ backgroundImage: `url(${svc.image})` }}
                >
                  <div className="service-media-overlay"></div>
                </div>
                <div className="service-icon">{svc.icon}</div>
                <h3>{svc.title}</h3>
                <p>{svc.description}</p>
                <button 
                  className="link-more"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onSelectService) {
                      onSelectService(svc);
                    } else {
                      onOpenQuote();
                    }
                  }}
                >
                  Learn more <span className="arrow">&rarr;</span>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About & Why Choose Showcase Section (Matching User Mockup) */}
      <section className="about-showcase-section" id="about">
        <div className="container">
          <div className="about-showcase-grid">
            
            {/* Left Copy Block */}
            <div className="about-showcase-copy">
              <div className="about-eyebrow-line">
                <span className="eyebrow-text">ABOUT SWISZTA</span>
                <span className="eyebrow-divider"></span>
                <span className="eyebrow-diamond">◆</span>
              </div>

              <h2 className="about-showcase-heading">
                50+ Years of<br />
                <span className="red-heading-accent">Trust &amp; Excellence</span>
              </h2>

              <p className="about-showcase-desc">
                Since 1982, Swiszta has been at the forefront of hospitality services, partnering with the 
                world's leading hotels to deliver integrated solutions that create exceptional experiences, 
                build trust and make a positive impact.
              </p>

              {/* 4 Value Pillars Row */}
              <div className="about-pillars-row">
                <div className="pillar-item">
                  <div className="pillar-icon">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#9a111a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div className="pillar-label">
                    <span className="black-txt">People</span>
                    <span className="red-txt">First</span>
                  </div>
                </div>

                <div className="pillar-item">
                  <div className="pillar-icon">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#9a111a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <polygon points="12 8 13.09 10.26 15.5 10.61 13.75 12.31 14.16 14.74 12 13.6 9.84 14.74 10.25 12.31 8.5 10.61 10.91 10.26 12 8" />
                    </svg>
                  </div>
                  <div className="pillar-label">
                    <span className="black-txt">Quality</span>
                    <span className="red-txt">Driven</span>
                  </div>
                </div>

                <div className="pillar-item">
                  <div className="pillar-icon">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#9a111a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="M12 8v8M8 12h8" />
                    </svg>
                  </div>
                  <div className="pillar-label">
                    <span className="black-txt">Sustainable</span>
                    <span className="red-txt">Future</span>
                  </div>
                </div>

                <div className="pillar-item">
                  <div className="pillar-icon">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#9a111a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </div>
                  <div className="pillar-label">
                    <span className="black-txt">Integrity &amp;</span>
                    <span className="red-txt">Trust</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button className="about-showcase-btn" onClick={onOpenQuote}>
                MORE ABOUT SWISZTA <span className="arrow">&rarr;</span>
              </button>
            </div>

            {/* Right Media Frame - Grand Hotel Lounge Image */}
            <div className="about-showcase-media">
              <img 
                src="/images/swiszta_trust_excellence_lounge.jpg" 
                alt="SWISZTA 50+ Years of Trust &amp; Excellence Grand Hotel Lounge" 
                className="about-lounge-img"
              />
            </div>

          </div>

          {/* Section Divider: WHY CHOOSE SWISZTA */}
          <div className="why-choose-divider-row">
            <span className="divider-line"></span>
            <div className="divider-content">
              <span className="diamond">◆</span>
              <span className="divider-title">WHY CHOOSE SWISZTA</span>
              <span className="diamond">◆</span>
            </div>
            <span className="divider-line"></span>
          </div>

          {/* 6 Feature Columns Grid */}
          <div className="why-choose-features-grid" id="standard">
            <div className="why-feature-card">
              <div className="why-feature-icon">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#9a111a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polygon points="12 8 13.09 10.26 15.5 10.61 13.75 12.31 14.16 14.74 12 13.6 9.84 14.74 10.25 12.31 8.5 10.61 10.91 10.26 12 8" />
                </svg>
              </div>
              <div className="why-feature-text">
                <strong className="title">Quality Driven</strong>
                <span className="subtext">We never compromise</span>
              </div>
            </div>

            <div className="why-feature-card">
              <div className="why-feature-icon">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#9a111a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div className="why-feature-text">
                <strong className="title">Trained Professionals</strong>
                <span className="subtext">Expertise you can rely on</span>
              </div>
            </div>

            <div className="why-feature-card">
              <div className="why-feature-icon">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#9a111a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
              </div>
              <div className="why-feature-text">
                <strong className="title">Innovative Solutions</strong>
                <span className="subtext">Technology &amp; processes</span>
              </div>
            </div>

            <div className="why-feature-card">
              <div className="why-feature-icon">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#9a111a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polygon points="12 8 13.09 10.26 15.5 10.61 13.75 12.31 14.16 14.74 12 13.6 9.84 14.74 10.25 12.31 8.5 10.61 10.91 10.26 12 8" />
                </svg>
              </div>
              <div className="why-feature-text">
                <strong className="title">Sustainable Operations</strong>
                <span className="subtext">For a better tomorrow</span>
              </div>
            </div>

            <div className="why-feature-card">
              <div className="why-feature-icon">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#9a111a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div className="why-feature-text">
                <strong className="title">24/7 Support</strong>
                <span className="subtext">Always here for you</span>
              </div>
            </div>

            <div className="why-feature-card">
              <div className="why-feature-icon">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#9a111a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <div className="why-feature-text">
                <strong className="title">Global Presence</strong>
                <span className="subtext">Local understanding</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Partners Banner with Ticker & Portfolio Modal Trigger */}
      <section className="partners">
        <div className="container">
          <div className="partners-header">
            <p className="section-eyebrow">&mdash; Proud Partner of Leading Hotel Brands &mdash;</p>
            <button className="partner-portfolio-btn" onClick={onOpenClients}>
              View Client Portfolio <ArrowUpRight size={14} />
            </button>
          </div>

          <div className="partner-ticker">
            <div className="partner-ticker-track">
              {['TAJ', 'THE OBEROI', 'JUMEIRAH', 'JW MARRIOTT', 'HYATT', 'HILTON', 'IHG', 'WYNDHAM', 'CROWN HOTELS', 'NOVOTEL', 'ACCOR', 'RADISSON BLU', 'TAJ', 'THE OBEROI', 'JUMEIRAH', 'JW MARRIOTT', 'HYATT', 'HILTON', 'IHG', 'WYNDHAM', 'CROWN HOTELS', 'NOVOTEL', 'ACCOR', 'RADISSON BLU'].map((brand, idx) => (
                <div 
                  className="partner-badge" 
                  key={idx}
                  onClick={onOpenClients}
                  title={`View details for ${brand}`}
                >
                  <Building size={16} className="partner-badge-icon" />
                  <span>{brand}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Careers & Stat Bar Showcase (Matching Mockup Image 2) */}
      <section id="careers">
        <LuxuryCareersShowcase onExploreCareers={onOpenQuote} />
      </section>

      {/* News Section */}
      <section className="news" id="news">
        <div className="container">
          <p className="section-eyebrow">&mdash; What's New &mdash;</p>
          <div className="news-grid">
            <article className="news-card">
              <div 
                className="news-media" 
                style={{ backgroundImage: `url('/images/news/expo.png')` }}
              >
                <span className="news-date"><strong>15</strong>MAY</span>
              </div>
              <h4>Swiszta Expands Partnership with Leading Hotel Group</h4>
              <a href="#news" className="link-more" onClick={(e) => { e.preventDefault(); onOpenQuote(); }}>
                Read more <span className="arrow">&rarr;</span>
              </a>
            </article>

            <article className="news-card">
              <div 
                className="news-media" 
                style={{ backgroundImage: `url('/images/news/academy.png')` }}
              >
                <span className="news-date"><strong>25</strong>APR</span>
              </div>
              <h4>New Training Academy Launched for Excellence in Hotel Services</h4>
              <a href="#news" className="link-more" onClick={(e) => { e.preventDefault(); onOpenQuote(); }}>
                Read more <span className="arrow">&rarr;</span>
              </a>
            </article>

            <article className="news-card">
              <div 
                className="news-media" 
                style={{ backgroundImage: `url('/images/news/ev.png')` }}
              >
                <span className="news-date"><strong>10</strong>APR</span>
              </div>
              <h4>Sustainability Initiative Awarded for Green Operations</h4>
              <a href="#news" className="link-more" onClick={(e) => { e.preventDefault(); onOpenQuote(); }}>
                Read more <span className="arrow">&rarr;</span>
              </a>
            </article>

            <article className="news-card">
              <div 
                className="news-media" 
                style={{ backgroundImage: `url('/images/news/people.png')` }}
              >
                <span className="news-date"><strong>02</strong>APR</span>
              </div>
              <h4>Celebrating Our Amazing Team Across the Globe</h4>
              <a href="#news" className="link-more" onClick={(e) => { e.preventDefault(); onOpenQuote(); }}>
                Read more <span className="arrow">&rarr;</span>
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* Luxury Red & Gold Footer */}
      <footer className="site-footer" id="contact">
        <div className="container footer-grid-container">
          <div className="footer-grid">
            
            {/* Column 1: Brand with Luxury Hotel Lounge Background */}
            <SwisztaBrandCard />

            {/* Column 2: Quick Links */}
            <div className="footer-col-nav">
              <h5 className="footer-col-title">QUICK LINKS</h5>
              <div className="gold-title-underline"></div>
              <ul className="footer-links-list">
                <li><a href="#top" onClick={scrollToTop}><span>Home</span> <ChevronRight size={14} className="link-chevron" /></a></li>
                <li><a href="#about"><span>About Swiszta</span> <ChevronRight size={14} className="link-chevron" /></a></li>
                <li><a href="#services"><span>Services</span> <ChevronRight size={14} className="link-chevron" /></a></li>
                <li><a href="#standard"><span>Our Standard</span> <ChevronRight size={14} className="link-chevron" /></a></li>
                <li><a href="#careers"><span>Careers</span> <ChevronRight size={14} className="link-chevron" /></a></li>
                <li><a href="#news"><span>What's New</span> <ChevronRight size={14} className="link-chevron" /></a></li>
                <li><a href="#contact"><span>Contact</span> <ChevronRight size={14} className="link-chevron" /></a></li>
              </ul>
            </div>

            {/* Column 3: Our Services */}
            <div className="footer-col-services">
              <h5 className="footer-col-title">OUR SERVICES</h5>
              <div className="gold-title-underline"></div>
              <ul className="footer-service-rows">
                <li>
                  <Home size={22} className="svc-gold-icon" />
                  <a href="#services">Housekeeping</a>
                </li>
                <li>
                  <Bell size={22} className="svc-gold-icon" />
                  <a href="#services">Concierge &amp; Guest Services</a>
                </li>
                <li>
                  <Utensils size={22} className="svc-gold-icon" />
                  <a href="#services">Food &amp; Beverage</a>
                </li>
                <li>
                  <Shirt size={22} className="svc-gold-icon" />
                  <a href="#services">Laundry &amp; Linen</a>
                </li>
                <li>
                  <Wrench size={22} className="svc-gold-icon" />
                  <a href="#services">Facility Management &amp; Maintenance</a>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact Us */}
            <div className="footer-col-contact">
              <h5 className="footer-col-title">CONTACT US</h5>
              <div className="gold-title-underline"></div>
              <ul className="footer-contact-list">
                <li>
                  <div className="red-icon-ring"><MapPin size={15} /></div>
                  <div className="contact-text">
                    1/42 Global Drive<br />
                    Tullamarine VIC 3049<br />
                    Australia
                  </div>
                </li>
                <li>
                  <div className="red-icon-ring"><Phone size={15} /></div>
                  <div className="contact-text">
                    <a href="tel:1300286579">1300 286 579</a>
                  </div>
                </li>
                <li>
                  <div className="red-icon-ring"><Printer size={15} /></div>
                  <div className="contact-text">
                    Fax: 03 9335 6677
                  </div>
                </li>
                <li>
                  <div className="red-icon-ring"><Mail size={15} /></div>
                  <div className="contact-text">
                    <a href="mailto:hello@swiszta.com">hello@swiszta.com</a>
                  </div>
                </li>
                <li>
                  <div className="red-icon-ring"><Globe size={15} /></div>
                  <div className="contact-text">
                    <a href="https://www.swiszta.com" target="_blank" rel="noopener noreferrer">www.swiszta.com</a>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Certifications Bar */}
        <div className="footer-certifications-section">
          <div className="cert-header-title">
            <span className="gold-rule"></span>
            <span className="cert-title-txt">◆ OUR CERTIFICATIONS ◆</span>
            <span className="gold-rule"></span>
          </div>
          <div className="container">
            <div className="certifications-grid">
              
              {/* Cert 1 */}
              <div className="cert-card">
                <div className="cert-badge-ring green-badge">
                  <Leaf size={22} className="cert-icon" />
                </div>
                <div className="cert-info">
                  <div className="cert-code">ISO 14001:2015</div>
                  <div className="cert-desc">Environmental<br />Management System</div>
                </div>
              </div>

              {/* Cert 2 */}
              <div className="cert-card">
                <div className="cert-badge-ring orange-badge">
                  <HardHat size={22} className="cert-icon" />
                </div>
                <div className="cert-info">
                  <div className="cert-code">ISO 45001:2018</div>
                  <div className="cert-desc">Occupational Health &amp; Safety<br />Management System</div>
                </div>
              </div>

              {/* Cert 3 */}
              <div className="cert-card">
                <div className="cert-badge-ring red-badge">
                  <Award size={22} className="cert-icon" />
                </div>
                <div className="cert-info">
                  <div className="cert-code">ISO 9001:2015</div>
                  <div className="cert-desc">Quality Management<br />System</div>
                </div>
              </div>

              {/* Cert 4 */}
              <div className="cert-card">
                <div className="cert-badge-ring blue-badge">
                  <span className="cm3-txt">cm³</span>
                </div>
                <div className="cert-info">
                  <div className="cert-code">CM3 ACCREDITED</div>
                  <div className="cert-desc">Integrated Facilities<br />Management</div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="container bottom-bar-inner">
            <div className="copyright-txt">
              &copy; 2026 Swiszta. All Rights Reserved.
            </div>

            <div className="v-sep">|</div>

            <div className="bottom-meta-item">
              <MapPin size={14} className="meta-icon" />
              <span>1/42 Global Drive, Tullamarine VIC 3049, Australia</span>
            </div>

            <div className="v-sep">|</div>

            <div className="bottom-meta-item">
              <Mail size={14} className="meta-icon" />
              <a href="mailto:hello@swiszta.com">hello@swiszta.com</a>
            </div>

            <div className="v-sep">|</div>

            <div className="bottom-meta-item">
              <Phone size={14} className="meta-icon" />
              <a href="tel:1300286579">1300 286 579</a>
            </div>

            <div className="v-sep">|</div>

            <div className="bottom-meta-item">
              <Printer size={14} className="meta-icon" />
              <span>Fax: 03 9335 6677</span>
            </div>

            <div className="bottom-end-mark">
              <div className="mini-tiles">
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
                <div className="tile"></div>
              </div>
            </div>
          </div>
        </div>

      </footer>

      {/* Floating Back to Top Button */}
      <button 
        className={`back-to-top ${backToTopVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <ChevronUp size={22} />
      </button>

    </div>
  );
}
