import React from 'react';
import './brands.css';
import { Brand } from '../../components';
import group from '../../assets/Group.svg';
import settings from '../../assets/settings.svg';
import groupStars from '../../assets/groupStars.svg';
import vector from '../..//assets/vector.svg';

const Brands = () => {
  return (
    <section className='creatic__brands'>
      
        <div className="wrapper creatic__brands-container">
            <Brand src={group} alt='group' title='50+' text='Team members'/>
            <Brand src={settings} alt='group' title='200+' text='Project done'/>
            <Brand src={groupStars} alt='group' title='500+' text='Happy customers'/>
            <Brand src={vector} alt='group' title='75+' text='Award Winning '/>
        </div>
    </section>
  )
}

export default Brands
