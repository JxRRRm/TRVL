import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Explore These Wonderful Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
					<CardItem
              src='videos/China.mp4'
              text='Explore the captivating wonders of the great country of China'
              label='China'
              path='/china'
            />
            <CardItem
              src='videos/Japan.mp4'
              text='Experience the elegance of the wonderful country of Japan'
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
    </div>
  );
}

export default Cards;