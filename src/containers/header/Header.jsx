import React from 'react';
import './header.css';
import { Cta } from '../../components';
import jewelWoman from '../../assets/beautiful-woman-with-big-jewel.png'

const Header = () => {
  return (
    <div className='creatic__header' id='home'>
      <div className='original_gradient'></div>
      <div className="creatic__header-container">
        <div className="creatic__header-container_content">
        <Cta theme={<p>WELCOME TO CREATIC</p>} title={<h1>WE ARE <span className='main-word'>CREATIVE</span> DESIGN AGENCY</h1>} text={<p>Lorem ipsumNeque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit Neque porro elit Neque porro quis ipsum</p>} btn_text='GET IN TOUCH'/>
        </div>
        <div className="creatic__header-container_image">
          <img src={jewelWoman} alt="A beautiful woman with a big jewel" />
        </div>
        </div>
    </div>
  )
}

export default Header;
