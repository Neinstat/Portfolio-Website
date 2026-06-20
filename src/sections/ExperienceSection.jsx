import React from 'react';
import Timeline from '../components/Timeline';
import { Briefcase, Award, GraduationCap } from 'lucide-react';

// Custom Vector SVG Tech stack icons for razor-sharp rendering without external files
const TechIcon = ({ name, size = 28 }) => {
  switch (name.toLowerCase()) {
    case 'python':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.898 2c-3.197 0-2.996 1.385-2.996 1.385v1.616h3.041v.429H7.854S5.035 5.253 5.035 9.068c0 3.816 2.476 3.652 2.476 3.652h1.474v-2.072s-.081-2.483 2.457-2.483h2.955V5.13s.273-3.13-2.499-3.13zm.204 20c3.197 0 2.996-1.385 2.996-1.385v-1.616h-3.041v-.43h4.088s2.819.177 2.819-3.638c0-3.816-2.476-3.652-2.476-3.652h-1.474v2.072s.081 2.483-2.457 2.483h-2.955v3.035s-.273 3.13 2.499 3.13z" fill="#3776AB"/>
          <path d="M9.816 4.095a.612.612 0 1 1 0 1.224.612.612 0 0 1 0-1.224zm4.368 14.586a.612.612 0 1 1 0 1.224.612.612 0 0 1 0-1.224z" fill="#FFD43B"/>
        </svg>
      );
    case 'mysql':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-1h2v1zm0-3h-2v-5h2v5z" fill="#00758F"/>
          {/* Stylized database rings dolphin outline */}
          <path d="M6 10s3-4 6-4 6 4 6 4M6 14s3-3 6-3 6 3 6 3" stroke="#F29111" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      );
    case 'dbeaver':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="22" height="22" x="1" y="1" rx="6" fill="#382618"/>
          {/* Beaver shape / Database container representation */}
          <ellipse cx="12" cy="13" rx="7" ry="5" fill="#C49A6C" stroke="#ffffff" strokeWidth="1.5"/>
          <path d="M12 8V6M9 9V7M15 9V7" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="10" cy="12" r="1" fill="#000000"/>
          <circle cx="14" cy="12" r="1" fill="#000000"/>
        </svg>
      );
    case 'tableau':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Tableau multi-colored cross stars */}
          <rect width="24" height="24" rx="6" fill="#ffffff" />
          <line x1="12" y1="3" x2="12" y2="21" stroke="#E1251B" strokeWidth="2.2" strokeLinecap="round"/>
          <line x1="3" y1="12" x2="21" y2="12" stroke="#1F4E79" strokeWidth="2.2" strokeLinecap="round"/>
          <line x1="7" y1="7" x2="17" y2="17" stroke="#EC891D" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="17" y1="7" x2="7" y2="17" stroke="#5C8EB3" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      );
    case 'photoshop':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="22" height="22" x="1" y="1" rx="4" fill="#001829" stroke="#00C8FF" strokeWidth="1.5"/>
          <text x="5" y="16" fill="#00C8FF" fontSize="11" fontWeight="900" fontFamily="sans-serif">Ps</text>
        </svg>
      );
    case 'illustrator':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="22" height="22" x="1" y="1" rx="4" fill="#261300" stroke="#FF9A00" strokeWidth="1.5"/>
          <text x="6" y="16" fill="#FF9A00" fontSize="11" fontWeight="900" fontFamily="sans-serif">Ai</text>
        </svg>
      );
    case 'figma':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 2c-2.21 0-4 1.79-4 4s1.79 4 4 4h4V2H8z" fill="#F24E1E"/>
          <path d="M16 6c0-2.21-1.79-4-4-4v8h4c2.21 0 4-1.79 4-4z" fill="#FF7262"/>
          <path d="M8 10c-2.21 0-4 1.79-4 4s1.79 4 4 4h4v-8H8z" fill="#A259FF"/>
          <path d="M12 18c0 2.21 1.79 4 4 4s4-1.79 4-4-1.79-4-4-4h-4v8z" fill="#0ACF83"/>
          <path d="M8 18c-2.21 0-4-1.79-4-4h4v4z" fill="#1ABC9C"/>
        </svg>
      );
    case 'excel':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="22" height="22" x="1" y="1" rx="4" fill="#107C41"/>
          <text x="6" y="16" fill="#ffffff" fontSize="11" fontWeight="900" fontFamily="sans-serif">Xl</text>
        </svg>
      );
    case 'linux':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="22" height="22" x="1" y="1" rx="6" fill="#2d3748" />
          {/* Terminal Console character prompt representation for Linux core */}
          <text x="4" y="14" fill="#48bb78" fontSize="10" fontWeight="900" fontFamily="monospace">&gt;_</text>
        </svg>
      );
    case 'bigquery':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="22" height="22" x="1" y="1" rx="6" fill="#4285F4" />
          {/* Database grid representing BigQuery */}
          <circle cx="8" cy="8" r="2.5" fill="#ffffff"/>
          <circle cx="16" cy="8" r="2.5" fill="#ffffff"/>
          <circle cx="8" cy="16" r="2.5" fill="#ffffff"/>
          <circle cx="16" cy="16" r="2.5" fill="#34A853"/>
        </svg>
      );
    default:
      return <span>💻</span>;
  }
};

