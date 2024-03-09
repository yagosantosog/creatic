import React from 'react';
import './testimonials.css';
import robotWoman from '../../assets/Image.png';
import robotWoman2 from '../../assets/Image2.png';
import { Cta } from '../../components';
import client from '../../assets/client.png';

const testimonials = () => {
  return (
    <section className='creatic__testimonials' id='pages'>
      <div className="creatic__testimonials-container">
        <div className="creatic__testimonials-container_leftSide">
          <img src={robotWoman} alt="A robot woman." />
        </div>
        <div className="creatic__testimonials-container_content">
        <Cta title={<h2>WHAT <span className='main-word'>OUR</span> CLIENTS SAY?</h2>} text={
        (
        <>
        <p>TESTIMONIALS</p>
        <div className="creatic_testimonial-card">
          <img src={client} alt="One of our clients." />
        </div>
        </>
        )
      } btn_text='VIEW ALL TESTIMONIALS '/>
        </div>
        <div className="creatic__testimonials-container_rightSide">
          <img src={robotWoman2} alt="A robot woman." />
        </div>
      </div>
    </section>
  )
}

export default testimonials;
