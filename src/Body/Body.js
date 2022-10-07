import React from 'react'
import Left from './Left/Left'
import Right from './Right/Right'
import Theme from './Right/Theme/Theme'
import './Body.css'

import{BrowserRouter, Routes, Route} from 'react-router-dom'

const Body = () => {
  return (<>


  <div className='body'>
    <BrowserRouter>
  <Left />

    <Routes>
<Route path='/' element={<Right />}/>
<Route path = "/theme" element={<Theme />}/>
    </Routes>
    
    
    </BrowserRouter>
    
  
  </div>
  </>
  )
}

export default Body