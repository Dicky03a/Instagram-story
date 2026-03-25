'use client';

interface ExperienceCardProps {
  experience: {
    title: string;
    company: string;
    period: string;
    desc: string;
  };
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="relative pl-8 md:pl-10 border-l-2 border-black py-2">
      <div className="absolute w-4 h-4 md:w-5 md:h-5 bg-black rounded-full -left-[9px] md:-left-[11px] top-4"></div>
      <span className="text-[10px] md:text-xs font-bold text-gray-400">{experience.period}</span>
      <h3 className="text-lg md:text-2xl font-extrabold leading-tight mt-1">{experience.title}</h3>
      <p className="text-xs md:text-sm font-bold text-gray-600 mb-2">{experience.company}</p>
      <p className="text-[11px] md:text-sm leading-relaxed text-gray-800">
        {experience.desc}
      </p>
    </div>
  );
}