'use client';

import { useState, useEffect } from 'react';
import { MousePointer2, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'motion/react';
import InstagramFrame from  "./InstagramFrame";

export default function HeroSection() {
  return (
    <section id="hero" className="w-full max-w-6xl mx-auto relative z-10 flex flex-col py-12 px-4 sm:px-6 md:px-12 min-h-screen justify-center">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 w-full">

        <div className="flex-1 flex flex-col w-full relative">
          <div className="flex justify-between lg:justify-start lg:gap-12 text-[11px] md:text-xs font-medium tracking-wide mb-8 md:mb-10">
            <span>Daily Story</span>
            <span>Web Developer</span>
          </div>

          <div className="relative mb-12 lg:mb-16">
            <h1 className="text-[4rem] sm:text-[5.5rem] md:text-[7.5rem] lg:text-[8.5rem] font-extrabold leading-[0.85] tracking-tighter break-words">
              Hallo<br />
              Everyone.
            </h1>

            <div className="absolute -top-6 right-0 sm:top-3 sm:right-0 lg:left-[65%] lg:right-auto bg-black text-white text-[10px] md:text-xs px-3 py-1.5 rounded-full flex items-center gap-1 italic transform sm:translate-x-2 lg:translate-x-0">
              https://portofolio-eta-six-98.vercel.app/
            </div>
          </div>

          <div className="hidden lg:flex flex-col gap-8 mt-auto">
            <div className="flex gap-8 items-start">
              <h2 className="text-[3.5rem] font-extrabold leading-[0.85] tracking-tighter w-[45%]">
                Personal<br />
                Statement
              </h2>
              <p className="text-sm leading-relaxed text-gray-800 w-[55%] font-medium pt-2">
                Virus Typography berawal dari sini, lihat orang-orang bikin story selalu keliatan aesthetic, dan akhirnya mencoba belajar dan produktif diberbagai macam story.
              </p>
            </div>

            <div className="flex items-center gap-8">
              <div className="bg-black text-white text-xs px-4 py-1.5 font-medium">
                Portofolio by Dicky Adi Saputra
              </div>
              <div className="text-xs font-medium text-gray-600 italic">
                #MyStory
              </div>
            </div>
          </div>
        </div>
        <InstagramFrame />

        <div className="flex lg:hidden flex-col gap-6 w-full mt-8">
          <div className="flex gap-4 items-start">
            <h2 className="text-[2rem] sm:text-[3.5rem] font-extrabold leading-[0.85] tracking-tighter w-[45%]">
              Personal<br />
              Statement
            </h2>
            <p className="text-[10px] sm:text-[11px] leading-relaxed text-gray-800 w-[55%] font-medium pt-1">
              Virus Typography berawal dari sini, lihat orang-orang bikin story selalu keliatan aesthetic, dan akhirnya mencoba belajar dan produktif diberbagai macam story.
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="bg-black text-white text-[9px] sm:text-[10px] px-3 py-1 font-medium">
              Portofolio by Dicky Adi Saputra
            </div>
            <div className="text-[9px] sm:text-[11px] font-medium text-gray-600 italic">
              #MyStory#StoryAesthetic
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 lg:mt-24 flex justify-center w-full">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ChevronUp className="w-8 h-8 md:w-10 md:h-10 text-black" />
        </motion.div>
      </div>
    </section>
  );
}