'use client';

import { Quote } from 'lucide-react';

interface IssueCardProps {
  issue: {
    topic: string;
    date: string;
    opinion: string;
  };
}

export default function IssueCard({ issue }: IssueCardProps) {
  return (
    <div className="bg-gray-50 rounded-3xl p-8 md:p-10 border border-gray-100 relative group hover:bg-black hover:text-white transition-colors duration-300">
      <Quote className="w-10 h-10 text-gray-200 absolute top-6 right-6 group-hover:text-gray-800 transition-colors duration-300" />
      <span className="text-[10px] md:text-xs font-bold text-gray-400 group-hover:text-gray-400">{issue.date}</span>
      <h3 className="text-xl md:text-2xl font-extrabold mt-2 mb-4">{issue.topic}</h3>
      <p className="text-sm md:text-base leading-relaxed opacity-80">
        &quot;{issue.opinion}&quot;
      </p>
    </div>
  );
}