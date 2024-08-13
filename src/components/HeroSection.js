import React from 'react';
import '../App.css';
import './css/HeroSection.css';
import { Button } from './Button';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='videos/Explore.mp4' autoPlay loop muted />
      <h1>EXPLORE THE WORLD</h1>
      <p>What are you waiting for?</p>  
      <div className='hero-btns'>
          <Button to='/destinations' className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
          {/* <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>WATCH TRAILER <i className='far fa-play-circle'></i></Button> */}
      </div>
    </div>
  ) 
}

export default HeroSection