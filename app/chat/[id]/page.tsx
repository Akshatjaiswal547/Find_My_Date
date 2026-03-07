'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, MoreVertical, Phone, Video, Image as ImageIcon, Mic, Smile, Send, Sparkles } from 'lucide-react';

export default function ChatPage() {
  const [message, setMessage] = useState('');
  
  const messages = [
    { id: 1, sender: 'them', text: 'Hey! I saw you like hiking. What\'s your favorite trail around here?', time: '10:30 AM' },
    { id: 2, sender: 'me', text: 'Hi Sarah! Yeah, I love the Pine Peak trail. Have you been there?', time: '10:35 AM' },
    { id: 3, sender: 'them', text: 'Not yet! I\'ve been wanting to go. Is it a tough hike?', time: '10:36 AM' },
    { id: 4, sender: 'me', text: 'It\'s moderate. The view at the top is totally worth it though. We should go sometime!', time: '10:40 AM' },
    { id: 5, sender: 'them', text: 'That sounds like a great idea! When are you free?', time: '10:42 AM' },
  ];

  const aiSuggestions = [
    "I'm free this weekend! How about Saturday morning?",
    "Next Sunday works for me. Want to grab coffee first?",
    "I have some time on Friday afternoon if you're up for it."
  ];

  return (
    <div className="flex-1 flex flex-col h-[100dvh] max-w-2xl mx-auto w-full bg-white relative">
      {/* Header */}
      <header className="glass-panel sticky top-0 z-10 px-4 py-3 flex items-center justify-between border-b border-slate-100">
        <div className="flex items-center gap-3">
          <Link href="/matches" className="p-2 -ml-2 rounded-full hover:bg-slate-100 text-slate-600 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <Image src="https://picsum.photos/seed/sarah/200/200" alt="Sarah" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <div>
              <h2 className="font-heading font-semibold text-slate-900 leading-tight">Sarah, 26</h2>
              <span className="text-xs text-emerald-500 font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Online
              </span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-1">
          <button className="p-2 rounded-full hover:bg-slate-100 text-slate-600 transition-colors">
            <Phone className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full hover:bg-slate-100 text-slate-600 transition-colors">
            <Video className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full hover:bg-slate-100 text-slate-600 transition-colors">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
        <div className="text-center my-4">
          <span className="text-xs font-medium text-slate-400 bg-slate-100 px-3 py-1 rounded-full">Today</span>
        </div>
        
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[75%] rounded-2xl px-4 py-2.5 ${
              msg.sender === 'me' 
                ? 'bg-primary text-white rounded-br-sm' 
                : 'bg-white border border-slate-100 text-slate-800 rounded-bl-sm shadow-sm'
            }`}>
              <p className="text-[15px] leading-relaxed">{msg.text}</p>
              <span className={`text-[10px] mt-1 block ${msg.sender === 'me' ? 'text-white/70 text-right' : 'text-slate-400'}`}>
                {msg.time}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* AI Suggestions */}
      <div className="px-4 py-2 bg-gradient-to-t from-white via-white to-transparent">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-4 h-4 text-secondary" />
          <span className="text-xs font-semibold text-secondary uppercase tracking-wider">AI Suggestions</span>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {aiSuggestions.map((suggestion, idx) => (
            <button 
              key={idx}
              onClick={() => setMessage(suggestion)}
              className="whitespace-nowrap px-4 py-2 rounded-full border border-secondary/30 bg-secondary/5 text-secondary text-sm font-medium hover:bg-secondary/10 transition-colors"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-slate-100 pb-safe">
        <div className="flex items-end gap-2">
          <button className="p-2.5 rounded-full text-slate-400 hover:text-primary hover:bg-primary/5 transition-colors flex-shrink-0">
            <ImageIcon className="w-6 h-6" />
          </button>
          
          <div className="flex-1 bg-slate-100 rounded-3xl flex items-center px-4 py-1 min-h-[48px]">
            <input 
              type="text" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 bg-transparent border-none focus:outline-none text-slate-800 placeholder-slate-400 py-2"
            />
            <button className="p-1.5 text-slate-400 hover:text-slate-600 transition-colors">
              <Smile className="w-5 h-5" />
            </button>
          </div>
          
          {message.trim() ? (
            <button className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-hover transition-colors flex-shrink-0 shadow-md shadow-primary/20">
              <Send className="w-5 h-5 ml-1" />
            </button>
          ) : (
            <button className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors flex-shrink-0">
              <Mic className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
