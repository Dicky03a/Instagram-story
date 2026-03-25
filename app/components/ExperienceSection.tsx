'use client';

import { ChevronUp } from 'lucide-react';
import ExperienceCard from './ExperienceCard';

const EXPERIENCE = [
  {
    title: 'Frontend Developer',
    company: 'Tech Studio',
    period: '2023 - Present',
    desc: 'Developing high-performance web applications using React and Next.js.'
  },
  {
    title: 'UI Designer',
    company: 'Creative Agency',
    period: '2022 - 2023',
    desc: 'Designing aesthetic and user-friendly interfaces for mobile and web.'
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="w-full max-w-6xl mx-auto relative z-10 flex flex-col py-12 px-4 sm:px-6 md:px-12 min-h-screen justify-center">
      <div className="flex justify-between text-[11px] md:text-xs font-medium tracking-wide mb-8 md:mb-10">
        <span>Career Journey</span>
        <span>Experience</span>
      </div>

      <h2 className="text-[4rem] sm:text-[5rem] md:text-[7.5rem] font-extrabold leading-[0.85] tracking-tighter mb-8 md:mb-12">
        Work<br />
        Exp.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        {EXPERIENCE.map((exp, i) => (
          <ExperienceCard key={i} experience={exp} />
        ))}
      </div>

      <div className="mt-16 lg:mt-24 flex justify-center w-full">
        <ChevronUp className="w-8 h-8 md:w-10 md:h-10 text-black" />
      </div>
    </section>
  );
}