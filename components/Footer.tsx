import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-black py-12 text-center border-t border-neutral-900">
            <h2 className="font-serif text-2xl text-gold-500/50 mb-4">Sarah & James</h2>
            <p className="text-neutral-500 text-sm mb-8 tracking-widest uppercase">#SarahSaidYes</p>
            <p className="text-neutral-700 text-xs">
                &copy; 2024. All Rights Reserved. <br />
                Designed with <span className="text-red-900">♥</span> using React & Tailwind.
            </p>
        </footer>
    );
};
