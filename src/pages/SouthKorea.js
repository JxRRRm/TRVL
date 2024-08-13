import React, { useState, useEffect } from 'react';
import IntroClip from '../components/IntroClip'; 
import './css/SouthKorea.css';

function SouthKorea() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroEnd = () => {
    setShowIntro(false); // Hide intro video and show main content
  };

  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; // Re-enable scrolling
    }

    return () => {
      document.body.style.overflow = 'auto'; // Ensure scrolling is re-enabled if the component unmounts
    };
  }, [showIntro]);

  return (
    <div >
      {showIntro ? (
        <IntroClip 
          src="videos/SouthKoreaIntro.mp4" 
          onEnd={handleIntroEnd} 
        />
      ) : (
        <div className='s-korea-page'>
          {/* Add your main content for the China page here */}
          <h1>Explore South Korea</h1>
          <p>Discover the rich culture, history, and natural beauty of South Korea.</p>
          {/* More content... */}
        </div>
      )}
    </div>
  );
}

export default SouthKorea