'use client';

import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export default function RotatingHeart({ className = "", iconClassName = "" }: { className?: string, iconClassName?: string }) {
  return (
    <motion.div
      animate={{
        rotateY: [0, 360],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "linear"
      }}
      style={{ transformStyle: 'preserve-3d' }}
      className={`flex items-center justify-center ${className}`}
    >
      <Heart 
        className={`fill-current absolute ${iconClassName}`} 
        style={{ 
          transform: 'translateZ(-2px)',
          opacity: 0.8
        }} 
      />
      <Heart 
        className={`fill-current absolute ${iconClassName}`} 
        style={{ 
          transform: 'translateZ(-1px)',
          opacity: 0.9
        }} 
      />
      <Heart 
        className={`fill-current relative ${iconClassName}`} 
        style={{ 
          filter: 'drop-shadow(0px 4px 8px rgba(255, 50, 100, 0.4))',
          transform: 'translateZ(0px)'
        }} 
      />
    </motion.div>
  );
}
