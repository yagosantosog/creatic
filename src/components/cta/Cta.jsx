import React from 'react';
import './cta.css'



const Cta = ({theme, title, text, btn_text }) => {
  return (
    <div className='creatic__cta'>
      <p>{theme}</p>
      <h2>{title}</h2>
      <div className="color-bar"></div>
      <p>{text}</p>
      <div className="creatic__cta-btn">
        <button type='button'>{btn_text}</button>
      </div>
    </div>
  )
}

export default Cta;
