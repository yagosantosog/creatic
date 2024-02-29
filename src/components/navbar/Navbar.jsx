import React from 'react';
import './navbar.css';
import search from '../../assets/magnify.svg';
import logo from '../../assets/logo.svg';

const Navbar = () => {
  return (
    <div className='creatic__navbar'>
      <div className="creatic__navbar-logo">
        <div className="creatic__navbar-logo_image">
          <img src={logo} alt="logo" />
        </div>
        <div className="creatic__navbar-logo_text">
        CREATIVE AGENCY
        </div>
      </div>
      <div className="creatic__navbar-links">

      </div>
      <div className="creatic__navbar-search_image">
        <img src={search} alt="magnify" />
      </div>
      
    </div>
  )
}

export default Navbar
