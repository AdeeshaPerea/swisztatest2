import React, { useRef, useEffect } from 'react';
import { X } from 'lucide-react';

export default function VideoModal({ isOpen, onClose }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        style={{ 
          maxWidth: '920px', 
          width: '95%',
          padding: 0, 
          overflow: 'hidden', 
          background: '#000000', 
          borderRadius: '12px',
          boxShadow: '0 24px 60px rgba(0,0,0,0.8)',
          border: '1px solid rgba(212, 175, 55, 0.4)'
        }} 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Luxury Top Header Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 20px',
          background: 'linear-gradient(90deg, #3A0D10 0%, #1A0507 100%)',
          borderBottom: '1px solid rgba(212, 175, 55, 0.3)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#C9962F' }}></span>
            <h3 style={{ margin: 0, fontSize: '0.95rem', color: '#FFFFFF', fontWeight: 700, letterSpacing: '0.04em', fontFamily: 'Playfair Display, Georgia, serif' }}>
              SWISZTA HOSPITALITY EXCELLENCE SHOWCASE
            </h3>
          </div>
          <button 
            className="modal-close-btn" 
            onClick={onClose} 
            aria-label="Close video"
            style={{ 
              background: 'rgba(255,255,255,0.12)', 
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* HTML5 Native MP4 Video Player */}
        <div style={{ position: 'relative', width: '100%', background: '#000' }}>
          <video 
            ref={videoRef}
            controls
            autoPlay
            playsInline
            style={{ width: '100%', maxHeight: '75vh', display: 'block' }}
          >
            <source src="/videos/swiszta_brand_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
