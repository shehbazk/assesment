import React from 'react'
import images from '../constants/images'
import './Header.css'
const Header = () => {
  return (<>
      <div className='header'>
    <img src={images.image1} className = 'header__image1' />
    <div className='header__title'>
      <p className='header__title-text'>
      Company Name L.L.C
        
      </p>
    <img src={images.image2} className='header__image2' />
    </div>
      </div>
  </>
  )
}

export default Header