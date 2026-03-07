'use client';

import { usePathname } from 'next/navigation';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || '';
  
  const isAuthOrLanding = pathname === '/' || pathname === '/login' || pathname === '/signup';

  return (
    <main className={`flex-1 flex flex-col w-full max-w-[100vw] overflow-x-hidden ${!isAuthOrLanding ? 'md:pl-64' : ''}`}>
      {children}
    </main>
  );
}
