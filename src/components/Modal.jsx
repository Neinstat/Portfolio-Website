import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const Modal = ({
  isOpen = false,
  onClose,
  title = 'Document Dossier',
  color = 'var(--color-red)',
  children
}) => {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('clean-modal-overlay')) {
      onClose();
    }
  };

  return (
    <div className="clean-modal-overlay" onClick={handleOverlayClick}>
      <div className="clean-modal-wrapper" style={{ '--folder-color': color }}>
        {/* Header */}
        <div className="clean-modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '14px',
              height: '14px',
              borderRadius: '3px',
              backgroundColor: color,
              border: '1px solid rgba(0,0,0,0.1)'
            }} />
            <span style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '18px',
              fontWeight: '800',
              textTransform: 'uppercase',
              color: 'var(--color-charcoal)'
            }}>{title}</span>
          </div>
          <button 
            onClick={onClose} 
            aria-label="Close document"
            style={{
              backgroundColor: 'var(--bg-canvas)',
              padding: '6px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-charcoal)',
              transition: 'background-color 0.2s',
              border: '1px solid rgba(0,0,0,0.05)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-red)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-canvas)'}
          >
            <X size={15} strokeWidth={2.5} />
          </button>
        </div>

        {/* Scrollable Dossier Sheet Content */}
        <div className="clean-modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
