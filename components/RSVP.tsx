import React, { useState } from 'react';
import { AnimationWrapper } from './AnimationWrapper';
import { Send } from 'lucide-react';
import { GuestRSVP } from '../types';

export const RSVP: React.FC = () => {
    const [formData, setFormData] = useState<GuestRSVP>({
        name: '',
        guests: 1,
        status: 'attending',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("RSVP Submitted:", formData);
        setIsSubmitted(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <section className="py-24 px-4 bg-[url('https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center relative">
            <div className="absolute inset-0 bg-neutral-950/90 backdrop-blur-sm"></div>

            <div className="max-w-xl mx-auto relative z-10">
                <AnimationWrapper className="bg-neutral-900/80 p-8 md:p-12 rounded-2xl border border-gold-500/30 shadow-2xl">
                    <h2 className="text-3xl md:text-4xl font-serif text-center text-gold-200 mb-8">R.S.V.P</h2>
                    
                    {isSubmitted ? (
                         <div className="text-center py-12">
                            <div className="w-16 h-16 bg-gold-500/20 text-gold-400 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Send size={32} />
                            </div>
                            <h3 className="text-2xl font-serif text-white mb-2">Thank You!</h3>
                            <p className="text-neutral-400">Your confirmation has been received.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div>
                                <label className="block text-gold-500 text-xs uppercase tracking-widest mb-2">Full Name</label>
                                <input 
                                    type="text" 
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-neutral-700 text-white py-2 focus:outline-none focus:border-gold-500 transition-colors placeholder-neutral-600"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gold-500 text-xs uppercase tracking-widest mb-2">Total Guests</label>
                                    <input 
                                        type="number" 
                                        name="guests"
                                        min="1"
                                        max="5"
                                        value={formData.guests}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b border-neutral-700 text-white py-2 focus:outline-none focus:border-gold-500 transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gold-500 text-xs uppercase tracking-widest mb-2">Attendance</label>
                                    <select 
                                        name="status"
                                        value={formData.status}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b border-neutral-700 text-white py-2 focus:outline-none focus:border-gold-500 transition-colors [&>option]:bg-neutral-900"
                                    >
                                        <option value="attending">Will Attend</option>
                                        <option value="not-attending">Cannot Attend</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-gold-500 text-xs uppercase tracking-widest mb-2">Message</label>
                                <textarea 
                                    name="message"
                                    rows={3}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-neutral-700 text-white py-2 focus:outline-none focus:border-gold-500 transition-colors placeholder-neutral-600 resize-none"
                                    placeholder="Write a message for the couple..."
                                ></textarea>
                            </div>

                            <button 
                                type="submit"
                                className="w-full bg-gold-600 text-neutral-950 font-serif font-bold uppercase tracking-widest py-4 hover:bg-gold-500 transition-colors mt-4"
                            >
                                Confirm Attendance
                            </button>
                        </form>
                    )}
                </AnimationWrapper>
            </div>
        </section>
    );
};
