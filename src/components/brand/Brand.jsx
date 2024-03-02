import React from 'react';
import './brand.css';

const Brand = ({src, alt, title, text}) => {
  return (
    <div className='creatic__brand'>
          <img src={src} alt={alt} />
          <p className='brand_title'>{title}</p>
          <p className='brand_text'>{text}</p>
      </div>
  )
}

export default Brand;
