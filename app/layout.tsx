import type {Metadata} from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css'; // Global styles
import Navigation from '@/components/Navigation';
import MainLayout from '@/components/MainLayout';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Find My Date - Where Real Connections Begin',
  description: 'Find Your Perfect Match ❤️',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7856837734774136"
     crossorigin="anonymous"></script>
      </head>
      <body className="font-sans antialiased bg-background text-slate-900 min-h-[100dvh] flex flex-col" suppressHydrationWarning>
        <Navigation />
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
