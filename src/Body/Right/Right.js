import React from 'react'
import './Right.css'
import Grid from './Right-list/Grid.js'
import {VscBellDot} from 'react-icons/vsc'
import {BiHome} from 'react-icons/bi'
import {RiDeleteBinLine} from 'react-icons/ri'
import {MdWindow} from 'react-icons/md'
import {GiHamburgerMenu} from 'react-icons/gi'

const Right = () => {
  return (
    <div className='right'>
        <div className='right__heading'>
            <div className='right__heading-title'> 
            <div className='right__heading-title-text'>
                Collections
                </div>
            </div>
            <div className='right__heading-logos'> 
            <ul className='right__heading-l1'>
              <li><h2><VscBellDot /></h2></li>
              <li><h2><BiHome/></h2></li>
            </ul>
            <ul className='right__heading-l2'>
              <li><RiDeleteBinLine /></li>
              <li><MdWindow /></li>
              <li><GiHamburgerMenu /></li>
            </ul>
            </div>
        </div>
        <Grid />
        <div className="right__footer">
          <div className='right__footer-link'>Link</div>
          <div ><input type="text" className='right__footer-ip' /></div>
          <button className='right__footer-btn'>
            <div className='btn-text'>
              Upload
              </div>
              </button>
        </div>
    </div>
  )
}

export default Right