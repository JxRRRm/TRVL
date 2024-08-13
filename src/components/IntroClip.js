import React, { useEffect, useRef, useState } from 'react';
import './css/IntroClip.css';

function IntroClip({ src, start = 0, onEnd }) {
  const videoRef = useRef(null);
  const [videoPlayed, setVideoPlayed] = useState(false);
  const [progress, setProgress] = useState(0); // State to track progress

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play(); // Ensure the video starts playing
    }
  }, []);

  useEffect(() => {
    const handleVideoEnd = () => {
      setVideoPlayed(true); // Mark video as played when it ends
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('ended', handleVideoEnd);
      
      // Update progress based on video time
      const updateProgress = () => {
        const duration = videoElement.duration;
        const currentTime = videoElement.currentTime;
        setProgress((currentTime / duration) * 100);
      };

      videoElement.addEventListener('timeupdate', updateProgress);
      
      return () => {
        videoElement.removeEventListener('ended', handleVideoEnd);
        videoElement.removeEventListener('timeupdate', updateProgress);
      };
    }
  }, []);

  useEffect(() => {
    if (videoPlayed) {
      const stillShotTimer = setTimeout(() => {
        onEnd(); // Trigger the end callback after the delay for the still shot effect
      }, 500); // 500ms delay for the still shot effect

      return () => clearTimeout(stillShotTimer);
    }
  }, [videoPlayed, onEnd]);
  
  // Handler to skip the intro
  const handleSkipClick = () => {
    onEnd(); // Trigger the end callback immediately
  };

  return (
    <div className="intro-video">
      <video ref={videoRef} muted>
        <source src={src} />
        Your browser does not support the video tag.
      </video>
      <button className="skip-button" onClick={handleSkipClick}>
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        Skip
      </button>
    </div>
  );
}

export default IntroClip;
