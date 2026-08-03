import React from 'react';

/**
 * Official SWISZTA Logo Component
 * Uses the exact logo image provided by the user (/images/swiszta_logo.jpg)
 */
export default function Logo({
  variant = 'light',
  size = 'md',
  className = '',
  style = {},
  onClick
}) {
  const heights = {
    sm: '50px',
    md: '72px',
    lg: '92px'
  };

  const logoHeight = heights[size] || heights.md;
  const isDark = variant === 'dark';

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
      <img
        src="/images/swiszta_logo.jpg"
        alt="SWISZTA Hotel Services Logo"
        className="site-logo-img"
        style={{
          height: logoHeight,
          width: 'auto',
          maxWidth: '100%',
          objectFit: 'contain',
          display: 'block',
          borderRadius: isDark ? '6px' : '0px',
          mixBlendMode: isDark ? 'normal' : 'multiply',
          backgroundColor: isDark ? '#FFFFFF' : 'transparent',
          padding: isDark ? '4px 10px' : '0px',
          boxShadow: isDark ? '0 2px 8px rgba(0, 0, 0, 0.25)' : 'none'
        }}
      />
    </div>
  );
}
