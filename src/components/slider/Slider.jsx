import React from 'react';
import './slider.css';
import { register } from 'swiper/element/bundle';

register();
const Slider = ({images}) => {
  return (
    <div className='creatic__slider'>
      <swiper-container
      navigation-next-el=".swiper-button-next-custom"
      navigation-prev-el=".swiper-button-prev-custom"

      effect='coverflow'
      grab-cursor='true'
      loop='true'
      centered-slides='true'
      slides-per-view='auto'
      space-between='30'
      pagination='true'
      pagination-clickable='true'
      navigation='true'
      keyboard='true'
      >
        {
        images.map((image, index) => (
        <swiper-slide key={index}>
            <img src={image.src} alt={image.alt} />
        </swiper-slide>
        ))
        }
      </swiper-container>
      
    </div>
  )
}

export default Slider;
