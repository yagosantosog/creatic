import React, { useRef } from 'react';
import './inputCard.css'
import emailjs from '@emailjs/browser';




const InputCard = () => {
  const form = useRef()
  let inputs = document.querySelectorAll('.inputs')
  let textarea = document.querySelector('textarea')
  const clearInputs = () => {
    inputs.forEach(input => input.value = '')
    textarea.value = ''
  }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_h5148ty', 'template_avkiy2m', form.current, {
        publicKey: '9D-BTLrM5W1TZ0J2W',
      })
      .then(
        () => {
          alert('Message Sent Successfully!');
          clearInputs()
        },
        (error) => {
          alert('FAILED...', error.text);
        },
      );
  };
  return (
    <div className='creatic__inputCard'>
      <div className="creatic__inputCard-container">
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input className='inputs' type="text" name="user_name" required/>
      <label>Email</label>
      <input className='inputs' type="email" name="user_email" required/>
      <label>Message</label>
      <textarea name="message" required/>
      <input type="submit" value="Send Message" />
    </form>
      </div>
      
    </div>
  )
}

export default InputCard;
