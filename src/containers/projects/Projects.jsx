import React from 'react';
import './projects.css';
import abstractImage from '../../assets/abstractImage.png';
import aiImage from '../../assets/gradientAi.png';
import pexelWoman from '../../assets/pexels-motional-studio-1081685.png';
import womanWombo from '../../assets/womanWombo.jpg';
import abstracttwo from '../../assets/abstract2.jpg';
import surreal from '../../assets/surreal.jpg';
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
    <div className='creatic__projects'>
      <div className="creatic__projects-container">
        <div className="creatic__projects-container_title">
          <h2>ENJOY OUR <span>LATEST</span> PROJECTS </h2>
          <div className='bars-support'>
            <p>OUR WORK</p>
            </div>
          
        </div>
        <div className="creatic__project-container_slider">
          <Slider images={images}/>
        </div>
        <div className="creatic__projects-container_whyUs">
          <div className="creatic__projects-container_whyUs-cta">
          <Cta theme={<p>WHY US?</p>} title={<h2>25 YEARS OF <span className='main-word'>EXPERIENCE</span> AS A CRIATIVE AGENCY</h2>} btn_text='READ MORE'/>
          </div>
          <div className="creatic__projects-container_whyUs-list">
            <p>Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit amet,  Neque porro elit NeDque porro  Lorem ipsum</p>
            <ul>
              <li><img src={check}/>Happy Customer</li>
              <li><img src={check}/>Experienced Team</li>
              <li><img src={check}/>Modern Technology</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;
