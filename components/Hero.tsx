import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
            <img 
                src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop" 
                alt="Wedding Background" 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-neutral-950"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.5 }}
            >
                <p className="font-serif text-gold-200 tracking-[0.3em] uppercase mb-4 text-sm md:text-base">
                    The Wedding Celebration Of
                </p>
                <h1 className="font-display text-5xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-b from-gold-100 to-gold-500 mb-6 drop-shadow-lg">
                    Sarah & James
                </h1>
                
                <div className="flex items-center justify-center gap-4 text-neutral-300 font-serif text-lg md:text-2xl mt-8">
                    <span className="border-t border-gold-500/50 w-12 md:w-20"></span>
                    <span>December 12, 2025</span>
                    <span className="border-t border-gold-500/50 w-12 md:w-20"></span>
                </div>
            </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold-300/70"
        >
            <div className="flex flex-col items-center gap-2">
                <span className="text-[10px] uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-gold-300/0 via-gold-300 to-gold-300/0"></div>
            </div>
        </motion.div>
    </section>
  );
};