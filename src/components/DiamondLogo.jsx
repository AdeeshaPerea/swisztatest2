import React from 'react';

/**
 * DiamondLogo Component
 * Renders the exact 4-tile diamond emblem with horizontal side accent lines
 * matching the provided mockup design.
 */
export default function DiamondLogo({ 
  size = 'md', 
  showLines = true, 
  className = '', 
  style = {} 
}) {
  const sizes = {
    sm: { width: 150, height: 36 },
    md: { width: 220, height: 48 },
    lg: { width: 280, height: 60 }
  };

  const currentSize = sizes[size] || sizes.md;

  return (
    <div 
      className={`diamond-logo-wrapper ${className}`} 
      style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        ...style 
      }}
    >
      <svg 
        width={currentSize.width} 
        height={currentSize.height} 
        viewBox="0 0 240 50" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: 'visible' }}
      >
        {/* Left Side Accent Line */}
        {showLines && (
          <g className="logo-line-left">
            <line x1="10" y1="25" x2="90" y2="25" stroke="#B0B0B0" strokeWidth="1.5" />
            <line x1="80" y1="25" x2="90" y2="25" stroke="#A51C24" strokeWidth="3" />
          </g>
        )}

        {/* Center 4-Tile Diamond Emblem */}
        <g transform="translate(120, 25)">
          {/* Top Diamond Tile (Maroon/Burgundy) */}
          <polygon 
            points="0,-20 10,-10 0,-2 -10,-10" 
            fill="#5A1A20" 
          />
          
          {/* Left Diamond Tile (Dark Charcoal) */}
          <polygon 
            points="-20,0 -10,-10 -2,0 -10,10" 
            fill="#3B3C3E" 
          />
          
          {/* Right Diamond Tile (Dark Charcoal) */}
          <polygon 
            points="20,0 10,-10 2,0 10,10" 
            fill="#3B3C3E" 
          />
          
          {/* Bottom Diamond Tile (Bright Crimson Red) */}
          <polygon 
            points="0,20 10,10 0,2 -10,10" 
            fill="#A51C24" 
          />
        </g>

        {/* Right Side Accent Line */}
        {showLines && (
          <g className="logo-line-right">
            <line x1="150" y1="25" x2="230" y2="25" stroke="#B0B0B0" strokeWidth="1.5" />
            <line x1="150" y1="25" x2="160" y2="25" stroke="#A51C24" strokeWidth="3" />
          </g>
        )}
      </svg>
    </div>
  );
}
