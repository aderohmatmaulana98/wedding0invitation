import React, { useState } from 'react';
import { AnimationWrapper } from './AnimationWrapper';
import { Copy, Check, Gift as GiftIcon, ChevronDown } from 'lucide-react';

export const Gift: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [copied, setCopied] = useState<string | null>(null);

    const handleCopy = (text: string, id: string) => {
        navigator.clipboard.writeText(text);
        setCopied(id);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <section className="py-20 px-4 bg-neutral-950">
            <div className="max-w-2xl mx-auto">
                <AnimationWrapper className="text-center mb-12">
                    <GiftIcon className="w-12 h-12 text-gold-400 mx-auto mb-6" />
                    <h2 className="text-3xl md:text-4xl font-serif text-gold-200 mb-4">Wedding Gift</h2>
                    <p className="text-neutral-400 font-sans leading-relaxed">
                        Your presence is our greatest gift. However, should you wish to honor us with a wedding gift, we have provided our banking details below.
                    </p>
                </AnimationWrapper>

                <AnimationWrapper delay={0.2}>
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-full flex items-center justify-between p-6 bg-neutral-900/50 border border-gold-500/30 rounded-lg hover:bg-neutral-900 transition-colors group"
                    >
                        <span className="font-serif text-lg text-gold-300">Tap to reveal account details</span>
                        <ChevronDown className={`text-gold-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[600px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                        {/* Bank Account 1 */}
                        <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 rounded-xl border border-gold-500/20 mb-4 flex flex-col items-center text-center shadow-lg">
                            <p className="text-gold-400 text-sm tracking-widest uppercase mb-1">BCA</p>
                            <p className="font-mono text-2xl text-white mb-2 tracking-wider">123 456 7890</p>
                            <p className="text-neutral-400 text-sm mb-4">Sarah Anderson</p>
                            <button 
                                onClick={() => handleCopy('1234567890', 'bca')}
                                className="flex items-center gap-2 text-xs uppercase tracking-widest text-gold-500 hover:text-gold-300 transition-colors"
                            >
                                {copied === 'bca' ? <><Check size={14} /> Copied</> : <><Copy size={14} /> Copy Number</>}
                            </button>
                        </div>

                        {/* QR Code Placeholder */}
                         <div className="bg-white p-4 rounded-xl border border-gold-500/20 flex flex-col items-center">
                            <div className="w-48 h-48 bg-neutral-100 mb-4 flex items-center justify-center text-neutral-400 text-xs">
                                <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=ExampleWeddingGift" alt="QR Code" className="w-full h-full" />
                            </div>
                            <p className="text-neutral-900 font-bold text-sm">Scan QRIS to Send Gift</p>
                        </div>
                    </div>
                </AnimationWrapper>
            </div>
        </section>
    );
};
