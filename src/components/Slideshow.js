import React from 'react';
import Slider from 'react-slick';
import './Slideshow.css';

function Slideshow() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className="slideshow-container">
      <Slider {...settings}>
        <div>
          <img src="/images/Great-Wall.jpg" alt="Slide 1" />
        </div>
        <div>
          <img src="/images/slide2.jpg" alt="Slide 2" />
        </div>
        <div>
          <img src="/images/slide3.jpg" alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
}

export default Slideshow;
