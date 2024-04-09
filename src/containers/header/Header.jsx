import React, { useState } from 'react';
import './header.css';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import Logo from '../../components/logo/Logo';
import { Link } from 'react-router-dom';


function Menu() {
  return (
    <nav>
    <ul>
      <li><Link to='#home'>Home</Link></li>
      <li><Link to='#about'>About Us</Link></li>
      <li><Link to='#services'>Services</Link></li>
      <li><Link to='#portifolio'>Portifolio</Link></li>
      <li><Link to='#pages'>Testimonials</Link></li>
      <li><Link to='#contact'>Contact Us</Link></li>
    </ul>
    </nav>
  )
}

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header className='creatic__header'>
      <div className="wrapper creatic__header-container">
      <div className="creatic__header-logo">
        <Link to="#top"><Logo /></Link>
      </div>
      <div className="creatic__navbar-links">
        <Menu />
      </div>
      <div className="creatic__navbar-links_menu">
        {
          toggleMenu 
          ?
          <RiCloseLine size={27} color='#6D95FC' onClick={() => setToggleMenu(false)}/>
          :
          <RiMenu3Line size={27} color='#6D95FC' onClick={() => setToggleMenu(true)}/>
        }
        { toggleMenu && (
            <div onClick={() => setToggleMenu(false)} className="creatic__navbar-container_menu scale-up-tr">
              <Menu />
            </div>
        )}
      </div>
      </div>
    </header>
  )
}

export default Header
