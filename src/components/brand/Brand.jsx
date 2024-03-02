import React from 'react';
import './brand.css';

const Brand = ({src, alt, title, text}) => {
  return (
    <div className='creatic__brand'>
      <div className="cratic__brand-container">
        <div className="creatic__brand-container_images">
          <img src={src} alt={alt} />
          <p>{title}</p>
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default Brand;
