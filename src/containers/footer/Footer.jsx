import React from 'react';
import './footer.css';
import { ContactItem, Cta, InputCard } from '../../components';

const Footer = () => {
  return (
    <div className='creatic__footer'>
      <div className="creatic__footer-ctaContainer">
        <div className="creatic__footer-ctaContainer_cta">
          <Cta title={<h2>GET IN <span className='main-word'>TOUCH</span></h2>} text={<p>Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit amet,  Neque porro elit NeDque porro</p>}/>
          <ContactItem />
        </div>
        <div className="creatic__footer-ctaContainer_inputCard">
          <InputCard />
        </div>
      </div>
      <div className="creatic__footer-infoContainer">
        <div className="creatic__footer-infoContainer_logo">
          <img src="" alt="" />
        </div>
        <div className="creatic__footer-infoContainer_links">
          <ul>

          </ul>
        </div>
        <div className="creatic__footer-infoContainer_text">
          <p></p>
        </div>
        <div className="creatic__gooter-infoContainer_icons">

        </div>
      </div>
      <div className="creatic__footer-copyright">
        <p></p>
      </div>
    </div>
  )
}

export default Footer;