const ExperienceSection = () => {
  const experienceData = [
    {
      id: 1,
      period: 'Apr 2026 - May 2026',
      company: 'Kimia Farma × Rakamin Academy',
      role: 'Big Data Analytics Intern (Virtual)',
      details: 'Engineered sales pipelines in Google BigQuery to clean and transform pharmaceutical datasets. Developed Looking Studio sales dashboards for regional KPI forecasting.',
      startMonth: 'Apr',
      endMonth: 'May',
      status: 'active'
    },
    {
      id: 2,
      period: 'Jan 2026 - Feb 2026',
      company: 'PT Telekomunikasi Selular (Telkomsel)',
      role: 'Network Data Analyst Intern',
      details: 'Validated element forecastings using Exponential Triple Smoothing (ETS). Mapped cell optimizations using Ookla datasets inside DBeaver, and built 2 Tableau GGSN dashboards.',
      startMonth: 'Jan',
      endMonth: 'Feb',
      status: 'active'
    },
    {
      id: 3,
      period: 'Mar 2024 - Jul 2024',
      company: 'IRIS Robotic Team ITS',
      role: 'Robot Design Researcher',
      details: 'Spearheaded material and exterior design for soccer autonomous robot. Won Best Design Award at National Robot Contest (KRI) 2024.',
      startMonth: 'Mar',
      endMonth: 'Jul',
      status: 'completed'
    },
    {
      id: 4,
      period: 'Jan 2025 - Present',
      company: 'ITS Website Team',
      role: 'Staff Illustrator',
      details: 'Collaborating with university UI/UX dev teams to create illustrations and banners for official portals.',
      startMonth: 'Jan',
      endMonth: 'Pres',
      status: 'completed'
    },
    {
      id: 5,
      period: 'Oct 2024 - Feb 2025',
      company: 'Futurest 2025 (SRE ITS)',
      role: 'Staff UI/UX Design',
      details: 'Designed wireframes and final UI sheets for mobile applications and portal websites.',
      startMonth: 'Oct',
      endMonth: 'Feb',
      status: 'completed'
    }
  ];

  const educationData = [
    {
      id: 1,
      period: '2023 - Present',
      company: 'ITS Surabaya',
      role: 'Bachelor of Information Technology',
      details: 'GPA: 3.48 / 4.00. Focus courses: Big Data, Database Systems, Artificial Intelligence, Database Management, Data Communication & Networks.',
      startMonth: 'Aug',
      endMonth: 'Pres',
      status: 'active'
    }
  ];

  const softSkills = ['Data Analytics', 'Machine Learning Audits', 'Visual Storytelling', 'Team Collaboration', 'Problem Solving'];

  const hardSkills = [
    { name: 'Python', label: 'Python / R' },
    { name: 'MySQL', label: 'MySQL' },
    { name: 'dbeaver', label: 'DBeaver' },
    { name: 'tableau', label: 'Tableau' },
    { name: 'bigquery', label: 'BigQuery' },
    { name: 'figma', label: 'Figma' },
    { name: 'excel', label: 'MS Excel' },
    { name: 'photoshop', label: 'Photoshop' },
    { name: 'linux', label: 'Linux Core' }
  ];

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
          Resume Dossier
        </h3>
        <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', marginTop: '6px', lineHeight: '1.5' }}>
          My professional timeline, software expertise, and educational history displayed in structured archive columns.
        </p>
      </div>

      {/* Grid columns */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '30px'
      }} className="resume-grid-layout">
        
        {/* Column 1: Experience */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h4 style={{ fontSize: '15px', fontWeight: '800', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-charcoal)' }}>
            <Briefcase size={16} color="var(--color-text-muted)" />
            Experience
          </h4>
          <Timeline items={experienceData} />
        </div>

        {/* Column 2: Expertise & Skills */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Expertise List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <h4 style={{ fontSize: '15px', fontWeight: '800', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-charcoal)' }}>
              <Award size={16} color="var(--color-text-muted)" />
              Core Focus
            </h4>
            <div className="clean-card" style={{
              fontSize: '13px',
              color: 'var(--color-text-muted)',
              lineHeight: '1.6',
              fontWeight: '600'
            }}>
              Data Analytics, Big Data Pipelines, Machine Learning Auditing, SDN Routing, and Visual Data Storytelling.
            </div>
          </div>

          {/* Hard Skills (with Vector Icons) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <h4 style={{ fontSize: '15px', fontWeight: '800', textTransform: 'uppercase', color: 'var(--color-charcoal)' }}>
              Tech Stack
            </h4>
            <div className="clean-card" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '8px'
            }}>
              {hardSkills.map((skill, idx) => (
                <div 
                  key={idx}
                  style={{
                    borderRadius: '12px',
                    padding: '8px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    backgroundColor: '#fafafa',
                    border: '1px solid rgba(0,0,0,0.03)',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
                  }}
                  title={skill.label}
                >
                  {/* Styled Vector SVG Logo rendering */}
                  <TechIcon name={skill.name} size={26} />
                  <span style={{ fontSize: '8px', fontWeight: '800', textAlign: 'center', color: 'var(--color-charcoal)', textTransform: 'uppercase' }}>
                    {skill.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <h4 style={{ fontSize: '15px', fontWeight: '800', textTransform: 'uppercase', color: 'var(--color-charcoal)' }}>
              Competencies
            </h4>
            <div className="clean-card" style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px'
            }}>
              {softSkills.map((skill, idx) => (
                <span 
                  key={idx}
                  style={{
                    fontSize: '11px',
                    fontWeight: '800',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    backgroundColor: idx % 2 === 0 ? 'var(--color-charcoal)' : 'var(--bg-canvas)',
                    color: idx % 2 === 0 ? '#ffffff' : 'var(--color-charcoal)',
                    border: '1px solid rgba(0,0,0,0.03)'
                  }}
                >
                  #{skill}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Column 3: Education */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h4 style={{ fontSize: '15px', fontWeight: '800', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-charcoal)' }}>
            <GraduationCap size={16} color="var(--color-text-muted)" />
            Education
          </h4>
          <Timeline items={educationData} />
          
          {/* Organizations Timeline Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
            <h4 style={{ fontSize: '14px', fontWeight: '800', textTransform: 'uppercase', color: 'var(--color-charcoal)' }}>
              Organizations
            </h4>
            <div className="clean-card" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', fontWeight: '800', color: 'var(--color-red)' }}>
                <span>HMIT ITS SURABAYA</span>
                <span>2025</span>
              </div>
              <h5 style={{ fontSize: '13px', fontWeight: '800', color: 'var(--color-charcoal)' }}>Staff of External Affairs</h5>
              <p style={{ fontSize: '11px', color: 'var(--color-text-muted)', lineHeight: '1.4' }}>
                Led the ITCare 2.0 aid distribution program. Organized "Company Visit 2.0" to Apple Developer Academy and IDX.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ExperienceSection;
