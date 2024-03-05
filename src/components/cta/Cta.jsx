import React from 'react';
import './cta.css'



const Cta = ({theme, title, subtitle, text, btn_text }) => {
  return (
    <div className='creatic__cta'>
      <div className='theme'>{theme}</div>
      <>{title}</>
      <div className="color-bar"></div>
      <>{subtitle}</>
      <>{text}</>
      <div className="creatic__cta-btn">
        <button type='button'>{btn_text}</button>
      </div>
    </div>
  )
}

export default Cta;
