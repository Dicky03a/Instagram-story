"use client";

import { ChevronUp } from "lucide-react";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  description: string | null;
  image: string | null;
  techStack: string[];
}

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section
      id="projects"
      className="w-full max-w-6xl mx-auto relative z-10 flex flex-col py-12 px-4 sm:px-6 md:px-12 min-h-screen justify-center"
    >
      <div className="flex justify-between text-[11px] md:text-xs font-medium tracking-wide mb-8 md:mb-10">
        <span>Portfolio</span>
        <span>Recent Projects</span>
      </div>

      <h2 className="text-[4rem] sm:text-[5rem] md:text-[7.5rem] font-extrabold leading-[0.85] tracking-tighter mb-8 md:mb-12">
        My
        <br />
        Works.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
        {projects.map((project) => (
          <div key={project.id} className="flex flex-col gap-4">
            <div className="relative w-full h-48 md:h-64 rounded-lg overflow-hidden border">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-slate-100 flex items-center justify-center text-muted-foreground">
                  No preview image
                </div>
              )}
            </div>
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.techStack.map((tech, j) => (
                <span key={j} className="text-xs bg-gray-200 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
        {projects.length === 0 && (
          <p className="text-muted-foreground italic">No projects added yet.</p>
        )}
      </div>

      <div className="mt-16 lg:mt-24 flex justify-center w-full">
        <ChevronUp className="w-8 h-8 md:w-10 md:h-10 text-black" />
      </div>
    </section>
  );
}
