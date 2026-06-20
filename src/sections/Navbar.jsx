import React from 'react';
import { User, FileText, Mail, Trophy } from 'lucide-react';

const Navbar = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'about-me', label: 'About me' },
    { id: 'projects', label: 'Work' },
    { id: 'experience', label: 'Resume' },
    { id: 'honors', label: 'Honors' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 90,
      backgroundColor: 'rgba(244, 243, 239, 0.95)',
      backdropFilter: 'blur(8px)',
      borderBottom: 'var(--border-main)',
      borderTop: 'var(--border-main)',
      width: '100%',
      padding: '0 24px'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '60px'
      }}>
        {/* Navigation Tabs */}
        <div style={{ display: 'flex', gap: '24px', height: '100%', alignItems: 'center' }}>
          {/* Small visual logo */}
          <div style={{
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-text)',
            color: 'var(--bg-canvas)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            fontWeight: '900',
            fontFamily: 'var(--font-heading)'
          }}>
            Q
          </div>
          
          <div style={{ display: 'flex', gap: '20px', height: '100%' }}>
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    fontSize: '14px',
                    fontWeight: '700',
                    color: isActive ? 'var(--color-text)' : 'var(--color-text-muted)',
                    position: 'relative',
                    height: '100%',
                    padding: '0 4px',
                    display: 'flex',
                    alignItems: 'center',
                    transition: 'color 0.2s',
                    border: 'none',
                    background: 'none'
                  }}
                >
                  {item.label}
                  {isActive && (
                    <div style={{
                      position: 'absolute',
                      bottom: '-1.5px', // Sit exactly on border
                      left: 0,
                      right: 0,
                      height: '4px',
                      backgroundColor: 'var(--color-text)',
                      borderRadius: '2px 2px 0 0'
                    }} />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right side circular actions */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            onClick={() => handleNavClick('about-me')}
            style={iconButtonStyle}
            title="About Me"
          >
            <User size={14} />
          </button>
          <button 
            onClick={() => handleNavClick('experience')}
            style={iconButtonStyle}
            title="Resume"
          >
            <FileText size={14} />
          </button>
          <button 
            onClick={() => handleNavClick('honors')}
            style={iconButtonStyle}
            title="Honors"
          >
            <Trophy size={14} />
          </button>
          <button 
            onClick={() => handleNavClick('contact')}
            style={iconButtonStyle}
            title="Contact"
          >
            <Mail size={14} />
          </button>
        </div>
      </div>
    </nav>
  );
};

const iconButtonStyle = {
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  border: '1.5px solid var(--border-color)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#ffffff',
  color: 'var(--color-text)',
  transition: 'transform 0.2s, background-color 0.2s, box-shadow 0.2s',
  boxShadow: '1px 1px 0px 0px #1a1a1a'
};

// Add CSS hover triggers programmatically via inline standard listeners isn't needed if we use class or hover events, but we can do a simple mouseEnter/mouseLeave for interactive style adjustments if desired.
export default Navbar;
