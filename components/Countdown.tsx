import React, { useState, useEffect } from 'react';
import { AnimationWrapper } from './AnimationWrapper';
import { CountdownTime } from '../types';

export const Countdown: React.FC = () => {
    // Set target date to a future date
    const targetDate = new Date('2025-12-12T00:00:00').getTime();

    const [timeLeft, setTimeLeft] = useState<CountdownTime>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(interval);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    const TimeBox = ({ value, label }: { value: number; label: string }) => (
        <div className="flex flex-col items-center">
            <div className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center border border-gold-500/30 bg-neutral-900/50 backdrop-blur-sm rounded-lg mb-3 shadow-lg shadow-gold-500/5 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gold-400/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="text-3xl md:text-5xl font-serif text-gold-100 relative z-10">{String(value).padStart(2, '0')}</span>
            </div>
            <span className="text-xs md:text-sm uppercase tracking-widest text-neutral-400">{label}</span>
        </div>
    );

    return (
        <section className="py-20 bg-[url('https://images.unsplash.com/photo-1520052205864-92d242b3a76b?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-fixed bg-center relative">
            <div className="absolute inset-0 bg-neutral-950/80 backdrop-blur-sm"></div>
            
            <div className="container mx-auto px-4 relative z-10">
                <AnimationWrapper className="flex flex-wrap justify-center gap-6 md:gap-12">
                    <TimeBox value={timeLeft.days} label="Days" />
                    <TimeBox value={timeLeft.hours} label="Hours" />
                    <TimeBox value={timeLeft.minutes} label="Minutes" />
                    <TimeBox value={timeLeft.seconds} label="Seconds" />
                </AnimationWrapper>
                
                <AnimationWrapper delay={0.3} className="text-center mt-12">
                    <p className="font-serif text-xl md:text-2xl text-gold-200 italic">"Counting down the moments until forever"</p>
                </AnimationWrapper>
            </div>
        </section>
    );
};