'use client';

import { useState, useEffect } from 'react';
import FloatingNav from './FloatingNav';

const NAV_ITEMS = [
  { id: 'hero' },
  { id: 'skills' },
  { id: 'experience' },
  { id: 'views' },
  { id: 'projects' },
  { id: 'game' },
];

export default function ClientScrollManager() {
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

  return <FloatingNav activeSection={activeSection} onNavigate={scrollToSection} />;
}
