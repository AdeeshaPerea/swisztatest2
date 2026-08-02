import React from 'react';

/**
 * Official SWISZTA Logo Component
 * Matches official brand guidelines:
 * - SWIS in dark/white
 * - Z in Red (#ED1C24)
 * - T in dark/white
 * - A in Red Chevron Apex stroke
 * - Subtitle: HOTEL SERVICES
 */
export default function Logo({
  variant = 'light',
  size = 'md',
  showIcon = true,
  className = '',
  style = {},
  onClick
}) {
  const isDark = variant === 'dark';
  const scale = size === 'sm' ? 0.75 : size === 'lg' ? 1.25 : 1;
  const textColor = isDark ? '#FFFFFF' : '#1F1F1F';
  const subtitleColor = isDark ? '#E0B45C' : '#1F1F1F';

  return (
    <div 
      className={`swiszta-brand-logo ${className}`}
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        cursor: onClick ? 'pointer' : 'default',
        userSelect: 'none',
        lineHeight: 1,
        ...style
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: `${10 * scale}px` }}>
        
        {/* 2x2 Square Icon Grid */}
        {showIcon && (
          <svg 
            width={`${24 * scale}`} 
            height={`${24 * scale}`} 
            viewBox="0 0 48 48" 
            fill="none" 
            style={{ flexShrink: 0, display: 'block' }}
          >
            <rect x="0" y="0" width="22" height="22" rx="4.5" fill="#D32F2F" />
            <rect x="26" y="0" width="22" height="22" rx="4.5" fill="#ED1C24" />
            <rect x="0" y="26" width="22" height="22" rx="4.5" fill="#FF5722" />
            <rect x="26" y="26" width="22" height="22" rx="4.5" fill="#E91E63" />
          </svg>
        )}

        {/* SWISZTA Typography & HOTEL SERVICES Subtitle */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'baseline', 
            fontFamily: 'Outfit, Jost, sans-serif', 
            fontWeight: 800, 
            fontSize: `${1.45 * scale}rem`, 
            letterSpacing: '0.5px' 
          }}>
            <span style={{ color: textColor }}>SWIS</span>
            <span style={{ color: '#ED1C24' }}>Z</span>
            <span style={{ color: textColor }}>T</span>
            <svg 
              width={`${17 * scale}`} 
              height={`${17 * scale}`} 
              viewBox="0 0 24 24" 
              fill="none" 
              style={{ display: 'inline-block', marginLeft: '1px', verticalAlign: 'baseline', transform: 'translateY(-1px)' }}
            >
              <path d="M 3.5 20.5 L 12 5 L 20.5 20.5" stroke="#ED1C24" strokeWidth="4.2" strokeLinecap="square" strokeLinejoin="miter" />
            </svg>
          </div>
          <span style={{ 
            fontFamily: 'Jost, sans-serif', 
            fontWeight: 700, 
            fontSize: `${0.52 * scale}rem`, 
            letterSpacing: '3.2px', 
            color: subtitleColor,
            textTransform: 'uppercase',
            marginTop: '2px'
          }}>
            HOTEL SERVICES
          </span>
        </div>
      </div>
    </div>
  );
}
