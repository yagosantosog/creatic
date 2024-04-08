import React from 'react'
import './goBackButton.css'
import { useNavigate } from 'react-router-dom';

const GoBackButton = () => {
    const navigate = useNavigate();
  return (
    <>
      <button className='creatic__goBackButton' onClick={() => navigate(-1)}>Go Back</button>
    </>
  )
}

export default GoBackButton
