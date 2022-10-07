import React from 'react'
import { SketchPicker } from 'react-color'
import './Color.css'

const Color = () => {
  return (
    <>
      <div className='general'>
        General
      </div>
      <div className='color'>

        <form action="submit">
          <ul className='color__list'>

            <li className='color-li'>
              <div className='color-li-text'>
                Title
              </div>
              <input className='color-li-ip' type="text" placeholder="Company name L.L.C" />
            </li>

            <li className='color-li'>
              <div className='color-li-text'>
                Title color
              </div>
              <div className="color-li-input">

              <input type='color' />
              <div className='select'>Select color</div>
              </div>

            </li>
            <li className='color-li'>
              <div className='color-li-text'>
                Menu Color
              </div>
              <div className="color-li-input">

              <input  type='color' />
              <div className='select'>Select color</div>
              </div>
            </li>
            <li className='color-li'>
              <div className='color-li-text'>
                Menu Text Color
              </div>
              <div className="color-li-input">

              <input type='color' />
              <div className='select'>Select color</div>

              </div>
            </li>
          </ul>
          
        <img className='colorwheel' src="https://www.nicepng.com/png/full/226-2264590_large-color-wheel-color-wheel-png.png" alt="Color Wheel" />

        </form>
      </div>
    </>
  )
}

export default Color