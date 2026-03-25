'use client';

import { ChevronUp } from 'lucide-react';
import ProjectCard from './ProjectCard';

const PROJECTS = [
  {
    title: 'E-Commerce App',
    desc: 'A full-stack online store with real-time inventory.',
    tech: ['Next.js', 'Firebase', 'Tailwind'],
    image: 'https://picsum.photos/seed/shop/800/600'
  },
  {
    title: 'Portfolio Poster',
    desc: 'This aesthetic portfolio website inspired by IG stories.',
    tech: ['React', 'Motion', 'Tailwind'],
    image: 'https://picsum.photos/seed/portfolio/800/600'
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full max-w-6xl mx-auto relative z-10 flex flex-col py-12 px-4 sm:px-6 md:px-12 min-h-screen justify-center">
      <div className="flex justify-between text-[11px] md:text-xs font-medium tracking-wide mb-8 md:mb-10">
        <span>Portfolio</span>
        <span>Recent Projects</span>
      </div>

      <h2 className="text-[4rem] sm:text-[5rem] md:text-[7.5rem] font-extrabold leading-[0.85] tracking-tighter mb-8 md:mb-12">
        My<br />
        Works.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>

      <div className="mt-16 lg:mt-24 flex justify-center w-full">
        <ChevronUp className="w-8 h-8 md:w-10 md:h-10 text-black" />
      </div>
    </section>
  );
}