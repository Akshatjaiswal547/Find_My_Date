'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Home, Search, Heart, MessageCircle, User } from 'lucide-react';

export default function Navigation() {
  const pathname = usePathname() || '';

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Discover', href: '/discover', icon: Search },
    { name: 'Matches', href: '/matches', icon: Heart },
    { name: 'Messages', href: '/chat', icon: MessageCircle },
    { name: 'Profile', href: '/profile', icon: User },
  ];

  // Don't show navigation on landing page or auth pages
  if (pathname === '/' || pathname === '/login' || pathname === '/signup') {
    return null;
  }

  const isChatDetail = pathname.startsWith('/chat/') && pathname !== '/chat';

  return (
    <>
      {/* Mobile Bottom Navigation */}
      {!isChatDetail && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pb-6 pt-2 pointer-events-none">
          <div className="max-w-md mx-auto pointer-events-auto">
            <nav className="glass-panel rounded-full px-6 py-3 flex justify-between items-center relative">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (pathname.startsWith(`${item.href}/`) && item.href !== '/');
                const Icon = item.icon;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative flex flex-col items-center justify-center w-12 h-12"
                  >
                    {isActive && (
                      <div
                        className="absolute inset-0 bg-primary/10 rounded-full"
                      />
                    )}
                    <Icon
                      className={`w-6 h-6 z-10 transition-colors duration-200 ${
                        isActive ? 'text-primary' : 'text-slate-400 hover:text-slate-600'
                      }`}
                      strokeWidth={isActive ? 2.5 : 2}
                    />
                    {isActive && (
                      <div 
                        className="absolute bottom-1 w-1 h-1 bg-primary rounded-full"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}

      {/* Desktop Side Navigation */}
      <div className="hidden md:flex fixed left-0 top-0 bottom-0 w-64 bg-white border-r border-slate-100 flex-col z-40">
        <div className="p-6 flex items-center gap-2 mb-8">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center text-white shadow-lg shadow-primary/30">
            <Heart className="w-6 h-6 fill-current" />
          </div>
          <span className="font-heading font-bold text-xl tracking-tight text-slate-900">
            Find My Date
          </span>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (pathname.startsWith(`${item.href}/`) && item.href !== '/');
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative flex items-center gap-4 px-4 py-3 rounded-2xl transition-colors ${
                  isActive ? 'text-primary bg-primary/5 font-semibold' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900 font-medium'
                }`}
              >
                <Icon
                  className={`w-6 h-6 ${isActive ? 'text-primary' : 'text-slate-400'}`}
                  strokeWidth={isActive ? 2.5 : 2}
                />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-6 border-t border-slate-100">
          <Link href="/profile" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden relative">
              <Image src="https://picsum.photos/seed/you/100/100" alt="Profile" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Alex</p>
              <p className="text-xs text-slate-500">View Profile</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
