import React from 'react';
import { ArrowRight, Briefcase } from 'lucide-react';

const Hero = ({ scrollToSection }) => {
  return (
    <header className="hero-gdevelop-space">
      {/* Background Stars Pattern */}
      <div className="gdevelop-stars" />

      {/* Glowing Moon */}
      <div className="hero-moon" />

      {/* Main Illustrative Center Content */}
      <div className="hero-content-gd">
        <h1 className="hero-title-gd">
          Data Engineering &amp;<br />
          Visual Analytics made easy
        </h1>
        
        <p className="hero-subtitle-gd">
          Hi, I'm Muhammad Andrean. I build robust data pipelines, design interactive analyst dashboards, and create game-winning robotic systems.
        </p>

        <div className="hero-btns-gd">
          <button 
            onClick={() => scrollToSection('projects')}
            className="hero-btn-red"
          >
            Explore Work
            <ArrowRight size={16} />
          </button>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className="hero-btn-outline"
          >
            Get In Touch
            <Briefcase size={16} />
          </button>
        </div>
      </div>

      {/* Floating Island LEFT (Lego Spiderman Island) */}
      <div className="hero-island island-left">
        {/* Lego Spiderman Head Character Sitting on top of the grass */}
        <img 
          src="/lego_spiderman.png" 
          alt="Lego Spiderman" 
          className="lego-character-hero"
          style={{
            position: 'absolute',
            bottom: '36%',
            left: '38%',
            width: '65px',
            height: 'auto',
            transformOrigin: 'bottom center'
          }}
        />
        
        {/* Hand-drawn Left Island SVG */}
        <svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
          {/* Rocks Base */}
          <path d="M30,95 L270,95 L220,155 L170,185 L120,185 L60,155 Z" fill="#151719" />
          <path d="M50,95 L250,95 L210,135 L170,155 L120,155 L80,135 Z" fill="#25282c" />
          {/* Hanging Vines */}
          <path d="M55,95 Q45,120 60,140 Q55,150 47,155" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M95,100 Q105,125 90,145" stroke="#10b981" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M225,95 Q215,115 235,135" stroke="#10b981" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          {/* Grass Top Overlay */}
          <path d="M15,90 C65,70 235,70 285,90 C300,95 300,103 285,108 C235,120 65,120 15,108 C0,103 0,95 15,90 Z" fill="#10b981" />
          <path d="M20,92 C65,77 235,77 280,92 C280,97 235,107 20,107 Z" fill="#059669" />
        </svg>
      </div>

      {/* Floating Island RIGHT (Portal Gate Island) */}
      <div className="hero-island island-right">
        {/* Swirling Portal Blue/Cyan Glow */}
        <div className="portal-glow" style={{
          position: 'absolute',
          bottom: '36%',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1
        }} />
        
        {/* Portal Stone Archway */}
        <svg viewBox="0 0 100 120" style={{
          position: 'absolute',
          bottom: '36%',
          left: '36%',
          width: '72px',
          height: '92px',
          zIndex: 3
        }}>
          <path d="M15,100 C15,30 85,30 85,100" stroke="#151719" strokeWidth="9" strokeLinecap="round" fill="none" />
          <path d="M15,100 C15,30 85,30 85,100" stroke="#25282c" strokeWidth="5" strokeLinecap="round" fill="none" />
          <circle cx="30" cy="65" r="2.5" fill="#a2f2f7" />
          <circle cx="50" cy="40" r="2.5" fill="#a2f2f7" />
          <circle cx="70" cy="65" r="2.5" fill="#a2f2f7" />
        </svg>

        {/* Hand-drawn Right Island SVG */}
        <svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
          {/* Rocks Base */}
          <path d="M30,95 L270,95 L220,155 L170,185 L120,185 L60,155 Z" fill="#151719" />
          <path d="M50,95 L250,95 L210,135 L170,155 L120,155 L80,135 Z" fill="#25282c" />
          {/* Hanging Vines */}
          <path d="M75,100 Q85,120 70,140" stroke="#10b981" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M215,95 Q205,115 225,135 Q220,145 210,153" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* Grass Top Overlay */}
          <path d="M15,90 C65,70 235,70 285,90 C300,95 300,103 285,108 C235,120 65,120 15,108 C0,103 0,95 15,90 Z" fill="#10b981" />
          <path d="M20,92 C65,77 235,77 280,92 C280,97 235,107 20,107 Z" fill="#059669" />
        </svg>
      </div>

      {/* Floating Island MID (Small) */}
      <div className="hero-island island-mid">
        <svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
          <path d="M10,40 L90,40 L70,65 L50,75 L30,65 Z" fill="#151719" />
          <path d="M5,38 C25,28 75,28 95,38 C100,41 100,45 95,47 C75,52 25,52 5,47 C0,45 0,41 5,38 Z" fill="#10b981" />
        </svg>
      </div>

      {/* Floating Coin above small island */}
      <div className="floating-coin" />

      {/* Fluffy Transition Clouds masking the bottom of the banner */}
      <svg className="hero-transition-clouds" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0,80 C120,60 240,100 360,80 C480,60 600,100 720,80 C840,60 960,100 1080,80 C1200,60 1320,100 1440,80 L1440,120 L0,120 Z" opacity="0.45" />
        <path d="M0,92 C180,72 320,112 500,92 C680,72 820,112 1000,92 C1180,72 1280,112 1440,92 L1440,120 L0,120 Z" opacity="0.75" />
        <path d="M0,102 C150,87 300,117 450,102 C600,87 750,117 900,102 C1050,87 1200,117 1440,102 L1440,120 L0,120 Z" />
      </svg>
    </header>
  );
};

export default Hero;
