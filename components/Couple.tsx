import React from 'react';
import { AnimationWrapper } from './AnimationWrapper';
import { Instagram, Heart } from 'lucide-react';
import { ProfileProps } from '../types';

const ProfileCard: React.FC<ProfileProps & { align: 'left' | 'right' }> = ({ name, role, description, image, align }) => {
    return (
        <div className={`flex flex-col md:flex-row ${align === 'right' ? 'md:flex-row-reverse' : ''} items-center gap-8 md:gap-16 mb-12`}>
            {/* Image Frame */}
            <div className="relative group shrink-0">
                <div className="absolute inset-0 bg-gold-400 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border border-gold-500/30 p-3">
                    <div className="w-full h-full rounded-full border border-gold-500/20 p-1">
                        <img 
                            src={image} 
                            alt={name} 
                            className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className={`text-center ${align === 'left' ? 'md:text-left' : 'md:text-right'} max-w-md relative`}>
                <h3 className="text-gold-200 font-serif text-4xl md:text-5xl mb-2">{name}</h3>
                <div className={`flex items-center gap-3 mb-6 ${align === 'left' ? 'justify-center md:justify-start' : 'justify-center md:justify-end'}`}>
                    <div className={`h-[1px] w-8 bg-gold-500/50`}></div>
                    <p className="text-gold-400 font-sans uppercase tracking-[0.2em] text-sm">{role}</p>
                    <div className={`h-[1px] w-8 bg-gold-500/50`}></div>
                </div>
                
                <p className="text-neutral-300 font-sans leading-relaxed mb-8 text-lg font-light">
                    {description}
                </p>
                <div className={`flex gap-4 justify-center ${align === 'left' ? 'md:justify-start' : 'md:justify-end'}`}>
                    <button className="flex items-center gap-2 text-gold-500/70 hover:text-gold-300 transition-colors text-sm uppercase tracking-wider group">
                        <Instagram size={20} className="group-hover:scale-110 transition-transform" />
                        <span>@{name.split(' ')[0].toLowerCase()}</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export const Couple: React.FC = () => {
  return (
    <section className="py-32 px-4 bg-neutral-950 relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>

        {/* Large Geometric Background Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] border border-gold-500/5 rounded-full pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[750px] md:h-[750px] border border-gold-500/5 rounded-full pointer-events-none rotate-45"></div>

        {/* Decorative Blobs */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gold-600/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-6xl mx-auto relative z-10">
            <AnimationWrapper className="text-center mb-24">
                <h2 className="text-3xl md:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-gold-200 to-gold-500 mb-6">The Happy Couple</h2>
                <div className="flex items-center justify-center gap-2 opacity-60">
                     <div className="w-2 h-2 rounded-full bg-gold-500"></div>
                     <div className="w-16 h-[1px] bg-gold-500"></div>
                     <div className="w-2 h-2 rounded-full bg-gold-500"></div>
                </div>
            </AnimationWrapper>

            <AnimationWrapper delay={0.2}>
                <ProfileCard 
                    name="Sarah Anderson"
                    role="The Bride"
                    description="A lover of arts and nature. Sarah brings warmth and creativity to everything she touches. She found her perfect match in James's steady and loving heart."
                    image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop"
                    socials={[]}
                    align="left"
                />
            </AnimationWrapper>

            {/* Elegant Divider */}
            <AnimationWrapper delay={0.3} className="py-8 md:py-12 flex justify-center items-center">
                 <div className="flex items-center gap-6 opacity-80 w-full max-w-xs mx-auto">
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-gold-500/50"></div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gold-500 blur opacity-20"></div>
                        <div className="w-12 h-12 md:w-16 md:h-16 border border-gold-500/30 rounded-full flex items-center justify-center text-gold-300 font-serif text-2xl md:text-3xl italic bg-neutral-900/50 backdrop-blur-sm">
                            &
                        </div>
                    </div>
                    <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-gold-500/50"></div>
                </div>
            </AnimationWrapper>

            <AnimationWrapper delay={0.4}>
                <ProfileCard 
                    name="James Mitchell"
                    role="The Groom"
                    description="An architect with a passion for jazz. James builds dreams into reality. He found his muse and partner in Sarah, promising a lifetime of adventure together."
                    image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
                    socials={[]}
                    align="right"
                />
            </AnimationWrapper>

            {/* Romantic Quote Section */}
            <AnimationWrapper delay={0.6} className="mt-20 md:mt-32 text-center max-w-2xl mx-auto px-6 relative">
                <Heart className="w-8 h-8 text-gold-500/80 mx-auto mb-6 animate-pulse" fill="currentColor" fillOpacity={0.2} />
                <p className="font-serif text-xl md:text-3xl text-neutral-200 italic leading-relaxed">
                    "Two souls with but a single thought,<br className="hidden md:block"/> two hearts that beat as one."
                </p>
                <div className="mt-8 flex justify-center">
                    <p className="text-gold-500/60 text-xs uppercase tracking-[0.3em] border-t border-gold-500/20 pt-4 px-8">
                        John Keats
                    </p>
                </div>
            </AnimationWrapper>
        </div>
    </section>
  );
};
