"use client";

import UnbeatableTicTacToe from "./UnbeatableTicTacToe";

export default function GameSection() {
  return (
    <section
      id="game"
      className="w-full max-w-6xl mx-auto relative z-10 flex flex-col py-12 px-4 sm:px-6 md:px-12 min-h-screen justify-center items-center"
    >
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-[3.5rem] sm:text-[4rem] md:text-[6rem] font-extrabold leading-[0.85] tracking-tighter mb-4">
          Play
          <br />
          With Me.
        </h2>
        <p className="text-sm md:text-base text-gray-500 font-medium">
          Can you beat me?
        </p>
      </div>

      <UnbeatableTicTacToe />

      <div className="mt-24 w-full flex items-center justify-between border-t border-gray-200 pt-8 pb-24">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">
            Built with passion and dedication
          </span>
        </div>
        <div className="text-[10px] md:text-xs font-bold">
          © 2026 Dicky Adi Saputra. All rights reserved.
        </div>
      </div>
    </section>
  );
}
