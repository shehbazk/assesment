import React , {useState} from 'react'
import './Settings.css'
import {MdWindow} from 'react-icons/md'
import {useNavigate} from 'react-router-dom'

const Settings = (props) => {
  
  const navigate= useNavigate();
    const [toggle, setToggle] = useState(false);
    const goToTheme=()=>{
      navigate('/theme')
    }
  return (<>

      <button className='settings__btn' onClick={()=> setToggle(!toggle)} >
    <div className='list'>
      <div className="list__section">
      <div className="list__icon">
       <h1><MdWindow /></h1> 
      </div>
        <div className='list__text'>
          {props.title} 
        </div>
        <img src={props.image} alt="" srcset="" />
      </div>
        </div>
      </button>
      {toggle && <div className='collapsable'>
          <ul className='collapsable__list'>

            <li className='collapsable-li'> <button onClick={()=>goToTheme()} >Theme</button></li>
            <li className='collapsable-li'> <button>Plan</button></li>
          <li className='collapsable-li'> <button>Notifications</button></li>
          </ul></div>}
      </>
  )
}

export default Settings