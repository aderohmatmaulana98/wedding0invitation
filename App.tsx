
import React, { useState } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { MusicPlayer } from './components/MusicPlayer';
import { Hero } from './components/Hero';
import { Couple } from './components/Couple';
import { Story } from './components/Story';
import { Countdown } from './components/Countdown';
import { EventDetails } from './components/EventDetails';
import { Gallery } from './components/Gallery';
import { RSVP } from './components/RSVP';
import { Gift } from './components/Gift';
import { Footer } from './components/Footer';

// Using the user-provided SoundHelix link
const AUDIO_URL = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

const App: React.FC = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleOpenInvitation = () => {
    setIsSplashVisible(false);
    setIsPlaying(true);
    // Allow body scroll again when splash is closed
    document.body.style.overflow = 'auto';
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Prevent scroll initially
  React.useEffect(() => {
    if (isSplashVisible) {
      document.body.style.overflow = 'hidden';
    }
  }, [isSplashVisible]);

  return (
    <div className="relative min-h-screen">
      <SplashScreen onOpen={handleOpenInvitation} isVisible={isSplashVisible} />
      
      {!isSplashVisible && (
        <>
            <main className="flex flex-col">
                <Hero />
                <Couple />
                <Story />
                <Countdown />
                <EventDetails />
                <Gallery />
                <Gift />
                <RSVP />
                <Footer />
            </main>
            
            <MusicPlayer 
                isPlaying={isPlaying} 
                togglePlay={togglePlay} 
                audioUrl={AUDIO_URL} 
            />
        </>
      )}
    </div>
  );
};

export default App;
