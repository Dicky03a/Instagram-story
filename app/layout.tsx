import type {Metadata} from 'next';
import { Poppins, Caveat } from 'next/font/google';
import './globals.css';

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'], 
  variable: '--font-poppins' 
});
const caveat = Caveat({ subsets: ['latin'], variable: '--font-caveat' });

export const metadata: Metadata = {
  title: 'Instagram Story Poster',
  description: 'A web implementation of a daily Instagram story design poster.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${caveat.variable} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
