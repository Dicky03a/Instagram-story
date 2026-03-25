'use client';

import { Heart, MessageCircle, Send, Bookmark, MoreVertical } from 'lucide-react';
import Image from 'next/image';
import logo from "../assets/logo.jpeg";
import fotoProfile from "../assets/myfoto.jpeg";

export default function InstagramFrame() {
  return (
    <div className="w-full max-w-[420px] shrink-0">
      <div className="bg-white rounded-[2rem] shadow-[0_10px_50px_-15px_rgba(0,0,0,0.2)] p-4 relative border border-gray-100">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 px-2">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-200 overflow-hidden relative border border-gray-100">
              <Image src={logo} alt="Avatar" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <span className="font-bold text-sm md:text-base">Dicky Adi Saputra</span>
          </div>
          <MoreVertical className="w-5 h-5 text-gray-500" />
        </div>

        {/* Main Image Area */}
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 mb-4 border border-gray-200">
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="relative w-[100%] h-[100%]">
                <Image src={fotoProfile} alt="Photographer" fill className="object-cover rounded-xl border-[6px] border-white shadow-lg" referrerPolicy="no-referrer" />
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
  );
}