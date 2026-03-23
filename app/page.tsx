import { Heart, MessageCircle, Send, Bookmark, MoreVertical, MousePointer2, ChevronUp } from 'lucide-react';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="min-h-screen bg-white relative flex justify-center overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 pointer-events-none bg-grid-pattern"></div>

      <div className="w-full max-w-[420px] relative z-10 flex flex-col py-12 px-8">
        {/* Top Header */}
        <div className="flex justify-between text-[11px] font-medium tracking-wide mb-10">
          <span>Daily Instagram Story</span>
          <span>Design poster</span>
        </div>

        {/* Main Heading */}
        <div className="relative mb-12">
          <h1 className="text-[5.5rem] font-extrabold leading-[0.85] tracking-tighter">
            Hallo<br />
            Everyone.
          </h1>
          
          {/* URL Badge */}
          <div className="absolute top-3 right-0 bg-black text-white text-[10px] px-3 py-1.5 rounded-full flex items-center gap-1 italic transform translate-x-2">
            https://instagram.com/faudznn
          </div>
          
          {/* Cursor and 43/365 */}
          <div className="absolute right-0 bottom-0 flex items-center gap-1 transform translate-x-4 translate-y-6">
            <MousePointer2 className="w-5 h-5 fill-black" />
            <span className="text-sm font-bold">43/365</span>
          </div>
        </div>

        {/* Instagram Frame */}
        <div className="bg-white rounded-[2rem] shadow-[0_10px_50px_-15px_rgba(0,0,0,0.2)] p-4 mb-12 relative border border-gray-100">
          {/* Header */}
          <div className="flex items-center justify-between mb-4 px-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden relative border border-gray-100">
                <Image src="https://picsum.photos/seed/avatar/100/100" alt="Avatar" fill className="object-cover" />
              </div>
              <span className="font-bold text-sm">faudznn</span>
            </div>
            <MoreVertical className="w-5 h-5 text-gray-500" />
          </div>

          {/* Main Image Area */}
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 mb-4 border border-gray-200">
            {/* Background Texture/Image */}
            <Image src="https://picsum.photos/seed/marble/400/500?grayscale&blur=2" alt="Background" fill className="object-cover opacity-60" />
            
            {/* The Person Image (Sticker effect) */}
            <div className="absolute inset-0 flex items-center justify-center p-4">
               <div className="relative w-[90%] h-[95%]">
                  <Image src="https://picsum.photos/seed/photographer/400/500" alt="Photographer" fill className="object-cover rounded-xl border-[6px] border-white shadow-lg" />
               </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between px-2 pb-2">
            <div className="flex items-center gap-4">
              <Heart className="w-6 h-6 text-red-500 fill-red-500" />
              <MessageCircle className="w-6 h-6 text-gray-700" />
              <Send className="w-6 h-6 text-gray-700" />
            </div>
            <div className="flex items-center gap-4">
               {/* Handwritten text */}
               <span className="font-caveat text-3xl -rotate-6 transform translate-y-1 mr-2">Tap here</span>
               <Bookmark className="w-6 h-6 text-gray-700" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-8">
          <div className="flex gap-4 items-start">
            <h2 className="text-[3.5rem] font-extrabold leading-[0.85] tracking-tighter w-[45%]">
              Instag<br />
              ramer
            </h2>
            <p className="text-[11px] leading-relaxed text-gray-800 w-[55%] font-medium pt-1">
              Virus Typography berawal dari sini, lihat orang-orang bikin story selalu keliatan aesthetic, dan akhirnya mencoba belajar dan produktif diberbagai macam story, meski hasilnya tidak sebagus orang-orang, tapi gapapa pd dlu saja whwhwh.
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="bg-black text-white text-[10px] px-3 py-1 font-medium">
              Design by faudznn
            </div>
            <div className="text-[11px] font-medium text-gray-600 italic">
              #Sipalingribet#Storyaesthetic
            </div>
          </div>
        </div>

        {/* Bottom Arrow */}
        <div className="mt-12 flex justify-center">
          <ChevronUp className="w-8 h-8 text-black" />
        </div>
      </div>
    </main>
  );
}
