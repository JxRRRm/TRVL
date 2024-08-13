import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__vid-wrap' data-category={props.label}>
						<video
								className='cards__item__video'
								alt='Travel Video'
								src={props.src}
								autoPlay
								loop
								muted
						/>
          </figure>
        </Link>
      </li>
    </>
  );
}

export default CardItem;