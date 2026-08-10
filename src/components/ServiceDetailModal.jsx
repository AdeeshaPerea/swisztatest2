import React from 'react';
import { X, CheckCircle2, ChevronRight } from 'lucide-react';

export default function ServiceDetailModal({ service, onClose, onOpenQuote }) {
  if (!service) return null;

  const renderIcon = () => {
    if (React.isValidElement(service.icon)) {
      return service.icon;
    }
    if (typeof service.icon === 'function') {
      const IconComponent = service.icon;
      return <IconComponent size={30} />;
    }
    return <span>{service.icon || '✨'}</span>;
  };

  const detailHeading = service.detailHeading || `${service.title} Excellence & Operational Standards`;
  const details = service.details || service.description || 'Delivering premium, high-precision operational solutions tailored to luxury 4-star and 5-star hotel environments.';

  const keyFeatures = [
    'Trained & Audited Professional Staff',
    'Customized Operational SOPs for 4/5-Star Standards',
    '24/7 Quality Inspection & Real-time Reporting',
    'Environmentally Sustainable & Certified Eco Products',
    'Flexible Staffing Models Tailored to Seasonal Demand'
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
          <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(138, 22, 32, 0.1)', color: '#8a1620', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', flexShrink: 0 }}>
            {renderIcon()}
          </div>
          <div>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, margin: 0, color: '#3a0d10' }}>{service.title}</h3>
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#8a1620', letterSpacing: '1px', textTransform: 'uppercase' }}>SWISZTA SERVICE LINE</span>
          </div>
        </div>

        <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '12px', color: '#211613' }}>{detailHeading}</h4>
        <p style={{ color: '#4A5568', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '24px' }}>
          {details}
        </p>

        <div style={{ background: '#F8F9FA', borderRadius: '8px', padding: '20px', marginBottom: '24px', border: '1px solid #E5E9EC' }}>
          <h5 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '12px', color: '#1E252B' }}>KEY ADVANTAGES &amp; GUARANTEES:</h5>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {keyFeatures.map((feat, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: '#2D3748' }}>
                <CheckCircle2 size={16} style={{ color: '#8a1620', flexShrink: 0 }} />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <button className="btn btn-red" onClick={() => { onClose(); onOpenQuote(); }}>
            REQUEST QUOTE FOR THIS SERVICE <ChevronRight size={16} />
          </button>
          <button className="btn btn-outline-dark" onClick={onClose}>
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}
