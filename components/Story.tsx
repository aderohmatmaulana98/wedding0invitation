
import React from 'react';
import { AnimationWrapper } from './AnimationWrapper';
import { Heart, Coffee, Gem, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const milestones = [
    {
        year: "2018",
        title: "The First Meeting",
        description: "It started with a chance encounter at a downtown coffee shop. A borrowed chair, a shared smile, and a conversation that lasted until closing time.",
        icon: Coffee
    },
    {
        year: "2021",
        title: "Falling in Love",
        description: "Under a starlit sky during a trip to the mountains, we realized that what we had wasn't just friendship—it was a forever kind of love.",
        icon: Heart
    },
    {
        year: "2024",
        title: "The Proposal",
        description: "On a quiet beach at sunset, James got down on one knee. With tears of joy and hearts full of hope, Sarah said the easiest 'Yes' of her life.",
        icon: Gem
    },
    {
        year: "2025",
        title: "The New Chapter",
        description: "On December 12th, surrounded by family and friends, we will say 'I do' and begin our greatest adventure yet as husband and wife.",
        icon: Sparkles
    }
];

export const Story: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-neutral-950 relative overflow-hidden">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900/50 to-neutral-950"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold-600/5 rounded-full blur-[120px] pointer-events-none"></div>

        {/* Floating Background Elements */}
        <div className="absolute top-20 right-10 opacity-10 text-gold-500 animate-pulse">
            <Sparkles size={40} />
        </div>
        <div className="absolute bottom-40 left-10 opacity-10 text-gold-500 animate-pulse" style={{ animationDelay: '1s' }}>
            <Sparkles size={30} />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
            {/* Header */}
            <AnimationWrapper className="text-center mb-20">
                <span className="text-gold-500 font-sans text-xs uppercase tracking-[0.4em] mb-3 block">How it all began</span>
                <h2 className="text-4xl md:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-gold-200 via-gold-400 to-gold-200 drop-shadow-sm">
                    Our Love Story
                </h2>
                <div className="mt-6 flex justify-center">
                     <Heart className="w-5 h-5 text-gold-500/50" fill="currentColor" />
                </div>
            </AnimationWrapper>

            {/* Timeline Container */}
            <div className="relative">
                {/* Central Line (Desktop) / Left Line (Mobile) */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] md:-translate-x-1/2 bg-gradient-to-b from-transparent via-gold-500/50 to-transparent"></div>

                <div className="space-y-16 md:space-y-24">
                    {milestones.map((item, index) => {
                        const Icon = item.icon;
                        const isEven = index % 2 === 0;

                        return (
                            <div key={index} className={`relative flex flex-col md:flex-row items-center md:justify-between w-full group ${isEven ? 'md:flex-row-reverse' : ''}`}>
                                
                                {/* Timeline Marker (Center) */}
                                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border border-gold-500 bg-neutral-950 z-20 flex items-center justify-center shadow-[0_0_15px_rgba(221,164,48,0.3)]">
                                    <Icon size={18} className="text-gold-300" />
                                </div>

                                {/* Empty Space for Layout Balance */}
                                <div className="hidden md:block w-5/12"></div>

                                {/* Content Card */}
                                <div className={`w-full pl-24 md:pl-0 md:w-5/12 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                                    <AnimationWrapper delay={index * 0.2}>
                                        <div className="group-hover:-translate-y-1 transition-transform duration-500">
                                            <span className="font-serif text-gold-500 text-5xl opacity-20 absolute -top-8 select-none pointer-events-none">
                                                {item.year}
                                            </span>
                                            
                                            <div className={`relative z-10 ${isEven ? 'md:mr-auto' : 'md:ml-auto'}`}>
                                                <span className="inline-block px-3 py-1 border border-gold-500/30 rounded-full text-xs text-gold-400 font-sans tracking-widest mb-3 bg-neutral-900/50">
                                                    {item.year}
                                                </span>
                                                <h3 className="text-2xl font-serif text-gold-200 mb-3">{item.title}</h3>
                                                <p className="text-neutral-400 font-light leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </AnimationWrapper>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Ornament */}
                <div className="flex justify-center mt-20">
                     <div className="w-1 h-12 bg-gradient-to-b from-gold-500/50 to-transparent"></div>
                </div>
            </div>
        </div>
    </section>
  );
};
