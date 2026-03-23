import type {Metadata} from 'next';
import { Inter, Caveat } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const caveat = Caveat({ subsets: ['latin'], variable: '--font-caveat' });

export const metadata: Metadata = {
  title: 'Instagram Story Poster',
  description: 'A web implementation of a daily Instagram story design poster.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${caveat.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
