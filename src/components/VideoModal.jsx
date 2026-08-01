import React from 'react';
import { X } from 'lucide-react';

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" style={{ maxWidth: '840px', padding: 0, overflow: 'hidden', background: '#000' }} onClick={(e) => e.stopPropagation()}>
        <button 
          className="modal-close-btn" 
          onClick={onClose} 
          style={{ position: 'absolute', top: '16px', right: '16px', zIndex: 10, background: 'rgba(0,0,0,0.6)', color: 'white' }}
        >
          <X size={20} />
        </button>

        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
          <iframe 
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0" 
            title="SWISZTA Operational Excellence Showcase"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
