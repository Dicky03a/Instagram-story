'use client';

import Image from 'next/image';

interface ProjectCardProps {
  project: {
    title: string;
    desc: string;
    tech: string[];
    image: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-video rounded-3xl overflow-hidden mb-4 shadow-xl border border-gray-100">
        <Image 
          src={project.image} 
          alt={project.title} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-500" 
          referrerPolicy="no-referrer" 
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[9px] md:text-xs font-bold">
          {project.tech.join(' • ')}
        </div>
      </div>
      <h3 className="text-xl md:text-3xl font-extrabold mb-1 md:mb-2">{project.title}</h3>
      <p className="text-[11px] md:text-sm text-gray-600 leading-relaxed">
        {project.desc}
      </p>
    </div>
  );
}