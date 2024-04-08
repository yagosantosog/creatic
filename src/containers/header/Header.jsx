import React, { useState } from 'react';
import './header.css';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import Logo from '../../components/logo/Logo';


function Menu() {
  return (
    <>
    <ul>
      <li><a href='#home'>Home</a></li>
      <li><a href='#about'>About Us</a></li>
      <li><a href='#services'>Services</a></li>
      <li><a href='#portifolio'>Portifolio</a></li>
      <li><a href='#pages'>Testimonials</a></li>
      <li><a href='#contact'>Contact Us</a></li>
    </ul>
    </>
  )
}

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header className='creatic__header'>
      <div className="wrapper creatic__header-container">
      <div className="creatic__header-logo">
        <a href="#home"><Logo /></a>
      </div>
      <div className="creatic__navbar-links">
        <Menu />
      </div>
      <nav className="creatic__navbar-links_menu">
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
      </nav>
      </div>
    </header>
  )
}

export default Header
