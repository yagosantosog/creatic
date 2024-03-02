import React from 'react';
import './card.css';

const Card = ({src, alt, title, text}) => {
  return (
    <div className='creatic__card'>
      <div className="creatic__card-image">
        <img src={src} alt={alt} />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default Card;
