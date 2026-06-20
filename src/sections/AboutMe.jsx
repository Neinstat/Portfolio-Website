import React from 'react';
import { Mail, Globe, ArrowRight, ShieldCheck, Gamepad2, Award } from 'lucide-react';

const LinkedInIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const AboutMe = ({ scrollToSection }) => {
  const attributes = [
    { name: 'Data Engineering', val: 90, desc: 'SQL, BigQuery, ETL clean pipelines' },
    { name: 'Visual Data Storytelling', val: 95, desc: 'Tableau, Looker Studio dashboards' },
    { name: 'Robotics Design & Aesthetics', val: 85, desc: 'Aerodynamics, exterior CAD research' },
    { name: 'Creative Illustration', val: 92, desc: 'Digital vector art, branding systems' }
  ];

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '36% 64%',
      gap: '36px',
      alignItems: 'start'
    }} className="about-split-grid">
      
      {/* Left Column: Character Card */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        
        {/* Portrait Card Wrapper for Peeking Badge */}
        <div style={{ position: 'relative', width: '100%' }}>
          {/* Spiderman Lego Peeking Badge */}
          <img 
            src="/lego_spiderman.png" 
            alt="Lego Spiderman Badge" 
            className="spiderman-badge-peeking"
          />

          <div style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '3 / 4',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-card)',
            background: '#151719',
            border: '2px solid var(--color-red)'
          }}>
            {/* Profile photo target */}
            <img 
              src="/qorry_portrait.png" 
              alt="Muhammad Andrean" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.85
              }}
            />
          </div>
        </div>

        {/* Character Level Badge */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          backgroundColor: 'var(--color-charcoal)',
          color: '#ffffff',
          padding: '8px 12px',
          borderRadius: '12px',
          fontSize: '11px',
          fontWeight: '900',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          border: '1.5px solid var(--color-red)',
          boxShadow: '0 4px 10px var(--color-red-glow)'
        }}>
          <Gamepad2 size={14} color="var(--color-red)" />
          <span>LVL 21 DATA STORYTELLER</span>
        </div>

        {/* Action button */}
        <button 
          onClick={() => scrollToSection('contact')}
          className="btn-cta primary"
          style={{ width: '100%', border: '1.5px solid var(--color-red)' }}
        >
          Engage / Hire Andrean
          <ArrowRight size={14} />
        </button>
      </div>

      {/* Right Column: Character Status Attributes */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Profile and Bio */}
        <div className="clean-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '900',
              color: 'var(--color-charcoal)',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Muhammad Andrean R. P.
            </h3>
            <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--color-red)', letterSpacing: '0.5px' }}>
              [ CLASS: INFORMATION TECH ]
            </span>
          </div>

          <p style={{
            fontSize: '13px',
            color: 'var(--color-text-muted)',
            lineHeight: '1.6',
            fontWeight: '500'
          }}>
            An Information Technology student at ITS Surabaya (GPA: 3.48) and an aspiring Visual Data Storyteller specializing in data analytics, engineering, and machine learning pipelines. Experienced in processing large-scale datasets at Telkomsel and Kimia Farma using SQL, BigQuery, and Tableau to drive strategic corporate decisions.
          </p>

          {/* Plus Creative Info HR Callout */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginTop: '12px',
            fontSize: '11px',
            color: 'var(--color-text-muted)',
            fontWeight: '600'
          }}>
            <ShieldCheck size={14} color="var(--color-red)" />
            <span>Supplementary Value: 3+ Years Creative Field Background (Visual Branding / Illustrator)</span>
          </div>
        </div>

        {/* RPG Skill Attributes */}
        <div className="clean-card" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <h4 style={{
            fontSize: '12px',
            fontWeight: '900',
            textTransform: 'uppercase',
            color: 'var(--color-charcoal)',
            letterSpacing: '1px',
            marginBottom: '4px'
          }}>
            Attribute Status
          </h4>

          {attributes.map((attr, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: '800' }}>
                <span style={{ color: 'var(--color-charcoal)' }}>{attr.name}</span>
                <span style={{ color: 'var(--color-red)' }}>{attr.val}%</span>
              </div>
              
              {/* Progress track */}
              <div className="rpg-stat-bar-track">
                <div 
                  className="rpg-stat-bar-fill" 
                  style={{ width: `${attr.val}%` }} 
                />
              </div>
              <span style={{ fontSize: '9px', color: 'var(--color-text-muted)', fontWeight: '600' }}>
                {attr.desc}
              </span>
            </div>
          ))}

          {/* Achievement Unlocked banner */}
          <div style={{
            backgroundColor: '#fffdf5',
            border: '1px solid #fcd34d',
            borderRadius: '10px',
            padding: '10px 14px',
            fontSize: '11px',
            color: '#b45309',
            fontWeight: '800',
            marginTop: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <Award size={16} color="#d97706" style={{ flexShrink: 0 }} />
            <span>Achievement Unlocked: Winner of Best Design Award at National Robot Contest (KRI) 2024!</span>
          </div>
        </div>

        {/* Contact Links Deck (No Phone Number!) */}
        <div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '14px'
          }} className="contact-grid">
            
            {/* Email */}
            <a 
              href="mailto:mandreanrizqp@gmail.com"
              className="clean-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '110px',
                padding: '16px 14px',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--color-red)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.04)'}
            >
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'rgba(21, 23, 25, 0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-charcoal)'
              }}>
                <Mail size={16} />
              </div>
              <div style={{ marginTop: '8px' }}>
                <div style={{ fontSize: '9px', fontWeight: '800', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>Email</div>
                <div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--color-charcoal)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>mandreanrizqp@gmail.com</div>
              </div>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://linkedin.com/in/muhammad-andrean-prasetio"
              target="_blank"
              rel="noopener noreferrer"
              className="clean-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '110px',
                padding: '16px 14px',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--color-red)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.04)'}
            >
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'rgba(229, 37, 33, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-charcoal)'
              }}>
                <LinkedInIcon />
              </div>
              <div style={{ marginTop: '8px' }}>
                <div style={{ fontSize: '9px', fontWeight: '800', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>LinkedIn</div>
                <div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--color-charcoal)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>in/muhammad-andrean-prasetio</div>
              </div>
            </a>

            {/* Tinyurl Project Portfolio */}
            <a 
              href="https://tinyurl.com/Project-Portfolio-Andrean"
              target="_blank"
              rel="noopener noreferrer"
              className="clean-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '110px',
                padding: '16px 14px',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--color-red)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.04)'}
            >
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'rgba(21, 23, 25, 0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-charcoal)'
              }}>
                <Globe size={16} />
              </div>
              <div style={{ marginTop: '8px' }}>
                <div style={{ fontSize: '9px', fontWeight: '800', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>Portfolio Link</div>
                <div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--color-charcoal)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>tinyurl.com/Project-Portfolio-Andrean</div>
              </div>
            </a>

          </div>
        </div>

      </div>

    </div>
  );
};

export default AboutMe;
