import React from 'react';
import './testimonialCard.css';

const TestimonialCard = ({image, username, email, testimonial_text}) => {
  return (
    <div className='creatic__testimonialCard'>
      <p>{testimonial_text}</p>
      <div className="creatic__testimonialCard-profile">
        <img src={image} alt="profile of a person that testimonial." />
        <div className="creatic_testimonialCard-profile_text">
          <span>{username}</span>
          <span className='email'>{email}</span>
        </div>
        
      </div>
    </div>
  )
}

export default TestimonialCard;
