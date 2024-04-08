import React from 'react';
import './services.css';
import { Card, Cta } from '../../components';
import card1 from '../../assets/videorec.svg';
import card2 from '../../assets/graphicrec.svg';
import card3 from '../../assets/uxrec.svg';
import card4 from '../../assets/webrec.svg';


const Services = () => {
  return (
    <section className='creatic__services' id='services'>
      <div className="wrapper creatic__services-container">
        <div className="creatic__services-container_content">
          <Cta theme={<p>OUR SERVICES</p>} title={<h2>Experience The Power Of <span className='main-word'>Innovation</span>.</h2>} text={<p>Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit amet,  Neque porro elit NeDque porro  Neque porro quisquam est qui do lorem ipsum quia dolor sit amets ipsum </p>} btn_text='VIEW ALL' btn_to='/ourServices'/>
        </div>
        <div className="creatic__services-container_cards">
        <div className="creatic__services-container_cards-col1">
          <div className="creatic__services-container_cards-card1 ">
            <Card src={card1} alt='A computer playing a video'/>
          </div>
          <div className="creatic__services-container_cards-card3">
          <Card src={card3} alt='A computer playing a video'/>
          </div>
        </div>
        <div className="creatic__services-container_cards-col2">
          <div className="creatic__services-container_cards-card2">
            <Card src={card2} alt='A computer playing a video'/>
          </div>
          <div className="creatic__services-container_cards-card4">
            <Card src={card4} alt='A computer playing a video'/>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Services;
