'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart, MessageCircle, Sparkles } from 'lucide-react';

const newMatches = [
  { id: 1, name: 'Sarah', image: 'https://picsum.photos/seed/sarah/200/200', isNew: true },
  { id: 2, name: 'James', image: 'https://picsum.photos/seed/james/200/200', isNew: true },
  { id: 3, name: 'Elena', image: 'https://picsum.photos/seed/elena/200/200', isNew: true },
  { id: 4, name: 'Michael', image: 'https://picsum.photos/seed/michael/200/200', isNew: false },
  { id: 5, name: 'Jessica', image: 'https://picsum.photos/seed/jessica/200/200', isNew: false },
];

const conversations = [
  {
    id: 1,
    matchId: 1,
    name: 'Sarah',
    image: 'https://picsum.photos/seed/sarah/200/200',
    lastMessage: 'That sounds like a great idea! When are you free?',
    time: '2m ago',
    unread: 1,
    compatibility: 87,
  },
  {
    id: 2,
    matchId: 2,
    name: 'James',
    image: 'https://picsum.photos/seed/james/200/200',
    lastMessage: 'I just made the best pasta ever. You would love it.',
    time: '1h ago',
    unread: 0,
    compatibility: 92,
  },
  {
    id: 3,
    matchId: 3,
    name: 'Elena',
    image: 'https://picsum.photos/seed/elena/200/200',
    lastMessage: 'Did you see that new exhibit at the modern art museum?',
    time: 'Yesterday',
    unread: 0,
    compatibility: 78,
  }
];

export default function MatchesPage() {
  return (
    <div className="flex-1 flex flex-col max-w-2xl mx-auto w-full pb-24">
      <div className="p-6 pb-2">
        <h1 className="font-heading text-3xl font-bold text-slate-900">Matches</h1>
      </div>

      {/* New Matches Horizontal Scroll */}
      <div className="px-6 py-4">
        <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">New Matches</h2>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex flex-col items-center gap-2 min-w-[80px]">
            <div className="w-16 h-16 rounded-full bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400">
              <Heart className="w-6 h-6" />
            </div>
            <span className="text-xs font-medium text-slate-500">Likes</span>
          </div>
          
          {newMatches.map(match => (
            <Link key={match.id} href={`/chat/${match.id}`} className="flex flex-col items-center gap-2 min-w-[80px] relative">
              <div className="w-16 h-16 rounded-full overflow-hidden relative border-2 border-transparent hover:border-primary transition-colors">
                <Image src={match.image} alt={match.name} fill className="object-cover" referrerPolicy="no-referrer" />
                {match.isNew && (
                  <div className="absolute top-0 right-0 w-4 h-4 bg-primary rounded-full border-2 border-white" />
                )}
              </div>
              <span className="text-xs font-medium text-slate-700">{match.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Conversations List */}
      <div className="flex-1 px-6">
        <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Messages</h2>
        <div className="flex flex-col gap-4">
          {conversations.map(chat => (
            <Link key={chat.id} href={`/chat/${chat.id}`} className="glass-panel p-4 rounded-2xl flex items-center gap-4 hover:bg-white/80 transition-colors">
              <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                <Image src={chat.image} alt={chat.name} fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-heading font-semibold text-slate-900 truncate">{chat.name}</h3>
                  <span className="text-xs text-slate-400 flex-shrink-0 ml-2">{chat.time}</span>
                </div>
                <p className={`text-sm truncate ${chat.unread > 0 ? 'text-slate-900 font-medium' : 'text-slate-500'}`}>
                  {chat.lastMessage}
                </p>
              </div>
              
              <div className="flex flex-col items-end gap-2 flex-shrink-0">
                {chat.unread > 0 ? (
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center text-[10px] font-bold text-white">
                    {chat.unread}
                  </div>
                ) : (
                  <div className="w-5 h-5" /> // Spacer
                )}
                <div className="flex items-center gap-1 text-[10px] font-semibold text-secondary bg-secondary/10 px-2 py-0.5 rounded-full">
                  <Sparkles className="w-3 h-3" />
                  {chat.compatibility}%
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
