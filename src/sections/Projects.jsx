import React, { useState } from 'react';
import FolderCard from '../components/FolderCard';
import Modal from '../components/Modal';
import { ArrowUpRight, Database, Network, Cpu, Paintbrush } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      category: 'Big Data Analytics',
      title: 'Kimia Farma Sales Pipeline',
      subtitle: 'BigQuery sales dashboard',
      color: 'var(--color-red)',
      tabText: 'DATA',
      image: '/project_brand.png',
      description: 'Engineered end-to-end data pipelines in Google BigQuery to ingest, clean, and transform multi-provincial pharmaceutical sales datasets. Developed an interactive Looker Studio sales performance dashboard to visualize key business metrics, directly contributing to corporate data analytics processes.',
      tools: ['SQL', 'BigQuery', 'Looker Studio', 'Data Cleansing', 'ETL Pipelines'],
      icon: <Database size={22} />,
      link: 'https://tinyurl.com/Project-Portfolio-Andrean'
    },
    {
      id: 2,
      category: 'Network Analytics',
      title: 'GGSN Routing & Capacity Planning',
      subtitle: 'Telkomsel analyst dashboards',
      color: 'var(--color-charcoal)',
      tabText: 'NET',
      image: '/project_ops.png',
      description: 'Performed validation and cleansing of Network Element (NE) & POP forecast data using Exponential Triple Smoothing (ETS) and extrapolation in Excel. Designed GGSN traffic proportion charts (IX, IIX, SDN) and developed 2 interactive Tableau dashboards for capacity planning, transforming complex routing metrics into actionable visuals to drive CapEx/OpEx upgrades.',
      tools: ['Tableau', 'SQL', 'DBeaver', 'Excel', 'ETS Forecasting'],
      icon: <Network size={22} />,
      link: 'https://tinyurl.com/Project-Portfolio-Andrean'
    },
    {
      id: 3,
      category: 'Robot Design Research',
      title: 'Autonomous Robot Exterior Design',
      subtitle: 'KRI 2024 Best Design Winner',
      color: 'var(--color-red)',
      tabText: 'ROBOT',
      image: '',
      description: 'Led materials research and exterior design development for an autonomous soccer robot with the IRIS Robotic Team ITS. Speared aerodynamic exterior design innovations that earned the team the prestigious Best Design Award at the National Robot Contest (KRI) 2024.',
      tools: ['CAD Design', 'Aerodynamics', 'Robot Prototyping', 'Visual Branding'],
      icon: <Cpu size={22} />,
      link: 'https://tinyurl.com/Project-Portfolio-Andrean'
    },
    {
      id: 4,
      category: 'UI/UX & Web Design',
      title: 'Futurest 2025 Event Platform',
      subtitle: 'SRE ITS renewable energy portal',
      color: 'var(--color-charcoal)',
      tabText: 'UI/UX',
      image: '',
      description: 'Developed the user interface (UI) and user experience (UX) for the SRE ITS Futurest 2025 website and mobile application. Focused on creating intuitive navigation paradigms for clean energy information, event schedules, and user registrations.',
      tools: ['Figma', 'UI/UX Design', 'Wireframing', 'User Flows'],
      icon: <Paintbrush size={22} />,
      link: 'https://tinyurl.com/Project-Portfolio-Andrean'
    }
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
          Work Collection
        </h3>
        <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', marginTop: '6px', lineHeight: '1.5' }}>
          An archive of data engineering, network analytics, and engineering design projects. Hover over folders to peek inside and click to view full specifications.
        </p>
      </div>

      {/* Folders Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))',
        gap: '24px',
        paddingTop: '10px'
      }} className="project-folders-grid">
        {projectsData.map((project) => (
          <FolderCard 
            key={project.id}
            label={project.category}
            title={project.title}
            subtitle={project.subtitle}
            image={project.image}
            color={project.color}
            tabText={project.tabText}
            tags={project.tools}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* PROJECT DETAIL MODAL */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject ? `${selectedProject.category} File` : ''}
        color={selectedProject?.color}
      >
        {selectedProject && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: '48% 52%',
            gap: '30px',
            alignItems: 'start'
          }} className="project-detail-layout">
            
            {/* Left Side: Media view */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{
                width: '100%',
                aspectRatio: '4 / 3',
                backgroundColor: 'var(--bg-canvas)',
                borderRadius: '12px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(0,0,0,0.05)',
                boxShadow: 'var(--shadow-card)'
              }}>
                {selectedProject.image ? (
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    color: 'var(--color-text-muted)',
                    textAlign: 'center',
                    padding: '20px'
                  }}>
                    {selectedProject.icon}
                    <span style={{ fontSize: '13px', fontWeight: '700' }}>[ Mockup Preview ]</span>
                    <span style={{ fontSize: '10px', opacity: 0.6 }}>Swap with your design asset</span>
                  </div>
                )}
              </div>
              
              <span style={{ fontSize: '11px', color: 'var(--color-text-muted)', fontStyle: 'italic', textAlign: 'center' }}>
                *File asset: public/{(selectedProject.title.toLowerCase().replace(/ /g, '_'))}.png
              </span>
            </div>

            {/* Right Side: Specifications */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div>
                <span style={{
                  fontSize: '10px',
                  fontWeight: '800',
                  textTransform: 'uppercase',
                  border: '1.5px solid rgba(0,0,0,0.08)',
                  padding: '3px 8px',
                  borderRadius: '12px',
                  backgroundColor: selectedProject.color,
                  color: '#ffffff'
                }}>
                  {selectedProject.category}
                </span>
                <h3 style={{ 
                  fontFamily: 'var(--font-heading)', 
                  fontSize: '24px', 
                  fontWeight: '900', 
                  marginTop: '8px',
                  color: 'var(--color-charcoal)'
                }}>
                  {selectedProject.title}
                </h3>
              </div>

              <div>
                <h4 style={{ fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '4px' }}>Overview</h4>
                <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', lineHeight: '1.5', fontWeight: '500' }}>
                  {selectedProject.description}
                </p>
              </div>

              {/* Tools Tags */}
              <div>
                <h4 style={{ fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '6px' }}>Tools Used</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {selectedProject.tools.map((tool, idx) => (
                    <span 
                      key={idx}
                      style={{
                        fontSize: '11px',
                        fontWeight: '700',
                        backgroundColor: '#ffffff',
                        border: '1.5px solid rgba(0,0,0,0.08)',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        color: 'var(--color-charcoal)'
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <a 
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta primary"
                  style={{ flexGrow: 1 }}
                >
                  View Project Details
                  <ArrowUpRight size={14} />
                </a>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="btn-cta secondary"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        )}
      </Modal>

    </div>
  );
};

export default Projects;
