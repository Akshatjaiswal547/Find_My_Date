'use client';

import Link from 'next/link';
import { Heart } from 'lucide-react';

export default function ChatIndexPage() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 text-center max-w-2xl mx-auto w-full">
      <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-6">
        <Heart className="w-10 h-10 text-primary" />
      </div>
      <h2 className="font-heading text-2xl font-bold mb-2">Your Messages</h2>
      <p className="text-slate-500 mb-8 max-w-sm">
        Select a conversation from the Matches page to start chatting.
      </p>
      <Link 
        href="/matches"
        className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary-hover transition-colors"
      >
        Go to Matches
      </Link>
    </div>
  );
}
