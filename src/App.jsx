import React, { useState, useEffect } from 'react';
import Hero from './sections/Hero';
import Navbar from './sections/Navbar';
import AboutMe from './sections/AboutMe';
import Projects from './sections/Projects';
import ExperienceSection from './sections/ExperienceSection';
import Honors from './sections/Honors';
import Contact from './sections/Contact';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('about-me');

  useEffect(() => {
    const sections = ['about-me', 'projects', 'experience', 'honors', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Spy on middle of the viewport
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky navbar + offset
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
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* 1. Hero Block with Space Landscape & Lego Spiderman */}
      <Hero scrollToSection={scrollToSection} />

      {/* 2. Sticky Tab Navbar */}
      <Navbar activeSection={activeSection} setActiveSection={scrollToSection} />

      {/* 3. Stacked Sections Container */}
      <div className="scroll-section-container">
        <div className="container">
          
          {/* About Me Section Card */}
          <div id="about-me" className="scroll-section-anchor">
            <div className="scroll-section-card">
              <AboutMe scrollToSection={scrollToSection} />
            </div>
          </div>

          {/* Projects (Work) Section Card */}
          <div id="projects" className="scroll-section-anchor">
            <div className="scroll-section-card">
              <Projects />
            </div>
          </div>

          {/* Experience (Resume) Section Card */}
          <div id="experience" className="scroll-section-anchor">
            <div className="scroll-section-card">
              <ExperienceSection />
            </div>
          </div>

          {/* Honors Section Card */}
          <div id="honors" className="scroll-section-anchor">
            <div className="scroll-section-card">
              <Honors />
            </div>
          </div>

          {/* Contact Section Card */}
          <div id="contact" className="scroll-section-anchor">
            <div className="scroll-section-card">
              <Contact />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
