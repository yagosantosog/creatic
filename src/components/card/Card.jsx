import React from 'react';
import './card.css';

const Card = ({image, alt, title, text}) => {
  return (
    <div className='creatic__card'>
      <div className="creatic__card-image">
        <img src={image} alt={alt} />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default Card;
