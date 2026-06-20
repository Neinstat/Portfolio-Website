import React from 'react';

const Hero = () => {
  return (
    <header style={{
      position: 'relative',
      padding: '80px 24px 40px 24px',
      textAlign: 'center',
      overflow: 'hidden',
      backgroundColor: 'transparent'
    }}>
      {/* Glowing Lego Red Orb in the background */}
      <div className="glowing-orb" />

      {/* Main Title Container */}
      <div style={{
        position: 'relative',
        display: 'inline-block',
        zIndex: 1,
        marginBottom: '10px'
      }}>
        {/* Sans-serif PORTFOLIO base */}
        <h1 style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: '900',
          fontSize: 'clamp(44px, 10vw, 84px)',
          letterSpacing: '8px',
          textTransform: 'uppercase',
          color: 'var(--color-charcoal)',
          margin: 0,
          lineHeight: '1'
        }}>
          PORTFOLIO
        </h1>

        {/* Small Signature text on bottom right */}
        <span style={{
          position: 'absolute',
          right: '8px',
          bottom: '-12px',
          fontSize: 'clamp(10px, 1.5vw, 13px)',
          fontWeight: '800',
          fontFamily: 'var(--font-heading)',
          color: 'var(--color-red)',
          letterSpacing: '1.5px',
          textTransform: 'uppercase'
        }}>
          andrean
        </span>
      </div>

      {/* Center Subtitle Metadata */}
      <div style={{
        marginTop: '24px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '12px',
        fontSize: '13px',
        fontWeight: '700',
        color: 'var(--color-text-muted)',
        textTransform: 'uppercase',
        letterSpacing: '1.5px',
        position: 'relative',
        zIndex: 1
      }}>
        <span>Information Technology</span>
        <span style={{ color: 'var(--color-red)', fontSize: '18px' }}>•</span>
        <span>ITS Surabaya</span>
      </div>
    </header>
  );
};

export default Hero;
