
import React, { useEffect, useRef, useState } from 'react';
import { Pause, Play, Volume2, VolumeX } from 'lucide-react';

interface MusicPlayerProps {
  isPlaying: boolean;
  togglePlay: () => void;
  audioUrl: string;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ isPlaying, togglePlay, audioUrl }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;

    if (isPlaying) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Audio playback waiting for interaction or interrupted:", error.message);
        });
      }
    } else {
      audio.pause();
    }
  }, [isPlaying, volume]);

  const handleAudioError = (e: React.SyntheticEvent<HTMLAudioElement, Event>) => {
    const error = e.currentTarget.error;
    console.warn("Audio Source Error:", error?.message, "Code:", error?.code);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center group">
      <audio 
        ref={audioRef} 
        loop 
        playsInline
        preload="auto"
        src={audioUrl}
        onError={handleAudioError}
        crossOrigin="anonymous"
      >
        Your browser does not support the audio element.
      </audio>

      {/* Volume Slider - Appears on Hover */}
      <div className="absolute bottom-full mb-4 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-out translate-y-4 group-hover:translate-y-0">
          <div className="bg-neutral-900/90 backdrop-blur-md border border-gold-500/30 rounded-full p-3 shadow-lg flex flex-col items-center gap-3">
             <div className="h-24 w-6 flex items-center justify-center">
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={(e) => setVolume(parseFloat(e.target.value))}
                    className="w-24 h-1 bg-neutral-600 rounded-lg appearance-none cursor-pointer accent-gold-500 -rotate-90 shadow-sm"
                />
             </div>
             <button 
                onClick={(e) => { e.stopPropagation(); setVolume(volume === 0 ? 0.5 : 0); }} 
                className="text-gold-400 hover:text-gold-200 transition-colors"
                title={volume === 0 ? "Unmute" : "Mute"}
             >
                {volume === 0 ? <VolumeX size={16} /> : <Volume2 size={16} />}
             </button>
          </div>
      </div>

      <button
        onClick={togglePlay}
        className={`relative flex items-center justify-center w-12 h-12 rounded-full bg-neutral-900/80 backdrop-blur-md border border-gold-500/30 text-gold-300 shadow-lg hover:bg-neutral-800 transition-all duration-300`}
        title={isPlaying ? "Pause Music" : "Play Music"}
      >
        <div className={`absolute inset-0 rounded-full border border-dashed border-gold-500/50 ${isPlaying ? 'animate-spin-slow' : ''}`}></div>
        {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
      </button>
    </div>
  );
};
