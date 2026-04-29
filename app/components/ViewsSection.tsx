'use client';

import { ChevronUp } from 'lucide-react';
import IssueCard from './IssueCard';

interface View {
  id: string;
  topic: string;
  date: string;
  opinion: string;
}

interface ViewsSectionProps {
  views: View[];
}

export default function ViewsSection({ views }: ViewsSectionProps) {
  return (
    <section id="views" className="w-full max-w-6xl mx-auto relative z-10 flex flex-col py-12 px-4 sm:px-6 md:px-12 min-h-screen justify-center">
      <div className="flex justify-between text-[11px] md:text-xs font-medium tracking-wide mb-8 md:mb-10">
        <span>Personal Views</span>
        <span>Current Issues</span>
      </div>

      <h2 className="text-[4rem] sm:text-[5rem] md:text-[7.5rem] font-extrabold leading-[0.85] tracking-tighter mb-8 md:mb-12">
        My<br />
        Views.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {views.map((view) => (
          <IssueCard key={view.id} issue={view} />
        ))}
        {views.length === 0 && (
          <p className="text-muted-foreground italic">No views added yet.</p>
        )}
      </div>

      <div className="mt-16 lg:mt-24 flex justify-center w-full">
        <ChevronUp className="w-8 h-8 md:w-10 md:h-10 text-black" />
      </div>
    </section>
  );
}
