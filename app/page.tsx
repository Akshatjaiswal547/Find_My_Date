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
      </main>
    </div>
  );
}
