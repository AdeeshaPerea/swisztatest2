import React, { useState, useEffect, useRef } from 'react';
import './SwisztaTest2.css';
import { 
  Play, Pause, ArrowRight, Phone, Mail, Volume2, VolumeX, Settings, Maximize2, 
  ChevronUp, CheckCircle, Award, Globe, Building, Users, Clock, 
  Sparkles, ShieldCheck, Shirt, Utensils, Wrench, Menu, X, ArrowUpRight
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
  const [isPlaying, setIsPlaying] = useState(false);
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
      title: 'Housekeeping',
      image: '/images/housekeeping_hero.jpg',
      icon: '✨',
      description: 'Impeccable cleanliness and hygiene with exceptional attention to detail.'
    },
    {
      id: 'concierge',
      title: 'Concierge & Guest Services',
      image: '/images/concierge_hero.jpg',
      icon: '🛎️',
      description: 'Creating memorable experiences with warmth, care and professionalism.'
    },
    {
      id: 'catering',
      title: 'Food & Beverage',
      image: '/images/catering_hero.jpg',
      icon: '🍳',
      description: 'Culinary excellence and innovative dining experiences.'
    },
    {
      id: 'laundry',
      title: 'Laundry & Linen',
      image: '/images/laundry_hero.jpg',
      icon: '🧺',
      description: 'Hygienic, fresh and perfect linen care, every single time.'
    },
    {
      id: 'maintenance',
      title: 'Facility Management & Maintenance',
      image: '/images/maintenance_hero.jpg',
      icon: '🔧',
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
            <a href="tel:+912269141200">
              <Phone size={13} /> +91 22 6914 1200
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
            <img src="/logo-header.svg" alt="Swiszta Hotel Services" className="site-logo-img" />
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

      {/* Hero Section */}
      <section className="hero" id="top">
        <div className="hero-media">
          <img 
            src="/images/concierge_hero.jpg" 
            alt="Luxury Hospitality background" 
            className="hero-bg-img"
            onError={(e) => e.target.style.display = 'none'}
          />
          <div className="hero-scene">
            <div className="scene-figure"></div>
            <div className="scene-linens"></div>
          </div>
          <div className="hero-overlay"></div>
        </div>

        <div className="container hero-content">
          <p className="eyebrow">Trusted Hotel Services Partner &mdash; Est. 1982</p>
          <h1>Elevating<br />Hotel Services<br /><span className="text-accent">Every Day</span></h1>
          <p className="hero-copy">
            Housekeeping, guest services, food &amp; beverage and facility management &mdash; 
            delivered by one dependable partner, so every stay feels effortless.
          </p>
          <div className="hero-actions">
            <a href="#services" className="btn btn-primary">
              Discover Our Services <span className="arrow">&rarr;</span>
            </a>
            <button 
              className="btn btn-ghost" 
              onClick={() => {
                setIsPlaying(!isPlaying);
                if (onOpenVideo) onOpenVideo();
              }}
            >
              <span className="play-dot">
                {isPlaying ? <Pause size={10} /> : <Play size={10} />}
              </span> 
              {isPlaying ? 'Pause Video' : 'Watch Video'}
            </button>
          </div>
        </div>

        {/* Video Player Control Bar */}
        <div className="hero-player">
          <div 
            className="player-progress"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              const pct = clickX / rect.width;
              setVideoSeconds(Math.floor(pct * totalVideoSeconds));
            }}
          >
            <span style={{ width: `${(videoSeconds / totalVideoSeconds) * 100}%` }}></span>
          </div>
          <div className="player-controls container">
            <span className="player-time">
              {formatTime(videoSeconds)} / {formatTime(totalVideoSeconds)}
            </span>
            <div className="player-icons">
              <button 
                className="player-icon-btn" 
                title={isMuted ? 'Unmute' : 'Mute'}
                onClick={() => setIsMuted(!isMuted)}
              >
                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>
              <button className="player-icon-btn" title="Settings">
                <Settings size={16} />
              </button>
              <button 
                className="player-icon-btn" 
                title="Fullscreen Modal"
                onClick={onOpenVideo}
              >
                <Maximize2 size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stat Strip */}
      <section className="stat-strip">
        <div className="container stat-grid">
          <div className="stat">
            <span className="stat-icon">🏛️</span>
            <strong>1982</strong>
            <small>Established</small>
          </div>
          <div className="stat">
            <span className="stat-icon">🌐</span>
            <strong>12+</strong>
            <small>Countries</small>
          </div>
          <div className="stat">
            <span className="stat-icon">🏨</span>
            <strong>150+</strong>
            <small>Hotel Sites</small>
          </div>
          <div className="stat">
            <span className="stat-icon">👥</span>
            <strong>10,000+</strong>
            <small>Trained Professionals</small>
          </div>
          <div className="stat">
            <span className="stat-icon">🏆</span>
            <strong>50+</strong>
            <small>Years of Excellence</small>
          </div>
          <div className="stat">
            <span className="stat-icon">⏰</span>
            <strong>24/7</strong>
            <small>Operational Support</small>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="services" id="services">
        <div className="container">
          <p className="section-eyebrow">&mdash; Our Core Services &mdash;</p>
          <div className="services-grid">
            {servicesData.map((svc) => (
              <article className="service-card" key={svc.id}>
                <div 
                  className="service-media" 
                  style={{ backgroundImage: `url(${svc.image})` }}
                >
                  <div className="service-media-overlay"></div>
                </div>
                <div className="service-icon">{svc.icon}</div>
                <h3>{svc.title}</h3>
                <p>{svc.description}</p>
                <button 
                  className="link-more"
                  onClick={() => onSelectService ? onSelectService(svc) : onOpenQuote()}
                >
                  Learn more <span className="arrow">&rarr;</span>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container about-grid">
          <div className="about-copy">
            <p className="section-eyebrow">About Swiszta</p>
            <h2>50+ Years of<br /><span className="text-accent">Trust &amp; Excellence</span></h2>
            <p>
              Since 1982, Swiszta has been at the forefront of hotel services, partnering with the 
              world's leading hotels to deliver integrated solutions that create exceptional experiences, 
              build trust and make a positive impact.
            </p>
            <div className="value-grid">
              <div className="value"><span>🤝</span> People First</div>
              <div className="value"><span>🏆</span> Quality Driven</div>
              <div className="value"><span>🌱</span> Sustainable Future</div>
              <div className="value"><span>🛡️</span> Integrity &amp; Trust</div>
            </div>
            <button className="btn btn-primary" onClick={onOpenQuote}>
              More About Swiszta <span className="arrow">&rarr;</span>
            </button>
          </div>
          <div className="about-media">
            <div 
              className="about-scene" 
              style={{ backgroundImage: `url('/images/swiszta_team.png')` }}
            >
              <div className="about-scene-overlay"></div>
              <button className="watch-btn" onClick={onOpenVideo}>
                <span className="play-dot"><Play size={10} /></span> Watch Our Corporate Video
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why" id="standard">
        <div className="container">
          <p className="section-eyebrow">&mdash; Why Choose Swiszta &mdash;</p>
          <div className="why-grid">
            <div className="why-item">
              <span className="why-icon">🛡️</span>
              <strong>Quality Driven</strong>
              <small>We never compromise</small>
            </div>
            <div className="why-item">
              <span className="why-icon">👥</span>
              <strong>Trained Professionals</strong>
              <small>Expertise you can rely on</small>
            </div>
            <div className="why-item">
              <span className="why-icon">💡</span>
              <strong>Innovative Solutions</strong>
              <small>Technology and process</small>
            </div>
            <div className="why-item">
              <span className="why-icon">🌱</span>
              <strong>Sustainable Operations</strong>
              <small>For a better tomorrow</small>
            </div>
            <div className="why-item">
              <span className="why-icon">⏰</span>
              <strong>24/7 Support</strong>
              <small>Always here for you</small>
            </div>
            <div className="why-item">
              <span className="why-icon">🌐</span>
              <strong>Global Presence</strong>
              <small>Local understanding</small>
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

      {/* Numbers Band */}
      <section className="numbers-band">
        <div className="container numbers-grid">
          <div className="number">
            <strong>1M+</strong>
            <small>Guests Served Annually</small>
          </div>
          <div className="number">
            <strong>98%</strong>
            <small>Client Satisfaction</small>
          </div>
          <div className="number">
            <strong>99.8%</strong>
            <small>Service Compliance</small>
          </div>
          <div className="number">
            <strong>GREEN</strong>
            <small>Sustainable Operations</small>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="careers" id="careers">
        <div className="container careers-inner">
          <div className="careers-copy">
            <p className="section-eyebrow eyebrow-light">Join Our Team</p>
            <h2>Build a Career in<br /><span className="text-accent">Hotel Services Excellence</span></h2>
            <p>Be part of a passionate team that takes pride in delivering extraordinary experiences every day.</p>
            <button className="btn btn-light" onClick={onOpenQuote}>
              Explore Careers <span className="arrow">&rarr;</span>
            </button>
          </div>
          <div 
            className="careers-media"
            style={{ backgroundImage: `url('/images/contact_hero.png')` }}
          >
            <div className="careers-media-overlay"></div>
          </div>
        </div>
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

      {/* Footer */}
      <footer className="site-footer" id="contact">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a href="#top" className="logo" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>
              <img src="/logo-footer.svg" alt="Swiszta Hotel Services" className="site-logo-img footer-logo-img" />
            </a>
            <p>Care. Comfort. Excellence.</p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="Instagram">ig</a>
              <a href="#" aria-label="YouTube">yt</a>
            </div>
          </div>

          <div className="footer-col">
            <h5>Quick Links</h5>
            <a href="#top" onClick={scrollToTop}>Home</a>
            <a href="#about">About Swiszta</a>
            <a href="#services">Services</a>
            <a href="#standard">Our Standard</a>
            <a href="#careers">Careers</a>
            <a href="#news">What's New</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-col">
            <h5>Our Services</h5>
            <a href="#services">Housekeeping</a>
            <a href="#services">Concierge &amp; Guest Services</a>
            <a href="#services">Food &amp; Beverage</a>
            <a href="#services">Laundry &amp; Linen</a>
            <a href="#services">Facility Management &amp; Maintenance</a>
          </div>

          <div className="footer-col">
            <h5>Contact Us</h5>
            <p>Swiszta House, 7, Sir P.M. Road,<br />Fort, Mumbai &ndash; 400 001, India</p>
            <p><a href="tel:+912269141200">+91 22 6914 1200</a></p>
            <p><a href="mailto:enquiry@swiszta.com">enquiry@swiszta.com</a></p>
            <p><a href="https://www.swiszta.com" target="_blank" rel="noopener noreferrer">www.swiszta.com</a></p>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>&copy; 2026 Swiszta. All Rights Reserved.</span>
          <span className="footer-links">
            <a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a> &nbsp;|&nbsp; 
            <a href="#" onClick={(e) => e.preventDefault()}>Terms &amp; Conditions</a>
          </span>
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
