'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Heart, Sparkles, ShieldCheck, MessageCircleHeart } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';
import RotatingHeart from '@/components/RotatingHeart';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background decoration */}
      <AnimatedBackground />
      
      {/* Header */}
      <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 flex justify-between items-center z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center text-white shadow-lg shadow-primary/30 perspective-1000">
            <RotatingHeart iconClassName="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <span className="font-heading font-bold text-xl sm:text-2xl tracking-tight text-slate-900">
            Find My Date
          </span>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <Link href="/login" className="font-medium text-slate-600 hover:text-slate-900 transition-colors hidden sm:block">
            Log in
          </Link>
          <Link href="/discover" className="bg-slate-900 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-medium hover:bg-slate-800 transition-colors shadow-md text-sm sm:text-base">
            Sign up
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 text-center z-10 pt-8 pb-16 sm:pt-12 sm:pb-24">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass mb-6 sm:mb-8 text-xs sm:text-sm font-medium text-primary">
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>AI-Powered Matchmaking</span>
        </div>
        
        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-4xl leading-[1.1] mb-4 sm:mb-6 flex flex-wrap justify-center items-center gap-2 sm:gap-4">
          <span>Find Your</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Perfect Match</span>
          <div className="perspective-1000 inline-block text-primary">
            <RotatingHeart iconClassName="w-10 h-10 sm:w-16 sm:h-16" />
          </div>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mb-8 sm:mb-10 px-2">
          Where real connections begin. Discover people who share your interests, 
          vibe with your personality, and are looking for the same things you are.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
          <Link href="/discover" className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-primary-hover transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2 perspective-1000">
            Start Discovering
            <RotatingHeart iconClassName="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
          <Link href="/login" className="glass px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white/80 transition-all flex items-center justify-center">
            How it works
          </Link>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-16 sm:mt-24 max-w-5xl w-full text-left">
          <div className="glass-panel p-8 rounded-3xl">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl mb-3">Smart Matching</h3>
            <p className="text-slate-600">Our AI analyzes your interests and personality to suggest highly compatible matches.</p>
          </div>
          
          <div className="glass-panel p-8 rounded-3xl">
            <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl mb-3">Verified Profiles</h3>
            <p className="text-slate-600">Every profile is verified to ensure you&apos;re talking to real people. No catfishes here.</p>
          </div>
          
          <div className="glass-panel p-8 rounded-3xl">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-6">
              <MessageCircleHeart className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl mb-3">Better Conversations</h3>
            <p className="text-slate-600">Stuck on what to say? Our AI dating assistant suggests personalized icebreakers.</p>
          </div>
        </div>

        {/* About the Creator Section */}
        <section className="w-full max-w-5xl mx-auto mt-24 sm:mt-32 mb-8 px-4 sm:px-6 text-left z-10">
          <div className="glass-panel p-8 sm:p-12 rounded-[2.5rem] relative overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="w-32 h-32 sm:w-48 sm:h-48 shrink-0 rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10 bg-slate-100">
              <Image 
                src="https://picsum.photos/seed/akshat/400/400" 
                alt="Akshat - Site Owner" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="relative z-10 flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 mb-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">
                About the Creator
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Hi, I&apos;m Akshat
              </h2>
              <p className="text-slate-600 text-base sm:text-lg mb-6 leading-relaxed">
                I built Find My Date to revolutionize how people connect online. Frustrated by superficial swiping apps, I wanted to create a platform that uses AI to foster genuine, meaningful relationships based on true compatibility and shared values.
              </p>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <a href="https://github.com/Akshatjaiswal547" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 transition-colors">
                  <span className="sr-only">GitHub</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="mailto:akshat6370902@gmail.com" className="text-slate-500 hover:text-primary transition-colors">
                  <span className="sr-only">Email</span>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
