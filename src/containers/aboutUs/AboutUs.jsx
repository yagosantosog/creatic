import React from 'react';
import './aboutUs.css';
import robot from '../../assets/robot.png'
import { Cta } from '../../components';

const AboutUs = () => {
  return (
    <section className='creatic__aboutUs' id='about'>
      <div className="original_gradient"></div>
      <div className="creatic__aboutUs-container">
        <div className="creatic__aboutUs-container_image">
          <img src={robot} alt="A robot saying hello" />
        </div>
        <div className="creatic__aboutUs-container_content">
          < Cta  theme={<p>ABOUT US</p>} title={<h2>We Bring <span className='main-word'>Creative</span> Ideas To Life.</h2>} subtitle={<span>We love Creating</span>} text={<><p>Lorem ipsumNeque porro quisquam est qui do lorem ipsum quia dolor sit amet,  Neque porro elit NeDque porro  Lorem ipsum Neque porro Neque porro</p> 
          <p>Neque porro quisquam est qui do lorem ipsum quia dolor sit amet,  Lorem ipsum Neque quis ipsum</p></>} btn_text='READ MORE'/>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
