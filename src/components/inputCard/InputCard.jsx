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
      <label htmlFor='user_name'>Name</label>
      <input id='user_name' className='inputs' type="text" name="user_name" required/>
      <label htmlFor='user_email'>Email</label>
      <input id='user_email' className='inputs' type="email" name="user_email" required/>
      <label htmlFor='message'>Message</label>
      <textarea id='message' name="message" required/>
      <input type="submit" value="Send Message" />
    </form>
      </div>
      
    </div>
  )
}

export default InputCard;
