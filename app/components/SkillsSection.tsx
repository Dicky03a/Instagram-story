"use client";

import {
  ChevronUp,
} from "lucide-react";

import reactLogo from "@/app/assets/logo/react.svg";
import nextLogo from "@/app/assets/logo/nextjs.svg";
import mysqlLogo from "@/app/assets/logo/mysql.svg";
import tailwindLogo from "@/app/assets/logo/tailwind.svg";
import laravelLogo from "@/app/assets/logo/Laravel.svg";
import Image from "next/image";

const SKILLS = [
  { name: "React", logo: reactLogo },
  { name: "Next.js", logo: nextLogo },
  { name: "Laravel", logo: laravelLogo },
  { name: "Tailwind CSS", logo: tailwindLogo },
  { name: "MySQL", logo: mysqlLogo },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="w-full max-w-6xl mx-auto relative z-10 flex flex-col py-12 px-4 sm:px-6 md:px-12 min-h-screen justify-center"
    >
      <div className="flex justify-between text-[11px] md:text-xs font-medium tracking-wide mb-8 md:mb-10">
        <span>My Capabilities</span>
        <span>Technical Skills</span>
      </div>

      <h2 className="text-[4rem] sm:text-[5rem] md:text-[7.5rem] font-extrabold leading-[0.85] tracking-tighter mb-8 md:mb-12">
        My
        <br />
        Skills.
      </h2>

      {/* Horizontal Scroll for Skills */}
      <div className="relative w-full -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0">
        <div
          className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {SKILLS.map((skill, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex flex-col items-center gap-3"
            >
              <Image
                src={skill.logo}
                alt={skill.name}
                width={64}
                height={64}
                className="object-contain transition-transform duration-300 hover:scale-110"
              />

              <span className="text-sm md:text-base text-black font-bold">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-2 text-[10px] md:text-xs text-gray-400 italic text-center md:text-left">
          ← Slide to see more →
        </div>
      </div>

      <div className="mt-12 p-6 md:p-8 bg-black text-white rounded-3xl max-w-2xl">
        <p className="text-[11px] md:text-sm leading-relaxed opacity-80">
          Saya fokus pada pengembangan antarmuka yang bersih dan performa
          tinggi. Selalu mengeksplorasi teknologi terbaru untuk memberikan
          pengalaman pengguna yang luar biasa.
        </p>
      </div>

      <div className="mt-16 lg:mt-24 flex justify-center w-full">
        <ChevronUp className="w-8 h-8 md:w-10 md:h-10 text-black" />
      </div>
    </section>
  );
}
