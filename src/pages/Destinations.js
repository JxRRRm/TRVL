import React, { useRef, useEffect } from 'react'
import './css/Destinations.css'
import CardItem from '../components/CardItem'
import '../components/css/Cards.css';
import Footer from '../components/Footer';

function Destinations() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Set the playback speed to 0.5x (you can adjust this value)
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5
      videoRef.current.currentTime = 2; // Start video at 10 seconds
      videoRef.current.play(); // Ensure the video starts playing
    }
  }, []);

  return (
    <div className='destinations-page'>

      <video ref={videoRef} autoPlay loop muted className="background-video">
        <source src='/videos/AsiaBG.mp4'/>
        Your browser does not support the video tag.
      </video>

      <h1>Explore These Wonderful Destinations!</h1>
        <div className='cards__container'>
          <ul className='cards__items'>
            <CardItem
                src='videos/China.mp4'
                text='Explore the captivating wonders of China'
                label='China'
                path='/china'
              />
              <CardItem
                src='videos/Japan.mp4'
                text='Experience the elegant culture of Japan'
                label='Japan'
                path='/japan'
              />
            </ul>
            <ul className='cards__items'>
            <CardItem
                src='videos/Vietnam.mp4'
                text='Fall in love with the beautiful country of Vietnam'
                label='Vietnam'
                path='/vietnam'
              />
            <CardItem
              src='videos/Thailand.mp4'
              text='Discover the enchanting treasures of Thailand'
              label='Thailand'
              path='/thailand'
            />
            <CardItem
              src='videos/South-Korea.mp4'
              text='Uncover the hidden gems of South Korea'
              label='South Korea'
              path='/south-korea'
            />
          </ul>
        </div>
    </div>
  )
}

export default Destinations