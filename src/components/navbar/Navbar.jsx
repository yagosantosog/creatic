import React, { useState } from 'react';
import './navbar.css';
import search from '../../assets/magnify.svg';
import logo from '../../assets/logo.svg';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';


function Menu() {
  return (
    <>
    <ul>
      <li>Home</li>
      <li>About Us</li>
      <li>Services</li>
      <li>Portifolio</li>
      <li>Pages</li>
      <li>Contact Us</li>
    </ul>
    <div className="creatic__navbar-links_btn">
    <img src={search} alt="magnify" />
    </div>
    </>
  )
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='creatic__navbar'>
      <div className="creatic__navbar-container">
      <div className="creatic__navbar-logo">
        <div className="creatic__navbar-logo_image">
          <img src={logo} alt="logo" />
        </div>
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
             <div className="creatic__navbar-container_menu scale-up-tr">
                <Menu />
             </div>
          )}
      </div>
      </div>
    </div>
  )
}

export default Navbar
