'use client';

import Image from 'next/image';
import { Settings, Edit3, Camera, MapPin, Briefcase, GraduationCap, Ruler, Wine, Dumbbell, Sparkles, CheckCircle2, Mail, Linkedin } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="flex-1 flex flex-col max-w-2xl mx-auto w-full pb-24 bg-slate-50">
      {/* Header / Cover */}
      <div className="relative h-64 bg-slate-200">
        <Image 
          src="https://picsum.photos/seed/you/800/600" 
          alt="Cover" 
          fill 
          className="object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        <div className="absolute top-4 right-4 flex gap-2">
          <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-colors">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Profile Info */}
      <div className="px-6 relative -mt-16">
        <div className="flex justify-between items-end mb-4">
          <div className="relative w-32 h-32 rounded-full border-4 border-slate-50 overflow-hidden bg-white shadow-lg">
            <Image 
              src="https://picsum.photos/seed/you/400/400" 
              alt="Profile" 
              fill 
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-primary rounded-tl-xl flex items-center justify-center text-white">
              <Camera className="w-4 h-4" />
            </button>
          </div>
          
          <button className="glass-panel px-4 py-2 rounded-full text-sm font-semibold text-slate-700 flex items-center gap-2 mb-2">
            <Edit3 className="w-4 h-4" /> Edit Profile
          </button>
        </div>

        <div className="mb-6">
          <h1 className="font-heading text-3xl font-bold text-slate-900 flex items-center gap-2">
            Alex, 27
            <CheckCircle2 className="w-6 h-6 text-blue-500" />
          </h1>
          <p className="text-slate-500 font-medium">Software Developer</p>
        </div>

        {/* Stats / Quick Info */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Profile Score</p>
              <p className="font-bold text-slate-900">Great (85%)</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Location</p>
              <p className="font-bold text-slate-900">San Francisco</p>
            </div>
          </div>
        </div>

        {/* About Me */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 mb-6">
          <h2 className="font-heading font-bold text-lg mb-3">About Me</h2>
          <p className="text-slate-600 leading-relaxed">
            I&apos;m a tech nerd who loves the outdoors. When I&apos;m not coding, you can find me hiking, trying out new coffee shops, or reading sci-fi. Looking for someone who enjoys deep conversations and spontaneous weekend trips.
          </p>
        </div>

        {/* Basic Info */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 mb-6">
          <h2 className="font-heading font-bold text-lg mb-4">Basics</h2>
          <div className="grid grid-cols-2 gap-y-4">
            <div className="flex items-center gap-3 text-slate-600">
              <Briefcase className="w-5 h-5 text-slate-400" />
              <span className="text-sm font-medium">Tech Startup</span>
            </div>
            <div className="flex items-center gap-3 text-slate-600">
              <GraduationCap className="w-5 h-5 text-slate-400" />
              <span className="text-sm font-medium">Stanford Univ.</span>
            </div>
            <div className="flex items-center gap-3 text-slate-600">
              <Ruler className="w-5 h-5 text-slate-400" />
              <span className="text-sm font-medium">5&apos;11&quot; (180cm)</span>
            </div>
            <div className="flex items-center gap-3 text-slate-600">
              <Dumbbell className="w-5 h-5 text-slate-400" />
              <span className="text-sm font-medium">Active</span>
            </div>
            <div className="flex items-center gap-3 text-slate-600">
              <Wine className="w-5 h-5 text-slate-400" />
              <span className="text-sm font-medium">Socially</span>
            </div>
          </div>
        </div>

        {/* Contact & Socials */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 mb-6">
          <h2 className="font-heading font-bold text-lg mb-4">Contact & Socials</h2>
          <div className="grid grid-cols-1 gap-y-4">
            <a href="mailto:alex@example.com" className="flex items-center gap-3 text-slate-600 hover:text-primary transition-colors cursor-pointer p-2 -ml-2 rounded-lg hover:bg-slate-50">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Email</p>
                <span className="text-sm font-semibold text-slate-700">alex@example.com</span>
              </div>
            </a>
            <a href="https://linkedin.com/in/alex-example" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors cursor-pointer p-2 -ml-2 rounded-lg hover:bg-slate-50">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">LinkedIn</p>
                <span className="text-sm font-semibold text-slate-700">linkedin.com/in/alex-example</span>
              </div>
            </a>
          </div>
        </div>

        {/* Interests */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 mb-6">
          <h2 className="font-heading font-bold text-lg mb-4">Interests</h2>
          <div className="flex flex-wrap gap-2">
            {['Coffee', 'Hiking', 'Photography', 'Technology', 'Dogs', 'Sci-Fi Movies'].map(interest => (
              <span key={interest} className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium border border-slate-200">
                {interest}
              </span>
            ))}
            <button className="px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-semibold border border-primary/20 hover:bg-primary/10 transition-colors">
              + Add More
            </button>
          </div>
        </div>
        
        {/* Photos Grid */}
        <div className="mb-6">
          <h2 className="font-heading font-bold text-lg mb-4 px-2">Photos</h2>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="relative aspect-[3/4] rounded-xl overflow-hidden bg-slate-200">
                <Image 
                  src={`https://picsum.photos/seed/you${i}/300/400`} 
                  alt={`Photo ${i}`} 
                  fill 
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-slate-100 border-2 border-dashed border-slate-300 flex flex-col items-center justify-center text-slate-400 hover:bg-slate-200 hover:text-slate-500 transition-colors cursor-pointer">
              <Camera className="w-8 h-8 mb-2" />
              <span className="text-xs font-medium">Add Photo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
