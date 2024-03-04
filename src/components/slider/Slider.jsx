import React from 'react';
import './slider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css';

const Slider = ({images}) => {
  return (
    <div className='creatic__slider'>
      
      <Swiper
      effect={'coverflow'}
      grabCursor={true}
      loop={true}
      centeredSlides={true}
      slidesPerView={'3'}
      spaceBetween={30}
      coverflowEffect={{
        rotate: 10,
        stretch: 2,
        depth: 8,
        modifier: 3,
        slideShadows: true,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
      >
        {
        images.map((image, index) => (
        <SwiperSlide key={index}>
            <img src={image.src} alt={image.alt} />
        </SwiperSlide>
        ))
        }
      </Swiper>
      
    </div>
  )
}

export default Slider;
