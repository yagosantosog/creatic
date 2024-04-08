import React from 'react';
import './testimonials.css';
import { Cta, TestimonialCard } from '../../components';
import client from '../../assets/client.webp';

const testimonials = () => {
  return (
    <section className='creatic__testimonials' id='pages'>
      <div className="section_padding creatic__testimonials-container">
        <div className="creatic__testimonials-container_leftSide">
        </div>
        <div className="creatic__testimonials-container_content">
        <Cta title={<h2>WHAT <span className='main-word'>OUR</span> CLIENTS SAY?</h2>} text={
        (
        <>
        <p>TESTIMONIALS</p>
        <div className="creatic_testimonial-card">
          <TestimonialCard image={client} testimonial_text="Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit amet,  Neque porro elit" username='Carol Chaves' email='@caroles.gmail.com'/>
        </div>
        </>
        )
      } btn_text='VIEW ALL TESTIMONIALS ' btn_to='/testimonials'/>
        </div>
        <div className="creatic__testimonials-container_rightSide">
        </div>
      </div>
    </section>
  )
}

export default testimonials;
