import React from 'react';
import { AnimationWrapper } from './AnimationWrapper';
import { Calendar, Clock, MapPin } from 'lucide-react';

const EventCard: React.FC<{ title: string; date: string; time: string; location: string; address: string }> = ({ title, date, time, location, address }) => (
    <div className="bg-neutral-900/30 border border-gold-500/20 p-8 md:p-10 rounded-xl hover:bg-neutral-900/50 transition-colors duration-300">
        <h3 className="font-serif text-2xl text-gold-300 mb-6 border-b border-gold-500/20 pb-4 inline-block">{title}</h3>
        
        <div className="space-y-6">
            <div className="flex items-start gap-4">
                <Calendar className="text-gold-500 shrink-0 mt-1" size={20} />
                <div>
                    <p className="font-bold text-neutral-200">{date}</p>
                </div>
            </div>
            <div className="flex items-start gap-4">
                <Clock className="text-gold-500 shrink-0 mt-1" size={20} />
                <div>
                    <p className="font-bold text-neutral-200">{time}</p>
                </div>
            </div>
            <div className="flex items-start gap-4">
                <MapPin className="text-gold-500 shrink-0 mt-1" size={20} />
                <div>
                    <p className="font-bold text-neutral-200">{location}</p>
                    <p className="text-sm text-neutral-400 mt-1">{address}</p>
                </div>
            </div>
        </div>
        
        <a 
            href="https://maps.google.com" 
            target="_blank" 
            rel="noreferrer"
            className="mt-8 inline-block px-6 py-2 border border-gold-500/50 text-gold-300 text-sm tracking-wider uppercase hover:bg-gold-500 hover:text-neutral-950 transition-all duration-300"
        >
            View Location
        </a>
    </div>
);

export const EventDetails: React.FC = () => {
    return (
        <section className="py-24 px-4 bg-neutral-950 relative">
            <div className="max-w-6xl mx-auto">
                <AnimationWrapper className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-gold-200 to-gold-500 mb-4">Event Details</h2>
                    <p className="text-neutral-400 font-sans">We would be honored by your presence</p>
                </AnimationWrapper>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <AnimationWrapper delay={0.2}>
                        <EventCard 
                            title="Holy Matrimony"
                            date="Friday, December 12, 2025"
                            time="09:00 AM - 11:00 AM"
                            location="The Grand Cathedral"
                            address="123 St. Mary's Avenue, Historic District, Cityville"
                        />
                    </AnimationWrapper>
                    
                    <AnimationWrapper delay={0.4}>
                        <EventCard 
                            title="Wedding Reception"
                            date="Friday, December 12, 2025"
                            time="06:00 PM - 10:00 PM"
                            location="Royal Palace Hotel Ballroom"
                            address="456 Luxury Lane, Downtown, Cityville"
                        />
                    </AnimationWrapper>
                </div>

                <AnimationWrapper delay={0.6} className="w-full h-80 md:h-96 rounded-xl overflow-hidden border border-gold-500/20 shadow-2xl">
                     <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0637731383863!2d-122.41941548468165!3d37.77492927975961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter+HQ!5e0!3m2!1sen!2sus!4v1530660682121" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0, filter: 'grayscale(1) contrast(1.2) invert(1) opacity(0.8)' }} 
                        allowFullScreen 
                        loading="lazy"
                        title="Map"
                    ></iframe>
                </AnimationWrapper>
            </div>
        </section>
    );
};