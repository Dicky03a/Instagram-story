'use client';

import { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ViewsSection from './components/ViewsSection';
import ProjectsSection from './components/ProjectsSection';
import GameSection from './components/GameSection';
import FloatingNav from './components/FloatingNav';

const NAV_ITEMS = [
  { id: 'hero' },
  { id: 'skills' },
  { id: 'experience' },
  { id: 'views' },
  { id: 'projects' },
  { id: 'game' },
];

export default function Page() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-white relative flex flex-col items-center overflow-x-hidden">
      {/* Grid Background */}
      <div className="fixed inset-0 pointer-events-none bg-grid-pattern opacity-50"></div>

      {/* Sections */}
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ViewsSection />
      <ProjectsSection />
      <GameSection />

      {/* Floating Navigation Bar */}
      <FloatingNav activeSection={activeSection} onNavigate={scrollToSection} />
    </main>
  );
}