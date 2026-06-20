import React, { useState } from 'react';
import { Award, Trophy, CheckCircle2 } from 'lucide-react';

const Honors = () => {
  const honorsData = [
    {
      id: 1,
      type: 'award',
      title: 'Best Design Award',
      issuer: 'National Robot Contest (KRI) 2024',
      date: '2024',
      description: 'Awarded for visual aesthetic styling and material aerodynamic integration in soccer autonomous robotics with IRIS Robotic Team ITS.',
      credentialId: 'KRI-BEST-DESIGN-2024-ITS',
      details: 'Awarded by the Ministry of Education, Culture, Research, and Technology (Kemendikbudristek) Indonesia.'
    },
    {
      id: 2,
      type: 'certification',
      title: 'Robotics Design Internship',
      issuer: 'IRIS Robotic Team ITS',
      date: '2023',
      description: 'Completed autonomous robot visual branding and exterior body aesthetics design development internship.',
      credentialId: 'IRIS-ROBO-INTERN-2023-A',
      details: 'Credential verified by Coordinator of IRIS Robotic Team ITS, Surabaya, Indonesia.'
    },
    {
      id: 3,
      type: 'certification',
      title: 'ATOM Organizational Management',
      issuer: 'HMIT ITS Surabaya',
      date: '2025',
      description: 'Advance Training for Organizational Management, certifying project management, strategic communications, and IDX Apple Academy visits leadership.',
      credentialId: 'HMIT-ATOM-2025-043',
      details: 'Issued by Himpunan Mahasiswa Teknologi Informasi (HMIT) ITS Sepuluh Nopember.'
    },
    {
      id: 4,
      type: 'certification',
      title: 'Big Data Analytics Certificate',
      issuer: 'Kimia Farma × Rakamin Academy',
      date: '2026',
      description: 'Completed comprehensive virtual data engineering and business analytics program, including ETL processes in BigQuery and Looker Studio dashboards.',
      credentialId: 'KF-BDA-RAKAMIN-2026',
      details: 'Issued upon successful completion of virtual internship projects and technical challenges.'
    }
  ];

  const [activeCredential, setActiveCredential] = useState(honorsData[0]);

  return (
    <div>
      {/* Intro Header */}
      <div style={{ marginBottom: '32px' }}>
        <h3 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '22px',
          fontWeight: '900',
          color: 'var(--color-charcoal)',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          Board of Honors
        </h3>
        <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', marginTop: '6px', lineHeight: '1.5' }}>
          My verified trophies, national robot contest awards, and IT certifications.
        </p>
      </div>

      {/* Main Split Layout */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '50% 50%',
        gap: '30px',
        alignItems: 'start'
      }} className="honors-split-layout">
        
        {/* Left Side: Awards & Certifications divided */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          
          {/* Sub-section: Awards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h4 style={{ fontSize: '14px', fontWeight: '900', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-charcoal)', letterSpacing: '0.5px' }}>
              <Trophy size={16} color="var(--color-red)" />
              Awards &amp; Trophies
            </h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {honorsData.filter(item => item.type === 'award').map((award) => {
                const isSelected = activeCredential?.id === award.id;
                return (
                  <div 
                    key={award.id}
                    onClick={() => setActiveCredential(award)}
                    className="clean-card"
                    style={{
                      cursor: 'pointer',
                      border: isSelected ? '1.5px solid var(--color-red)' : '1px solid rgba(0,0,0,0.03)',
                      backgroundColor: '#ffffff',
                      boxShadow: isSelected ? 'var(--shadow-hover)' : 'var(--shadow-card)',
                      transition: 'all 0.2s',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      padding: '14px 18px'
                    }}
                  >
                    <div style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      backgroundColor: isSelected ? 'var(--color-red)' : 'rgba(29,31,33,0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isSelected ? '#ffffff' : 'var(--color-charcoal)',
                      flexShrink: 0
                    }}>
                      <Trophy size={16} />
                    </div>
                    
                    <div style={{ flexGrow: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                        <span style={{
                          backgroundColor: 'var(--color-charcoal)',
                          color: '#ffffff',
                          fontSize: '8px',
                          fontWeight: '800',
                          padding: '1px 5px',
                          borderRadius: '6px'
                        }}>
                          {award.date}
                        </span>
                        <span style={{ fontSize: '10px', color: 'var(--color-text-muted)', fontWeight: '700', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {award.issuer}
                        </span>
                      </div>
                      <h4 style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '13px',
                        fontWeight: '800',
                        color: 'var(--color-charcoal)',
                        marginTop: '3px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      }}>
                        {award.title}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sub-section: Certifications */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h4 style={{ fontSize: '14px', fontWeight: '900', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-charcoal)', letterSpacing: '0.5px' }}>
              <Award size={16} color="var(--color-red)" />
              Certifications &amp; Training
            </h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {honorsData.filter(item => item.type === 'certification').map((cert) => {
                const isSelected = activeCredential?.id === cert.id;
                return (
                  <div 
                    key={cert.id}
                    onClick={() => setActiveCredential(cert)}
                    className="clean-card"
                    style={{
                      cursor: 'pointer',
                      border: isSelected ? '1.5px solid var(--color-red)' : '1px solid rgba(0,0,0,0.03)',
                      backgroundColor: '#ffffff',
                      boxShadow: isSelected ? 'var(--shadow-hover)' : 'var(--shadow-card)',
                      transition: 'all 0.2s',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      padding: '14px 18px'
                    }}
                  >
                    <div style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      backgroundColor: isSelected ? 'var(--color-red)' : 'rgba(29,31,33,0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isSelected ? '#ffffff' : 'var(--color-charcoal)',
                      flexShrink: 0
                    }}>
                      <Award size={16} />
                    </div>
                    
                    <div style={{ flexGrow: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                        <span style={{
                          backgroundColor: 'var(--color-charcoal)',
                          color: '#ffffff',
                          fontSize: '8px',
                          fontWeight: '800',
                          padding: '1px 5px',
                          borderRadius: '6px'
                        }}>
                          {cert.date}
                        </span>
                        <span style={{ fontSize: '10px', color: 'var(--color-text-muted)', fontWeight: '700', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {cert.issuer}
                        </span>
                      </div>
                      <h4 style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '13px',
                        fontWeight: '800',
                        color: 'var(--color-charcoal)',
                        marginTop: '3px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      }}>
                        {cert.title}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right Side: Credential Details */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          padding: '28px',
          boxShadow: 'var(--shadow-premium)',
          border: '1px solid rgba(0,0,0,0.04)',
          position: 'relative'
        }}>
          {activeCredential ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--color-red)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {activeCredential.type === 'award' ? <Trophy size={22} /> : <Award size={22} />}
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  backgroundColor: 'rgba(16,185,129,0.08)',
                  padding: '4px 10px',
                  borderRadius: '20px',
                  color: '#0F766E',
                  fontSize: '11px',
                  fontWeight: '800'
                }}>
                  <CheckCircle2 size={12} />
                  Verified Online
                </div>
              </div>

              {/* Title info */}
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '18px',
                  fontWeight: '900',
                  color: 'var(--color-charcoal)'
                }}>
                  {activeCredential.title}
                </h3>
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)', fontWeight: '600' }}>
                  Issued by {activeCredential.issuer} • {activeCredential.date}
                </span>
              </div>

              {/* Description */}
              <p style={{
                fontSize: '13px',
                color: 'var(--color-text-muted)',
                lineHeight: '1.5',
                fontWeight: '500'
              }}>
                {activeCredential.description}
              </p>

              {/* ID info */}
              <div style={{
                backgroundColor: 'var(--bg-canvas)',
                padding: '12px 16px',
                borderRadius: '10px',
                fontSize: '12px',
                fontFamily: 'monospace',
                color: 'var(--color-charcoal)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span>Credential ID:</span>
                <strong>{activeCredential.credentialId}</strong>
              </div>

              {/* Details card */}
              <div style={{
                backgroundColor: '#fbfbfb',
                padding: '14px',
                borderRadius: '10px',
                fontSize: '12px',
                fontStyle: 'italic',
                color: 'var(--color-text-muted)',
                border: '1px dashed rgba(0,0,0,0.06)'
              }}>
                {activeCredential.details}
              </div>

            </div>
          ) : (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '60px 20px',
              textAlign: 'center',
              color: 'var(--color-text-muted)',
              gap: '12px'
            }}>
              <Award size={36} strokeWidth={1.5} />
              <span style={{ fontSize: '13px', fontWeight: '700' }}>
                Select an honor item from the left to view verified credentials.
              </span>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Honors;
