import React from 'react';
import './contactItem.css';

const ContactItem = ({image, alt, title, subtitle}) => {
  return (
    <div className='creatic__contactItem'>
      <div className="creatic__contacItem-image">
        <img src={image} alt={alt} />
      </div>
      <div className="creatic_contactItem_content">
        <p id='title'>{title}</p>
        <p id='subtitle'>{subtitle}</p>
      </div>
    </div>
  )
}

export default ContactItem
