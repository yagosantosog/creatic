import React from 'react';
import './cta.css'
import { Link } from 'react-router-dom';



const Cta = ({theme, title, subtitle, text, btn_text, btn_target, btn_to }) => {
  const link = btn_to
  return (
    <div className='creatic__cta'>
      <div className='theme'>{theme}</div>
      <>{title}</>
      <div className="color-bar"></div>
      <>{subtitle}</>
      <>{text}</>
      <div className="creatic__cta-btn">
        {link ? <Link onClick={() => {
          document.documentElement.scrollTo({top: 0, left: 0, behavior: "instant",})
          window.history.replaceState(null, null, window.location.pathname)
        }} to={link}><button type='button'>{btn_text}</button></Link>: <Link to={'#' + btn_target}><button type='button'>{btn_text}</button></Link>}
      </div>
    </div>
  )
}

export default Cta;
