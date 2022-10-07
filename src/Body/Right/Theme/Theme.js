import React from 'react'
import Grid from '../Right-list/Grid'
import {VscBellDot} from 'react-icons/vsc'
import {BiHome} from 'react-icons/bi'
import {RiDeleteBinLine} from 'react-icons/ri'
import {MdWindow} from 'react-icons/md'
import {GiHamburgerMenu} from 'react-icons/gi'
import Color from '../Color/Color'
import './Theme.css'

const Theme = () => {
  return (
    <div className='theme'>

        <div className='theme__heading'>
            <div className='theme__heading-title'> 
            <div className='theme__heading-title-text'>
              Setting-theme
                </div>
            </div>
            <div className='theme__heading-logos'> 
            <ul className='theme__heading-l1'>
              <li><h2><VscBellDot /></h2></li>
              <li><h2><BiHome/></h2></li>
            </ul>
            </div>
        </div>  
        
      <div className="theme__area">
        <Color />
      </div>
        
       <div className="theme__footer">
        <button className='theme__footer-btn'>
          <div className="btn-text">

          Save Changes
          </div>
          </button>
        
       </div>
    </div>
  )
}

export default Theme