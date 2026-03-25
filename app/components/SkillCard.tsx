'use client';

interface SkillCardProps {
  skill: {
    name: string;
    icon: React.ReactNode;
  };
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="snap-center shrink-0 w-32 h-32 md:w-48 md:h-48 bg-white rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center justify-center gap-3 hover:-translate-y-2 transition-transform duration-300">
      <div className="p-3 md:p-5 bg-gray-50 rounded-2xl text-black">
        {skill.icon}
      </div>
      <span className="text-xs md:text-base font-bold">{skill.name}</span>
    </div>
  );
}