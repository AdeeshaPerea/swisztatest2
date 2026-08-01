import React, { useState } from 'react';
import { X, Building, MapPin } from 'lucide-react';

export default function ClientsModal({ isOpen, onClose }) {
  const [filter, setFilter] = useState('All');

  if (!isOpen) return null;

  const clientPortfolio = [
    { name: 'Wyndham Hotels & Resorts', tier: 'Luxury Hotel', location: 'Melbourne, VIC', services: 'Housekeeping & Laundry' },
    { name: 'Accor Hotel Group', tier: 'Global Brand', location: 'Sydney, NSW', services: 'Full Facility Management' },
    { name: 'IHG Hotels & Resorts', tier: '5-Star Resort', location: 'Brisbane, QLD', services: 'Concierge & F&B' },
    { name: 'Hilton Hotels & Resorts', tier: 'Luxury Hotel', location: 'Perth, WA', services: 'Housekeeping & Maintenance' },
    { name: 'Marriott International', tier: 'Global Brand', location: 'Adelaide, SA', services: 'Laundry & Procurement' },
    { name: 'Hyatt Hotels', tier: '5-Star Resort', location: 'Gold Coast, QLD', services: 'Housekeeping & F&B' },
    { name: 'Novotel Melbourne', tier: 'Boutique Hotel', location: 'Melbourne, VIC', services: 'Complete Hospitality Service' },
    { name: 'Crown Hotels', tier: 'Luxury Hotel', location: 'Melbourne, VIC', services: 'Maintenance & Concierge' },
    { name: 'Radisson Blu', tier: 'Global Brand', location: 'Sydney, NSW', services: 'Laundry Logistics' }
  ];

  const filteredClients = filter === 'All' 
    ? clientPortfolio 
    : clientPortfolio.filter(c => c.tier === filter);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" style={{ maxWidth: '800px' }} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="modal-header">
          <h3 className="modal-title">Our Premier Clients & Partners</h3>
          <p className="modal-subtitle">Trusted by leading hotel chains, luxury resorts, and boutique hospitality properties worldwide.</p>
        </div>

        {/* Filter Badges */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', flexWrap: 'wrap' }}>
          {['All', 'Luxury Hotel', 'Global Brand', '5-Star Resort', 'Boutique Hotel'].map((cat) => (
            <button
              key={cat}
              style={{
                padding: '6px 14px',
                borderRadius: '20px',
                fontSize: '0.82rem',
                fontWeight: 600,
                border: filter === cat ? '1px solid #C8102E' : '1px solid #E5E9EC',
                background: filter === cat ? '#C8102E' : '#F8F9FA',
                color: filter === cat ? '#FFFFFF' : '#4A5568',
                cursor: 'pointer'
              }}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', maxHeight: '420px', overflowY: 'auto' }}>
          {filteredClients.map((client, idx) => (
            <div key={idx} style={{ background: '#F8F9FA', border: '1px solid #E5E9EC', borderRadius: '8px', padding: '16px' }}>
              <Building size={24} style={{ color: '#C8102E', marginBottom: '8px' }} />
              <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#1E252B' }}>{client.name}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.78rem', color: '#718096', marginTop: '4px' }}>
                <MapPin size={12} />
                <span>{client.location}</span>
              </div>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#C8102E', marginTop: '8px' }}>
                {client.services}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
