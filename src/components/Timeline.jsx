import React from 'react';

const Timeline = ({ items = [] }) => {
  return (
    <div style={{ position: 'relative', paddingLeft: '24px', width: '100%' }}>
      
      {/* Vertical Adventure dashed path line */}
      <div style={{
        position: 'absolute',
        left: '6px',
        top: '24px',
        bottom: '24px',
        width: '2px',
        borderLeft: '2.5px dashed var(--color-red)',
        opacity: 0.8,
        zIndex: 1
      }} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: '18px 20px',
              boxShadow: 'var(--shadow-card)',
              border: '1px solid rgba(0,0,0,0.03)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              zIndex: 2
            }}
          >
            {/* Map Node connector indicator */}
            <div style={{
              position: 'absolute',
              left: '-23px',
              top: '22px',
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              border: '3px solid var(--color-red)',
              boxShadow: '0 0 6px var(--color-red-glow)',
              zIndex: 3
            }} />

            {/* Header Row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{
                backgroundColor: item.status === 'active' ? 'var(--color-charcoal)' : '#e5e7eb',
                color: item.status === 'active' ? '#ffffff' : 'var(--color-text-muted)',
                fontSize: '10px',
                fontWeight: '800',
                padding: '3px 8px',
                borderRadius: '20px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                {item.period}
              </span>
              <div style={{
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                backgroundColor: item.status === 'active' ? 'var(--color-red)' : '#f3f4f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '10px',
                color: item.status === 'active' ? '#ffffff' : 'var(--color-charcoal)',
                fontWeight: 'bold',
                border: '1px solid rgba(0,0,0,0.05)'
              }}>
                {item.status === 'active' ? '●' : '✓'}
              </div>
            </div>

            {/* Org & Role */}
            <div style={{ marginTop: '2px' }}>
              <div style={{ 
                fontSize: '11px', 
                color: 'var(--color-text-muted)', 
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                {item.company}
              </div>
              <h4 style={{ 
                fontFamily: 'var(--font-heading)',
                fontSize: '15px', 
                fontWeight: '800', 
                marginTop: '1px',
                color: 'var(--color-charcoal)',
                lineHeight: '1.2'
              }}>
                {item.role}
              </h4>
            </div>

            {/* Details */}
            {item.details && (
              <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', lineHeight: '1.5', fontWeight: '500' }}>
                {item.details}
              </p>
            )}

            {/* Month Indicator Line at the bottom */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              borderTop: '1px solid rgba(0,0,0,0.04)',
              paddingTop: '8px',
              marginTop: '6px',
              fontSize: '10px',
              color: 'var(--color-text-muted)',
              fontWeight: '600'
            }}>
              <span>{item.startMonth || 'Jan'}</span>
              <div style={{ flexGrow: 1, height: '1px', backgroundColor: 'rgba(0,0,0,0.03)', margin: '0 8px' }} />
              <span>{item.endMonth || 'Dec'}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
