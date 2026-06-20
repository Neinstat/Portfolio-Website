import React, { useState } from 'react';
import Hero from './sections/Hero';
import AboutMe from './sections/AboutMe';
import Projects from './sections/Projects';
import ExperienceSection from './sections/ExperienceSection';
import Honors from './sections/Honors';
import Contact from './sections/Contact';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('about-me');

  const tabs = [
    { id: 'about-me', label: 'About me', type: 'charcoal', color: 'var(--color-charcoal)' },
    { id: 'projects', label: 'Work', type: 'red', color: 'var(--color-red)' },
    { id: 'experience', label: 'Resume', type: 'charcoal', color: 'var(--color-charcoal)' },
    { id: 'honors', label: 'Honors', type: 'red', color: 'var(--color-red)' },
    { id: 'contact', label: 'Contact', type: 'charcoal', color: 'var(--color-charcoal)' }
  ];

  const activeTabDetails = tabs.find(t => t.id === activeTab) || tabs[0];

  const renderContent = () => {
    switch (activeTab) {
      case 'about-me':
        return <AboutMe setActiveTab={setActiveTab} />;
      case 'projects':
        return <Projects />;
      case 'experience':
        return <ExperienceSection />;
      case 'honors':
        return <Honors />;
      case 'contact':
        return <Contact />;
      default:
        return <AboutMe setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', paddingBottom: '60px' }}>
      {/* 1. Hero Block with Red Glowing Background Orb */}
      <Hero />

      {/* 2. Main Folder Deck */}
      <div className="container" style={{ width: '100%' }}>
        
        {/* Archive Folder Tab Deck */}
        <div className="archive-tab-deck">
          {tabs.map((tab, idx) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`archive-tab tab-${tab.type} ${isActive ? 'active' : ''}`}
                style={{ zIndex: tabs.length - idx }} // Controls stacking order left-to-right
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Folder Body Container */}
        <div 
          className="archive-folder-body" 
          style={{ '--folder-accent': activeTabDetails.color }}
        >
          {renderContent()}
        </div>

      </div>
    </div>
  );
}

export default App;
