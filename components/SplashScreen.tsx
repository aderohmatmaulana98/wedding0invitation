import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MailOpen } from 'lucide-react';

interface SplashScreenProps {
  onOpen: () => void;
  isVisible: boolean;
}

// Particle component for floating effect
const FloatingParticle: React.FC<{ delay: number; x: string; y: string }> = ({ delay, x, y }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0, 0.4, 0], 
      y: [0, -60], 
      scale: [0, 1.5, 0]
    }}
    transition={{ 
      duration: Math.random() * 3 + 4, 
      repeat: Infinity, 
      delay: delay,
      ease: "easeInOut" 
    }}
    style={{ left: x, top: y }}
    className="absolute w-1 h-1 bg-gold-200 rounded-full pointer-events-none blur-[1px]"
  />
);

export const SplashScreen: React.FC<SplashScreenProps> = ({ onOpen, isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-neutral-950 text-center px-4 overflow-hidden"
        >
          {/* Animated Background Texture (Slow Pan) */}
          <motion.div 
            animate={{ 
                backgroundPosition: ["0px 0px", "100px 100px"]
            }}
            transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
            }}
            className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"
          ></motion.div>

          {/* --- NEW: Animated Background Ambient Glows --- */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
             {/* Top Left Glow - Breathing & drifting */}
             <motion.div 
                animate={{ 
                    scale: [1, 1.15, 1],
                    x: [0, 30, 0],
                    y: [0, 20, 0],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-gold-600/10 rounded-full blur-[120px]"
             ></motion.div>

             {/* Bottom Right Glow - Breathing & drifting (Async) */}
             <motion.div 
                animate={{ 
                    scale: [1, 1.2, 1],
                    x: [0, -30, 0],
                    y: [0, -40, 0],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-[20%] -right-[10%] w-[70vw] h-[70vw] bg-gold-400/10 rounded-full blur-[120px]"
             ></motion.div>
          </div>

          {/* --- Screen Corner Ornaments (Large & Faint) --- */}
           {/* Top Left Ornament */}
           <motion.svg
              initial={{ opacity: 0, rotate: -5, scale: 0.9 }} 
              animate={{ opacity: 0.1, rotate: 0, scale: 1 }} 
              transition={{ duration: 2.5, ease: "easeOut" }}
              className="absolute top-0 left-0 w-[60vmin] h-[60vmin] text-gold-200 pointer-events-none -translate-x-1/6 -translate-y-1/6"
              viewBox="0 0 400 400"
              fill="none"
           >
                 {/* Main Vine */}
                 <path d="M0,0 C100,10 200,50 250,150 C280,210 260,300 200,350" stroke="currentColor" strokeWidth="2" opacity="0.6" />
                 <path d="M0,0 C10,100 50,200 150,250 C210,280 300,260 350,200" stroke="currentColor" strokeWidth="2" opacity="0.6" />
                 
                 {/* Leaves/Details */}
                 <path d="M120,70 Q150,50 180,80 Q150,110 120,70 Z" fill="currentColor" opacity="0.4" />
                 <path d="M70,120 Q50,150 80,180 Q110,150 70,120 Z" fill="currentColor" opacity="0.4" />
                 <circle cx="250" cy="150" r="5" fill="currentColor" opacity="0.6" />
                 <circle cx="150" cy="250" r="5" fill="currentColor" opacity="0.6" />
           </motion.svg>
           
           {/* Bottom Right Ornament (Rotated) */}
           <motion.svg
              initial={{ opacity: 0, rotate: 185, scale: 0.9 }} 
              animate={{ opacity: 0.1, rotate: 180, scale: 1 }} 
              transition={{ duration: 2.5, ease: "easeOut" }}
              className="absolute bottom-0 right-0 w-[60vmin] h-[60vmin] text-gold-200 pointer-events-none translate-x-1/6 translate-y-1/6"
              viewBox="0 0 400 400"
              fill="none"
           >
                 {/* Main Vine */}
                 <path d="M0,0 C100,10 200,50 250,150 C280,210 260,300 200,350" stroke="currentColor" strokeWidth="2" opacity="0.6" />
                 <path d="M0,0 C10,100 50,200 150,250 C210,280 300,260 350,200" stroke="currentColor" strokeWidth="2" opacity="0.6" />
                 
                 {/* Leaves/Details */}
                 <path d="M120,70 Q150,50 180,80 Q150,110 120,70 Z" fill="currentColor" opacity="0.4" />
                 <path d="M70,120 Q50,150 80,180 Q110,150 70,120 Z" fill="currentColor" opacity="0.4" />
                 <circle cx="250" cy="150" r="5" fill="currentColor" opacity="0.6" />
                 <circle cx="150" cy="250" r="5" fill="currentColor" opacity="0.6" />
           </motion.svg>

          {/* --- Floating Particles --- */}
          {[...Array(15)].map((_, i) => (
              <FloatingParticle 
                key={i} 
                delay={i * 0.8} 
                x={`${Math.random() * 100}%`} 
                y={`${Math.random() * 100}%`} 
              />
          ))}

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10 max-w-lg w-full border border-gold-400/30 p-10 md:p-16 rounded-t-[100px] rounded-b-[20px] bg-neutral-900/80 backdrop-blur-md shadow-2xl shadow-gold-900/10 overflow-hidden"
          >
            {/* --- Floral Decoration: Top Left (Card) --- */}
            <motion.svg 
                initial={{ opacity: 0, x: -20, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="absolute top-0 left-0 w-32 h-32 text-gold-300/60 pointer-events-none" 
                viewBox="0 0 200 200" 
                fill="currentColor"
            >
                <path d="M0,0 Q100,10 120,60 T180,100 M0,0 Q10,100 60,120 T100,180" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M120,60 Q130,40 150,50 T160,80 Z" fill="currentColor" />
                <path d="M60,120 Q40,130 50,150 T80,160 Z" fill="currentColor" />
                <path d="M90,30 Q110,30 110,50 Q110,70 90,70 Q70,70 70,50 Q70,30 90,30 Z" fill="currentColor" opacity="0.6" transform="scale(0.5)" />
                <circle cx="20" cy="20" r="3" fill="currentColor" />
                <circle cx="35" cy="10" r="2" fill="currentColor" />
                <circle cx="10" cy="35" r="2" fill="currentColor" />
            </motion.svg>

            {/* --- Floral Decoration: Bottom Right (Card - Rotated) --- */}
            <motion.svg 
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="absolute bottom-0 right-0 w-32 h-32 text-gold-300/60 pointer-events-none rotate-180" 
                viewBox="0 0 200 200" 
                fill="currentColor"
            >
                <path d="M0,0 Q100,10 120,60 T180,100 M0,0 Q10,100 60,120 T100,180" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M120,60 Q130,40 150,50 T160,80 Z" fill="currentColor" />
                <path d="M60,120 Q40,130 50,150 T80,160 Z" fill="currentColor" />
                <circle cx="20" cy="20" r="3" fill="currentColor" />
                <circle cx="35" cy="10" r="2" fill="currentColor" />
                <circle cx="10" cy="35" r="2" fill="currentColor" />
            </motion.svg>

            {/* Content */}
            <div className="relative z-10">
                <h3 className="text-gold-300 tracking-[0.2em] text-sm uppercase mb-4 font-sans">The Wedding Of</h3>
                <h1 className="font-serif text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-gold-200 via-gold-400 to-gold-200 mb-6 drop-shadow-sm py-2">
                Sarah <span className="text-3xl align-middle text-gold-300">&</span> James
                </h1>
                <p className="font-sans text-neutral-400 mb-10 italic max-w-xs mx-auto">
                We invite you to celebrate our special day
                </p>

                <button
                onClick={onOpen}
                className="group flex items-center justify-center gap-3 mx-auto px-8 py-3 bg-gradient-to-r from-gold-600 to-gold-400 text-neutral-950 font-bold font-serif tracking-wide rounded-full hover:scale-105 transition-transform duration-300 shadow-lg shadow-gold-500/20"
                >
                <MailOpen size={20} className="group-hover:-translate-y-1 transition-transform" />
                Open Invitation
                </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};