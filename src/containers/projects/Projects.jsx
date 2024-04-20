import React from 'react';
import './projects.css';
import abstractImage from '../../assets/abstractImage.webp';
import aiImage from '../../assets/gradientAi.webp';
import pexelWoman from '../../assets/pexels-motional-studio-1081685.webp';
import womanWombo from '../../assets/womanWombo.webp';
import abstracttwo from '../../assets/abstract2.webp';
import surreal from '../../assets/surreal.webp';
import check from '../../assets/check.svg';
import { Cta, Slider } from '../../components';

const Projects = () => {
  const images = [
            { src: pexelWoman, alt: 'An blue ai image.'},
            { src: aiImage, alt: 'A pixeled Woman blue art.'},
            { src: womanWombo, alt: 'Woman.'},
            { src: abstracttwo, alt: 'An abstract blue art.'},
            { src: surreal, alt: 'Surreal blue image.'},
            { src: abstractImage, alt: 'An abstract blue art.'}
          ]
  return (
    <section className='animation creatic__projects' id='portifolio'>
      <div className="wrapper creatic__projects-container">
        <div className="creatic__projects-container_title">
          <h2>ENJOY OUR <span>LATEST</span> PROJECTS </h2>
          <div className='bars-support'>
            <p>OUR WORK</p>
            </div>
          
        </div>
        <div className="creatic__project-container_slider">
          <div className="swiper-button-prev-custom">
            <i className='bx bxs-chevron-left'></i>
          </div>
          <div className="swiper-button-next-custom">
            <i className='bx bxs-chevron-right'></i>
          </div>
          <Slider images={images}/>
        </div>
        <div className="creatic__projects-container_whyUs">
          <div className="creatic__projects-container_whyUs-cta">
          <Cta theme={<p>WHY US?</p>} title={<h2>25 YEARS OF <span className='main-word'>EXPERIENCE</span> AS A CRIATIVE AGENCY</h2>} btn_text='READ MORE' btn_to='/whyUs'/>
          </div>
          <div className="creatic__projects-container_whyUs-list">
            <p>Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit amet,  Neque porro elit NeDque porro  Lorem ipsum</p>
            <ul>
              <li><img src={check} alt=''/>Happy Customer</li>
              <li><img src={check} alt=''/>Experienced Team</li>
              <li><img src={check} alt=''/>Modern Technology</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects;
