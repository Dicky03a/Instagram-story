'use client';

import { ChevronUp } from 'lucide-react';
import IssueCard from './IssueCard';

const ISSUES = [
  {
    topic: 'AI dalam Industri Kreatif',
    date: 'Maret 2024',
    opinion: 'AI bukan untuk menggantikan kita, tapi alat yang memperkuat kreativitas. Desainer dan developer yang bisa memanfaatkan AI akan jauh lebih produktif dan inovatif dalam memecahkan masalah.'
  },
  {
    topic: 'Budaya Kerja Remote',
    date: 'Februari 2024',
    opinion: 'Kerja remote menuntut disiplin tinggi dan komunikasi asinkron yang baik. Ini bukan sekadar bekerja dari rumah, tapi tentang membangun sistem kerja yang berorientasi pada hasil (output-driven).'
  }
];

export default function ViewsSection() {
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
        {ISSUES.map((issue, i) => (
          <IssueCard key={i} issue={issue} />
        ))}
      </div>

      <div className="mt-16 lg:mt-24 flex justify-center w-full">
        <ChevronUp className="w-8 h-8 md:w-10 md:h-10 text-black" />
      </div>
    </section>
  );
}