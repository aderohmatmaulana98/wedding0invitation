import React, { useState, useEffect } from 'react';
import { AnimationWrapper } from './AnimationWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const photos = [
    "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?q=80&w=1974&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
];

export const Gallery: React.FC = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const openLightbox = (index: number) => setSelectedIndex(index);
    const closeLightbox = () => setSelectedIndex(null);

    const showNext = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex + 1) % photos.length);
        }
    };

    const showPrev = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex - 1 + photos.length) % photos.length);
        }
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') showNext();
            if (e.key === 'ArrowLeft') showPrev();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex]);

    return (
        <section className="py-24 bg-neutral-900 relative">
             <AnimationWrapper className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-gold-200 to-gold-500 mb-4">Our Moments</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto"></div>
                <p className="text-neutral-500 mt-4 text-sm uppercase tracking-widest">Click an image to expand</p>
            </AnimationWrapper>

            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {photos.map((photo, index) => (
                        <AnimationWrapper key={index} delay={index * 0.1} className="relative group overflow-hidden rounded-lg aspect-[3/4] cursor-pointer shadow-lg shadow-black/50">
                            {/* Clickable Area */}
                            <div className="w-full h-full" onClick={() => openLightbox(index)}>
                                {/* Overlay: Darkens normally, reveals on hover */}
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-colors duration-700 z-10"></div>
                                
                                {/* Image: Subtle Zoom & Rotate */}
                                <img 
                                    src={photo} 
                                    alt={`Gallery ${index + 1}`} 
                                    className="w-full h-full object-cover transform group-hover:scale-105 group-hover:rotate-1 transition-transform duration-1000 ease-out will-change-transform"
                                />
                                
                                {/* Decorative Border: Fades in and scales slightly */}
                                <div className="absolute inset-4 border border-gold-500/0 group-hover:border-gold-500/60 transition-all duration-700 z-20 scale-95 group-hover:scale-100"></div>
                            </div>
                        </AnimationWrapper>
                    ))}
                </div>
            </div>

            {/* Lightbox Overlay */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
                        onClick={closeLightbox}
                    >
                        {/* Controls */}
                        <button 
                            className="absolute top-6 right-6 text-neutral-400 hover:text-gold-400 hover:scale-110 transition-all z-[70]"
                            onClick={closeLightbox}
                            aria-label="Close"
                        >
                            <X size={32} />
                        </button>
                        
                        <button 
                            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-gold-400 hover:scale-110 transition-all z-[70] p-2 bg-black/20 rounded-full md:bg-transparent"
                            onClick={showPrev}
                            aria-label="Previous image"
                        >
                            <ChevronLeft size={40} />
                        </button>

                        <button 
                            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-gold-400 hover:scale-110 transition-all z-[70] p-2 bg-black/20 rounded-full md:bg-transparent"
                            onClick={showNext}
                            aria-label="Next image"
                        >
                            <ChevronRight size={40} />
                        </button>

                        {/* Image Container */}
                        <motion.div
                            key={selectedIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="relative max-w-full max-h-full flex flex-col items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img 
                                src={photos[selectedIndex]} 
                                className="max-h-[85vh] w-auto max-w-full object-contain rounded-sm shadow-2xl shadow-black/80 border border-neutral-800"
                                alt="Gallery View"
                            />
                            <p className="mt-4 text-gold-500/50 font-serif tracking-[0.2em] text-xs uppercase">
                                {selectedIndex + 1} &mdash; {photos.length}
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};
