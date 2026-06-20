import React from 'react';
import { Mail, Globe, ArrowRight, Award } from 'lucide-react';

const LinkedInIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
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

const AboutMe = ({ setActiveTab }) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '38% 62%',
      gap: '36px',
      alignItems: 'start'
    }} className="about-split-grid">
      
      {/* Left Column: Profile Card */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '3 / 4',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-card)',
          background: '#151719',
          border: '1px solid rgba(0,0,0,0.05)'
        }}>
          {/* Profile Photo - Target for manual replacement */}
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

        {/* Dynamic CTA button */}
        <button 
          onClick={() => setActiveTab('contact')}
          className="btn-cta primary"
          style={{ width: '100%' }}
        >
          Contact / Hire Andrean
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Right Column: Bio & Info cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Main Introduction Card */}
        <div className="clean-card">
          <h3 style={{
            fontSize: '18px',
            fontWeight: '900',
            color: 'var(--color-charcoal)',
            marginBottom: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            Muhammad Andrean Rizq Prasetio
          </h3>
          
          <div style={{
            display: 'flex',
            gap: '20px',
            alignItems: 'flex-start'
          }} className="intro-card-inner">
            <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <p style={{
                fontSize: '13px',
                color: 'var(--color-text-muted)',
                lineHeight: '1.6',
                fontWeight: '500'
              }}>
                An Information Technology student at ITS Surabaya (GPA: 3.48) and an aspiring Visual Data Storyteller specializing in data analytics, engineering, and machine learning pipelines. Experienced in processing large-scale datasets at Telkomsel and Kimia Farma using SQL, BigQuery, and Tableau to drive strategic corporate decisions. Proven ability to transform complex technical architectures into highly intuitive, data-driven visual solutions.
              </p>
              
              {/* HR Plus Factor Banner */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: 'rgba(229, 37, 33, 0.06)',
                padding: '10px 14px',
                borderRadius: '10px',
                border: '1px dashed rgba(229, 37, 33, 0.2)',
                fontSize: '12px',
                color: 'var(--color-charcoal)',
                fontWeight: '700'
              }}>
                <Award size={16} color="var(--color-red)" style={{ flexShrink: 0 }} />
                <span>Plus Value: 3+ Years Background in Creative Fields (Visual Branding & Illustration)</span>
              </div>
            </div>

            <img 
              src="/designer_working.png" 
              alt="Andrean working" 
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '1.5px solid rgba(0,0,0,0.05)',
                flexShrink: 0
              }}
              className="intro-img"
            />
          </div>
        </div>

        {/* Contact Links Deck */}
        <div>
          <h4 style={{
            fontSize: '12px',
            fontWeight: '800',
            textTransform: 'uppercase',
            color: 'var(--color-text-muted)',
            letterSpacing: '1px',
            marginBottom: '10px'
          }}>
            Get In Touch
          </h4>
          
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
                minHeight: '120px',
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
              <div style={{ marginTop: '12px' }}>
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
                minHeight: '120px',
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
              <div style={{ marginTop: '12px' }}>
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
                minHeight: '120px',
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
              <div style={{ marginTop: '12px' }}>
                <div style={{ fontSize: '9px', fontWeight: '800', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>Project Link</div>
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
