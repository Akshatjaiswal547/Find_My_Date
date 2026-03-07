'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'motion/react';
import { X, Heart, Star, MapPin, Info, Sparkles } from 'lucide-react';

const mockProfiles = [
  {
    id: 1,
    name: 'Sarah',
    age: 26,
    bio: 'Coffee addict, dog lover, and weekend hiker. Looking for someone to explore the city with.',
    distance: '3 miles away',
    compatibility: 87,
    interests: ['Hiking', 'Coffee', 'Dogs', 'Photography'],
    image: 'https://picsum.photos/seed/sarah/600/800',
  },
  {
    id: 2,
    name: 'James',
    age: 28,
    bio: 'Software engineer by day, amateur chef by night. Let me cook for you.',
    distance: '5 miles away',
    compatibility: 92,
    interests: ['Cooking', 'Tech', 'Travel', 'Wine'],
    image: 'https://picsum.photos/seed/james/600/800',
  },
  {
    id: 3,
    name: 'Elena',
    age: 24,
    bio: 'Art student and museum enthusiast. Always looking for the next creative adventure.',
    distance: '1 mile away',
    compatibility: 78,
    interests: ['Art', 'Museums', 'Reading', 'Indie Music'],
    image: 'https://picsum.photos/seed/elena/600/800',
  },
  {
    id: 4,
    name: 'Michael',
    age: 29,
    bio: 'Fitness junkie and early bird. Let\'s go for a run and grab smoothies.',
    distance: '8 miles away',
    compatibility: 85,
    interests: ['Fitness', 'Running', 'Healthy Eating', 'Podcasts'],
    image: 'https://picsum.photos/seed/michael/600/800',
  }
];

export default function DiscoverPage() {
  const [profiles, setProfiles] = useState(mockProfiles);
  const [showMatch, setShowMatch] = useState(false);
  
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-15, 15]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);
  
  const handleDragEnd = (event: any, info: any) => {
    const threshold = 100;
    if (info.offset.x > threshold) {
      handleSwipe('right');
    } else if (info.offset.x < -threshold) {
      handleSwipe('left');
    }
  };

  const handleSwipe = (direction: 'left' | 'right' | 'super') => {
    if (profiles.length === 0) return;
    
    // Simulate a match occasionally on right swipe or super like
    if ((direction === 'right' || direction === 'super') && Math.random() > 0.5) {
      setShowMatch(true);
      setTimeout(() => {
        setShowMatch(false);
        setProfiles(prev => prev.slice(1));
      }, 3000);
    } else {
      setProfiles(prev => prev.slice(1));
    }
  };

  if (profiles.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-6">
          <Heart className="w-10 h-10 text-primary animate-pulse" />
        </div>
        <h2 className="font-heading text-2xl font-bold mb-2">You&apos;re all caught up!</h2>
        <p className="text-slate-500 mb-8">We&apos;re looking for more perfect matches for you.</p>
        <button 
          onClick={() => setProfiles(mockProfiles)}
          className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary-hover transition-colors"
        >
          Refresh Profiles
        </button>
      </div>
    );
  }

  const activeProfile = profiles[0];

  return (
    <div className="flex-1 flex flex-col items-center p-4 pb-24 md:pb-8 relative overflow-hidden bg-slate-50 h-full">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary/5 to-transparent -z-10" />
      
      <div className="w-full max-w-md relative flex-1 min-h-0 mt-2 sm:mt-6">
        <AnimatePresence>
          {profiles.map((profile, index) => {
            if (index > 1) return null; // Only render top 2 cards for performance
            
            const isTop = index === 0;
            
            return (
              <motion.div
                key={profile.id}
                className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden shadow-xl bg-white"
                style={{
                  x: isTop ? x : 0,
                  rotate: isTop ? rotate : 0,
                  opacity: isTop ? opacity : 1,
                  scale: isTop ? 1 : 0.95,
                  zIndex: isTop ? 10 : 0,
                }}
                drag={isTop ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={isTop ? handleDragEnd : undefined}
                initial={false}
                animate={{ scale: isTop ? 1 : 0.95 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={profile.image}
                    alt={profile.name}
                    fill
                    className="object-cover"
                    priority={isTop}
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Compatibility Badge */}
                  <div className="absolute top-4 right-4 glass px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="font-bold text-sm text-slate-900">{profile.compatibility}% Match</span>
                  </div>
                  
                  {/* Profile Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-end justify-between mb-2">
                      <div>
                        <h2 className="font-heading text-3xl font-bold flex items-center gap-2">
                          {profile.name}, {profile.age}
                        </h2>
                        <div className="flex items-center gap-1 text-white/80 text-sm mt-1">
                          <MapPin className="w-4 h-4" />
                          <span>{profile.distance}</span>
                        </div>
                      </div>
                      <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-colors">
                        <Info className="w-5 h-5" />
                      </button>
                    </div>
                    
                    <p className="text-white/90 text-sm line-clamp-2 mb-4">
                      {profile.bio}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {profile.interests.map(interest => (
                        <span key={interest} className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-medium">
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      
      {/* Action Buttons */}
      <div className="flex items-center justify-center gap-4 sm:gap-6 mt-6 mb-2 z-20 shrink-0">
        <button 
          onClick={() => handleSwipe('left')}
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-400 hover:text-red-500 hover:scale-110 hover:shadow-xl transition-all"
        >
          <X className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={2.5} />
        </button>
        
        <button 
          onClick={() => handleSwipe('super')}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-secondary hover:scale-110 hover:shadow-xl transition-all"
        >
          <Star className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
        </button>
        
        <button 
          onClick={() => handleSwipe('right')}
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary to-primary-hover shadow-lg shadow-primary/30 flex items-center justify-center text-white hover:scale-110 hover:shadow-xl transition-all"
        >
          <Heart className="w-6 h-6 sm:w-8 sm:h-8 fill-current" />
        </button>
      </div>

      {/* Match Modal */}
      <AnimatePresence>
        {showMatch && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="text-center"
            >
              <h2 className="font-heading text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4 drop-shadow-lg">
                It&apos;s a Match!
              </h2>
              <p className="text-white text-lg mb-8">You and {activeProfile.name} liked each other.</p>
              
              <div className="flex justify-center gap-4 mb-8">
                <div className="w-24 h-24 rounded-full border-4 border-primary overflow-hidden relative">
                  <Image src="https://picsum.photos/seed/you/200/200" alt="You" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="w-24 h-24 rounded-full border-4 border-secondary overflow-hidden relative">
                  <Image src={activeProfile.image} alt={activeProfile.name} fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
              
              <button className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-slate-100 transition-colors">
                Send a Message
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
