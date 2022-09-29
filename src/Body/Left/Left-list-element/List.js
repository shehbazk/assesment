import React from 'react'
import './List.css'
import {MdWindow} from 'react-icons/md'

const List = (props) => {
  return (
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
  )
}

export default List