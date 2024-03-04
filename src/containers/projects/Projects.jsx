import React from 'react';
import './projects.css';
import abstractImage from '../../assets/abstractImage.png';
import aiImage from '../../assets/gradientAi.png';
import pexelWoman from '../../assets/pexels-motional-studio-1081685.png';
import womanWombo from '../../assets/womanWombo.jpg';
import abstracttwo from '../../assets/abstract2.jpg';
import surreal from '../../assets/surreal.jpg';
import { Slider } from '../../components';

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
          <h2>ENJOY OUR LATEST PROJECTS </h2>
          <p>OUR WORK</p>
        </div>
        <div className="creatic__project-container_slider">
          <Slider images={images}/>
        </div>
      </div>
    </div>
  )
}

export default Projects;
