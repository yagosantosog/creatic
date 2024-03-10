import React from 'react';
import './inputCard.css'

const InputCard = () => {
  return (
    <div className='creatic__inputCard'>
      <div className="creatic__inputCard-container">
        <label htmlFor="name-input">YOUR NAME</label>
        <input type="text" name="name" id="name-input" autoComplete='given-name'/>
        <label htmlFor="email-input">YOUR EMAIL</label>
        <input type="email" name="email" id="email-input" autoComplete='given-email' />
        <label htmlFor="message-input">YOUR MESSAGE</label>
        <textarea name="message" id="message-input" autoComplete='off' cols="30" rows="7"></textarea>
        <button type="submit">SEND MESSAGE</button>
      </div>
      
    </div>
  )
}

export default InputCard;
