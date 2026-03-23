'use client';

import { useState, useEffect } from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreVertical, MousePointer2, ChevronUp, Code2, Briefcase, FolderRoot, Cpu, Globe, Layout, Database, Terminal, Quote, Home, Activity, MessageSquare, Folder, Gamepad2 } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'motion/react';

const SKILLS = [
  { name: 'React', icon: <Layout className="w-6 h-6 md:w-8 md:h-8" /> },
  { name: 'Next.js', icon: <Globe className="w-6 h-6 md:w-8 md:h-8" /> },
  { name: 'TypeScript', icon: <Code2 className="w-6 h-6 md:w-8 md:h-8" /> },
  { name: 'Tailwind', icon: <Cpu className="w-6 h-6 md:w-8 md:h-8" /> },
  { name: 'Node.js', icon: <Terminal className="w-6 h-6 md:w-8 md:h-8" /> },
  { name: 'Firebase', icon: <Database className="w-6 h-6 md:w-8 md:h-8" /> },
];

const EXPERIENCE = [
  {
    title: 'Frontend Developer',
    company: 'Tech Studio',
    period: '2023 - Present',
    desc: 'Developing high-performance web applications using React and Next.js.'
  },
  {
    title: 'UI Designer',
    company: 'Creative Agency',
    period: '2022 - 2023',
    desc: 'Designing aesthetic and user-friendly interfaces for mobile and web.'
  }
];

const PROJECTS = [
  {
    title: 'E-Commerce App',
    desc: 'A full-stack online store with real-time inventory.',
    tech: ['Next.js', 'Firebase', 'Tailwind'],
    image: 'https://picsum.photos/seed/shop/800/600'
  },
  {
    title: 'Portfolio Poster',
    desc: 'This aesthetic portfolio website inspired by IG stories.',
    tech: ['React', 'Motion', 'Tailwind'],
    image: 'https://picsum.photos/seed/portfolio/800/600'
  }
];

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

const WIN_PATTERNS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

