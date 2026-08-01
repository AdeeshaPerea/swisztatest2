import React, { useState } from 'react';
import { X, CheckCircle, Send } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    propertyName: '',
    propertyType: '5-Star Hotel',
    location: '',
    roomCount: '',
    name: '',
    email: '',
    phone: '',
    notes: ''
  });
  const [selectedServices, setSelectedServices] = useState(['Housekeeping']);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const servicesList = [
    'Housekeeping',
    'Laundry Services',
    'Catering & F&B',
    'Maintenance',
    'Concierge',
    'Procurement'
  ];

  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter(s => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '30px 10px' }}>
            <CheckCircle size={64} style={{ color: '#C8102E', margin: '0 auto 16px' }} />
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '10px' }}>Quote Request Submitted!</h3>
            <p style={{ color: '#657380', fontSize: '0.95rem', marginBottom: '24px' }}>
              Thank you, <strong>{formData.name}</strong>. A SWISZTA hospitality operational specialist will review your property details for <strong>{formData.propertyName || 'your property'}</strong> and send a tailored proposal shortly.
            </p>
            <button className="btn btn-red" onClick={handleReset}>
              CLOSE WINDOW
            </button>
          </div>
        ) : (
          <div>
            <div className="modal-header">
              <h3 className="modal-title">Request a Custom Proposal</h3>
              <p className="modal-subtitle">Tell us about your property and service requirements to get a tailored quote.</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Property / Hotel Name *</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="e.g. Grand Hyatt Melbourne"
                    value={formData.propertyName}
                    onChange={(e) => setFormData({...formData, propertyName: e.target.value})}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Property Type *</label>
                  <select 
                    className="form-select"
                    value={formData.propertyType}
                    onChange={(e) => setFormData({...formData, propertyType: e.target.value})}
                  >
                    <option>Luxury 5-Star Hotel</option>
                    <option>Boutique Accommodations</option>
                    <option>Serviced Apartments</option>
                    <option>Resort & Spa Complex</option>
                    <option>Commercial Facility</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">City / Location *</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="e.g. Melbourne VIC"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Total Rooms / Units</label>
                  <input 
                    type="number" 
                    className="form-input" 
                    placeholder="e.g. 250"
                    value={formData.roomCount}
                    onChange={(e) => setFormData({...formData, roomCount: e.target.value})}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Select Required Services</label>
                <div className="services-checkbox-grid">
                  {servicesList.map((service) => {
                    const isSelected = selectedServices.includes(service);
                    return (
                      <div 
                        key={service}
                        className={`checkbox-card ${isSelected ? 'selected' : ''}`}
                        onClick={() => toggleService(service)}
                      >
                        <input 
                          type="checkbox" 
                          checked={isSelected} 
                          onChange={() => {}} 
                          style={{ accentColor: '#C8102E' }}
                        />
                        <span>{service}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Your Name *</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input 
                    type="email" 
                    className="form-input" 
                    placeholder="name@hotelgroup.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required 
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number *</label>
                <input 
                  type="tel" 
                  className="form-input" 
                  placeholder="+61 400 000 000"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required 
                />
              </div>

              <button type="submit" className="btn btn-red" style={{ width: '100%', marginTop: '10px', padding: '14px' }}>
                SUBMIT QUOTE REQUEST <Send size={16} />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
