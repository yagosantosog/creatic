import React from 'react';
import './cta.css'
import { Link } from 'react-router-dom';



const Cta = ({theme, title, subtitle, text, btn_text, btn_target, btn_to }) => {
  const link = btn_to
  const scrollToElement = () => {
  var element = document.getElementById(btn_target);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    window.scrollTo(0, 0);
  }
}
  return (
    <div className='creatic__cta'>
      <div className='theme'>{theme}</div>
      <>{title}</>
      <div className="color-bar"></div>
      <>{subtitle}</>
      <>{text}</>
      <div onClick={scrollToElement} className="creatic__cta-btn">
        {link ? <Link to={link}><button type='button'>{btn_text}</button></Link> : <button type='button'>{btn_text}</button>}
      </div>
    </div>
  )
}

export default Cta;