function checkWinner(board: (string | null)[]) {
  for (let i = 0; i < WIN_PATTERNS.length; i++) {
    const [a, b, c] = WIN_PATTERNS[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  if (!board.includes(null)) return 'Draw';
  return null;
}

const minimax = (currentBoard: (string | null)[], depth: number, isMaximizing: boolean): number => {
  let result = checkWinner(currentBoard);
  if (result === 'O') return 10 - depth;
  if (result === 'X') return depth - 10;
  if (result === 'Draw') return 0;

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < 9; i++) {
      if (!currentBoard[i]) {
        currentBoard[i] = 'O';
        let score = minimax(currentBoard, depth + 1, false);
        currentBoard[i] = null;
        bestScore = Math.max(score, bestScore);
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < 9; i++) {
      if (!currentBoard[i]) {
        currentBoard[i] = 'X';
        let score = minimax(currentBoard, depth + 1, true);
        currentBoard[i] = null;
        bestScore = Math.min(score, bestScore);
      }
    }
    return bestScore;
  }
};

const getBestMove = (currentBoard: (string | null)[]) => {
  let bestScore = -Infinity;
  let move = -1;
  for (let i = 0; i < 9; i++) {
    if (!currentBoard[i]) {
      currentBoard[i] = 'O';
      let score = minimax(currentBoard, 0, false);
      currentBoard[i] = null;
      if (score > bestScore) {
        bestScore = score;
        move = i;
      }
    }
  }
  return move;
};

function UnbeatableTicTacToe() {
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [winner, setWinner] = useState<string | null>(null);

  useEffect(() => {
    if (!isPlayerTurn && !winner) {
      const timer = setTimeout(() => {
        const aiMove = getBestMove([...board]);
        if (aiMove !== -1) {
          const newBoard = [...board];
          newBoard[aiMove] = 'O';
          setBoard(newBoard);
          const newWinner = checkWinner(newBoard);
          if (newWinner) {
            setWinner(newWinner);
          } else {
            setIsPlayerTurn(true);
          }
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isPlayerTurn, board, winner]);

  const handleCellClick = (index: number) => {
    if (board[index] || winner || !isPlayerTurn) return;
    
    const newBoard = [...board];
    newBoard[index] = 'X';
    setBoard(newBoard);
    
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
    } else {
      setIsPlayerTurn(false);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setIsPlayerTurn(true);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-sm">
      <div className="flex justify-between w-full mb-6 px-4">
        <div className={`text-sm font-bold px-4 py-2 rounded-full transition-colors ${isPlayerTurn && !winner ? 'bg-black text-white' : 'bg-gray-100 text-gray-400'}`}>
          You (X)
        </div>
        <div className={`text-sm font-bold px-4 py-2 rounded-full transition-colors ${!isPlayerTurn && !winner ? 'bg-black text-white' : 'bg-gray-100 text-gray-400'}`}>
          AI (O)
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full bg-gray-100 p-2 sm:p-3 rounded-3xl">
        {board.map((cell, i) => (
          <button
            key={i}
            onClick={() => handleCellClick(i)}
            disabled={!!cell || !!winner || !isPlayerTurn}
            className={`h-20 sm:h-24 md:h-28 bg-white rounded-2xl text-4xl md:text-5xl font-extrabold flex items-center justify-center transition-all duration-300 ${!cell && !winner && isPlayerTurn ? 'hover:bg-gray-50 active:scale-95 cursor-pointer' : 'cursor-default'} ${cell === 'X' ? 'text-black' : 'text-red-500'}`}
          >
            {cell}
          </button>
        ))}
      </div>

      <div className="h-24 mt-8 flex items-center justify-center w-full">
        {winner && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-4 text-center"
          >
            <div className="text-xl md:text-2xl font-extrabold">
              {winner === 'Draw' ? "It's a Draw!" : winner === 'X' ? "You Won! (Wait, that's illegal)" : "AI Wins!"}
            </div>
            <button 
              onClick={resetGame}
              className="px-8 py-3 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition-colors active:scale-95"
            >
              Play Again
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

const NAV_ITEMS = [
  { id: 'hero', icon: Home, label: 'Home' },
  { id: 'skills', icon: Activity, label: 'Skills' },
  { id: 'experience', icon: Briefcase, label: 'Experience' },
  { id: 'views', icon: MessageSquare, label: 'Views' },
  { id: 'projects', icon: Folder, label: 'Projects' },
  { id: 'game', icon: Gamepad2, label: 'Game' },
];

export default function Page() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-white relative flex flex-col items-center overflow-x-hidden">
      {/* Grid Background */}
      <div className="fixed inset-0 pointer-events-none bg-grid-pattern opacity-50"></div>

      {/* Section 1: Hero */}
      <section id="hero" className="w-full max-w-6xl mx-auto relative z-10 flex flex-col py-12 px-4 sm:px-6 md:px-12 min-h-screen justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 w-full">
          
          {/* Left Column: Text Content */}
          <div className="flex-1 flex flex-col w-full relative">
            {/* Top Header */}
            <div className="flex justify-between lg:justify-start lg:gap-12 text-[11px] md:text-xs font-medium tracking-wide mb-8 md:mb-10">
              <span>Daily Instagram Story</span>
              <span>Design poster</span>
            </div>

            {/* Main Heading */}
            <div className="relative mb-12 lg:mb-16">
              <h1 className="text-[4rem] sm:text-[5.5rem] md:text-[7.5rem] lg:text-[8.5rem] font-extrabold leading-[0.85] tracking-tighter break-words">
                Hallo<br />
                Everyone.
              </h1>
              
              {/* URL Badge */}
              <div className="absolute -top-6 right-0 sm:top-3 sm:right-0 lg:left-[65%] lg:right-auto bg-black text-white text-[10px] md:text-xs px-3 py-1.5 rounded-full flex items-center gap-1 italic transform sm:translate-x-2 lg:translate-x-0">
                https://instagram.com/faudznn
              </div>
              
              {/* Cursor and 43/365 */}
              <div className="absolute right-0 -bottom-8 sm:bottom-0 lg:left-[65%] lg:right-auto flex items-center gap-1 transform sm:translate-x-4 sm:translate-y-6 lg:translate-y-12 lg:translate-x-0">
                <MousePointer2 className="w-5 h-5 md:w-6 md:h-6 fill-black" />
                <span className="text-sm md:text-base font-bold">43/365</span>
              </div>
            </div>

            {/* Desktop Bottom Section */}
            <div className="hidden lg:flex flex-col gap-8 mt-auto">
              <div className="flex gap-8 items-start">
                <h2 className="text-[4.5rem] font-extrabold leading-[0.85] tracking-tighter w-[45%]">
                  Instag<br />
                  ramer
                </h2>
                <p className="text-sm leading-relaxed text-gray-800 w-[55%] font-medium pt-2">
                  Virus Typography berawal dari sini, lihat orang-orang bikin story selalu keliatan aesthetic, dan akhirnya mencoba belajar dan produktif diberbagai macam story.
                </p>
              </div>

              <div className="flex items-center gap-8">
                <div className="bg-black text-white text-xs px-4 py-1.5 font-medium">
                  Design by faudznn
                </div>
                <div className="text-xs font-medium text-gray-600 italic">
                  #Sipalingribet#Storyaesthetic
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: IG Frame */}
          <div className="w-full max-w-[420px] shrink-0">
            <div className="bg-white rounded-[2rem] shadow-[0_10px_50px_-15px_rgba(0,0,0,0.2)] p-4 relative border border-gray-100">
              {/* Header */}
              <div className="flex items-center justify-between mb-4 px-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-200 overflow-hidden relative border border-gray-100">
                    <Image src="https://picsum.photos/seed/avatar/100/100" alt="Avatar" fill className="object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <span className="font-bold text-sm md:text-base">faudznn</span>
                </div>
                <MoreVertical className="w-5 h-5 text-gray-500" />
              </div>

              {/* Main Image Area */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 mb-4 border border-gray-200">
                <Image src="https://picsum.photos/seed/marble/400/500?grayscale&blur=2" alt="Background" fill className="object-cover opacity-60" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                   <div className="relative w-[90%] h-[95%]">
                      <Image src="https://picsum.photos/seed/photographer/400/500" alt="Photographer" fill className="object-cover rounded-xl border-[6px] border-white shadow-lg" referrerPolicy="no-referrer" />
                   </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between px-2 pb-2">
                <div className="flex items-center gap-4">
                  <Heart className="w-6 h-6 md:w-7 md:h-7 text-red-500 fill-red-500" />
                  <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-gray-700" />
                  <Send className="w-6 h-6 md:w-7 md:h-7 text-gray-700" />
                </div>
                <div className="flex items-center gap-4">
                   <span className="font-caveat text-3xl md:text-4xl -rotate-6 transform translate-y-1 mr-2">Tap here</span>
                   <Bookmark className="w-6 h-6 md:w-7 md:h-7 text-gray-700" />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Bottom Section */}
          <div className="flex lg:hidden flex-col gap-6 w-full mt-8">
            <div className="flex gap-4 items-start">
              <h2 className="text-[2.5rem] sm:text-[3.5rem] font-extrabold leading-[0.85] tracking-tighter w-[45%]">
                Instag<br />
                ramer
              </h2>
              <p className="text-[10px] sm:text-[11px] leading-relaxed text-gray-800 w-[55%] font-medium pt-1">
                Virus Typography berawal dari sini, lihat orang-orang bikin story selalu keliatan aesthetic, dan akhirnya mencoba belajar dan produktif diberbagai macam story.
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div className="bg-black text-white text-[9px] sm:text-[10px] px-3 py-1 font-medium">
                Design by faudznn
              </div>
              <div className="text-[9px] sm:text-[11px] font-medium text-gray-600 italic">
                #Sipalingribet#Storyaesthetic
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

      {/* Section 2: Skills */}
      <section id="skills" className="w-full max-w-6xl mx-auto relative z-10 flex flex-col py-12 px-4 sm:px-6 md:px-12 min-h-screen justify-center">
        <div className="flex justify-between text-[11px] md:text-xs font-medium tracking-wide mb-8 md:mb-10">
          <span>My Capabilities</span>
          <span>Technical Skills</span>
        </div>

        <h2 className="text-[4rem] sm:text-[5rem] md:text-[7.5rem] font-extrabold leading-[0.85] tracking-tighter mb-8 md:mb-12">
          My<br />
          Skills.
        </h2>

        {/* Horizontal Scroll for Skills */}
        <div className="relative w-full -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0">
          <div className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {SKILLS.map((skill, i) => (
              <div key={i} className="snap-center shrink-0 w-32 h-32 md:w-48 md:h-48 bg-white rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center justify-center gap-3 hover:-translate-y-2 transition-transform duration-300">
                <div className="p-3 md:p-5 bg-gray-50 rounded-2xl text-black">
                  {skill.icon}
                </div>
                <span className="text-xs md:text-base font-bold">{skill.name}</span>
              </div>
            ))}
          </div>
          <div className="mt-2 text-[10px] md:text-xs text-gray-400 italic text-center md:text-left">
            ← Slide to see more →
          </div>
        </div>

        <div className="mt-12 p-6 md:p-8 bg-black text-white rounded-3xl max-w-2xl">
          <p className="text-[11px] md:text-sm leading-relaxed opacity-80">
            Saya fokus pada pengembangan antarmuka yang bersih dan performa tinggi. Selalu mengeksplorasi teknologi terbaru untuk memberikan pengalaman pengguna yang luar biasa.
          </p>
        </div>

        <div className="mt-16 lg:mt-24 flex justify-center w-full">
          <ChevronUp className="w-8 h-8 md:w-10 md:h-10 text-black" />
        </div>
      </section>

      {/* Section 3: Experience */}
      <section id="experience" className="w-full max-w-6xl mx-auto relative z-10 flex flex-col py-12 px-4 sm:px-6 md:px-12 min-h-screen justify-center">
        <div className="flex justify-between text-[11px] md:text-xs font-medium tracking-wide mb-8 md:mb-10">
          <span>Career Journey</span>
          <span>Experience</span>
        </div>

        <h2 className="text-[4rem] sm:text-[5rem] md:text-[7.5rem] font-extrabold leading-[0.85] tracking-tighter mb-8 md:mb-12">
          Work<br />
          Exp.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {EXPERIENCE.map((exp, i) => (
            <div key={i} className="relative pl-8 md:pl-10 border-l-2 border-black py-2">
              <div className="absolute w-4 h-4 md:w-5 md:h-5 bg-black rounded-full -left-[9px] md:-left-[11px] top-4"></div>
              <span className="text-[10px] md:text-xs font-bold text-gray-400">{exp.period}</span>
              <h3 className="text-lg md:text-2xl font-extrabold leading-tight mt-1">{exp.title}</h3>
              <p className="text-xs md:text-sm font-bold text-gray-600 mb-2">{exp.company}</p>
              <p className="text-[11px] md:text-sm leading-relaxed text-gray-800">
                {exp.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 lg:mt-24 flex justify-center w-full">
          <ChevronUp className="w-8 h-8 md:w-10 md:h-10 text-black" />
        </div>
      </section>

      {/* Section 4: Thoughts on Issues */}
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
            <div key={i} className="bg-gray-50 rounded-3xl p-8 md:p-10 border border-gray-100 relative group hover:bg-black hover:text-white transition-colors duration-300">
              <Quote className="w-10 h-10 text-gray-200 absolute top-6 right-6 group-hover:text-gray-800 transition-colors duration-300" />
              <span className="text-[10px] md:text-xs font-bold text-gray-400 group-hover:text-gray-400">{issue.date}</span>
              <h3 className="text-xl md:text-2xl font-extrabold mt-2 mb-4">{issue.topic}</h3>
              <p className="text-sm md:text-base leading-relaxed opacity-80">
                &quot;{issue.opinion}&quot;
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 lg:mt-24 flex justify-center w-full">
          <ChevronUp className="w-8 h-8 md:w-10 md:h-10 text-black" />
        </div>
      </section>

      {/* Section 5: Projects */}
      <section id="projects" className="w-full max-w-6xl mx-auto relative z-10 flex flex-col py-12 px-4 sm:px-6 md:px-12 min-h-screen justify-center">
        <div className="flex justify-between text-[11px] md:text-xs font-medium tracking-wide mb-8 md:mb-10">
          <span>Portfolio</span>
          <span>Recent Projects</span>
        </div>

        <h2 className="text-[4rem] sm:text-[5rem] md:text-[7.5rem] font-extrabold leading-[0.85] tracking-tighter mb-8 md:mb-12">
          My<br />
          Works.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {PROJECTS.map((project, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-video rounded-3xl overflow-hidden mb-4 shadow-xl border border-gray-100">
                <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[9px] md:text-xs font-bold">
                  {project.tech.join(' • ')}
                </div>
              </div>
              <h3 className="text-xl md:text-3xl font-extrabold mb-1 md:mb-2">{project.title}</h3>
              <p className="text-[11px] md:text-sm text-gray-600 leading-relaxed">
                {project.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 lg:mt-24 flex justify-center w-full">
          <ChevronUp className="w-8 h-8 md:w-10 md:h-10 text-black" />
        </div>
      </section>

      {/* Section 6: Interactive Footer (Game) */}
      <section id="game" className="w-full max-w-6xl mx-auto relative z-10 flex flex-col py-12 px-4 sm:px-6 md:px-12 min-h-screen justify-center items-center">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-[3.5rem] sm:text-[4rem] md:text-[6rem] font-extrabold leading-[0.85] tracking-tighter mb-4">
            Play<br />
            With AI.
          </h2>
          <p className="text-sm md:text-base text-gray-500 font-medium">
            Can you beat the unbeatable system?
          </p>
        </div>

        <UnbeatableTicTacToe />

        <div className="mt-24 w-full flex items-center justify-between border-t border-gray-200 pt-8 pb-24">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">Available for hire</span>
          </div>
          <div className="text-[10px] md:text-xs font-bold">© 2024 FAUDZNN</div>
        </div>
      </section>

      {/* Floating Navigation Bar */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-black rounded-full px-6 py-3.5 flex items-center gap-6 md:gap-8 shadow-2xl border border-gray-800">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group relative transition-all duration-300 hover:scale-110 flex items-center justify-center ${isActive ? 'text-white' : 'text-gray-500 hover:text-white'}`}
                aria-label={`Scroll to ${item.id}`}
              >
                <Icon className="w-6 h-6 md:w-7 md:h-7" strokeWidth={isActive ? 2.5 : 2} />
                
                {/* Tooltip */}
                <span className="absolute -top-12 scale-0 group-hover:scale-100 transition-all duration-200 bg-white text-black text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-lg pointer-events-none whitespace-nowrap origin-bottom">
                  {item.label}
                  {/* Tooltip Arrow */}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white"></span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </main>
  );
}

