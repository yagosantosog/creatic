import React from 'react';
import './inputCard.css'

const InputCard = () => {
  return (
    <div className='creatic__inputCard'>
      <div className="creatic__inputCard-container">
        <label htmlFor="name-input">YOUR NAME</label>
        <input type="text" name="name-input" id="name-input" />
        <label htmlFor="email-input">YOUR EMAIL</label>
        <input type="email" name="email-input" id="email-input" />
        <label htmlFor="message">YOUR MESSAGE</label>
        <textarea name="message" id="message-input" cols="30" rows="7"></textarea>
        <button type="submit">SEND MESSAGE</button>
      </div>
      
    </div>
  )
}

export default InputCard;
