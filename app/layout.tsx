import type {Metadata} from 'next';
import { Poppins, Caveat, Geist } from 'next/font/google';
import './globals.css';
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'], 
  variable: '--font-poppins' 
});
const caveat = Caveat({ subsets: ['latin'], variable: '--font-caveat' });

export const metadata: Metadata = {
  title: 'Portofolio - Dicky Adi Saputra',
  description: 'A web implementation of a daily story web developer.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={`${poppins.className} ${caveat.variable} antialiased`} suppressHydrationWarning>
        <TooltipProvider>
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}

