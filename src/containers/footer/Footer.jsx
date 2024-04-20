import React from 'react';
import './footer.css';
import { ContactItem, Cta, InputCard, Logo } from '../../components';
import local from '../../assets/local.svg';
import phone from '../../assets/phone.svg';
import email from '../../assets/gmail.svg';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import whatsapp from '../../assets/whatsapp.svg';
import linkedin from '../../assets/linkedin.svg';
import pinterest from '../../assets/pinterest.svg';
import twitter from '../../assets/twitter.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer className='creatic__footer' id='contact'>
      <div className="animation wrapper creatic__footer-ctaContainer">
        <div className="creatic__footer-ctaContainer_cta">
          <Cta title={<h2>GET IN <span className='main-word'>TOUCH</span></h2>} text={<p>Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit amet,  Neque porro elit NeDque porro</p>}/>
          <div className="creatic__footer-ctaContainer_cta-contactItens">
          <ContactItem image={local} alt='local icon' title='Office Address' subtitle='98, Arca St, PR City, 33414 , Indonesia'/>

          <ContactItem image={phone} alt='phone icon' title='Call Us' subtitle='(+BK) 123 456 7891'/>

          <ContactItem image={email} alt='email icon' title='Mail Us' subtitle='info@creaticagency.com'/>
          </div>
        </div>
        <div className="creatic__footer-ctaContainer_inputCard">
          <InputCard />
        </div>
      </div>
      <div className="animation creatic__footer-infoContainer">
        <div className="creatic__footer-infoContainer_logo">
          <Logo />
          <div className="color-bar"></div>
        </div>
        <nav className="creatic__footer-infoContainer_links">
          <ul>
            <li><Link to='#home'>Home</Link></li>
            <li><Link to='#about'>About Us</Link></li>
            <li><Link to='#services'>Services</Link></li>
            <li><Link to='#portifolio'>Portifolio</Link></li>
            <li><Link to='#pages'>Testimonials</Link></li>
            <li><Link to='#contact'>Contact Us</Link></li>
          </ul>
        </nav>
        <div className="creatic__footer-infoContainer_text">
          <p>Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit amet,  Neque porro elit NeDque   </p>
        </div>
        <div className="creatic__gooter-infoContainer_icons">
            <img src={facebook} alt="facebook icon." />
            <img src={instagram} alt="instagram icon." />
            <img src={whatsapp} alt="whatsapp icon." />
            <img src={linkedin} alt="linkedin icon." />
            <img src={pinterest} alt="pinterest icon." />
            <img src={twitter} alt="twitter icon." />
        </div>
      </div>
        <div className="wrapper creatic__footer-copyright">
          <p>Copyright © 2003-{year} Creatic Agency All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer;
