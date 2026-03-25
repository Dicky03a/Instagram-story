'use client';

import { Home, Activity, Briefcase, MessageSquare, Folder, Gamepad2 } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'hero', icon: Home, label: 'Home' },
  { id: 'skills', icon: Activity, label: 'Skills' },
  { id: 'experience', icon: Briefcase, label: 'Experience' },
  { id: 'views', icon: MessageSquare, label: 'Views' },
  { id: 'projects', icon: Folder, label: 'Projects' },
  { id: 'game', icon: Gamepad2, label: 'Game' },
];

interface FloatingNavProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

export default function FloatingNav({ activeSection, onNavigate }: FloatingNavProps) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-black rounded-full px-6 py-3.5 flex items-center gap-6 md:gap-8 shadow-2xl border border-gray-800">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
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
  );
}