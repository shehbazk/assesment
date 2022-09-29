import React from 'react'
import './Grid.css'

const Grid = () => {
  return (
    <div className='grid' >
      <ul className='grid__list'>
        <li className="grid__list-li">
          <div className="grid__elem">
            <div className="grid__elem-upper">
              <img src="https://sbnri.com/blog/wp-content/uploads/2021/07/NRI-Property-In-India.jpg" alt="house" srcset="" />

            </div>
            <img src="https://www.freelogovector.com/wp-content/uploads/2017/06/02%20-%20PNG%20property%20copy.jpg" className='grid__elem-pic' alt="" srcset="" />
            <div className="grid__elem-lower">
              <p className='p1'>White Sands Parcel</p>
              <p className='p2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum et magni nulla placeat recusandae? Culpa eveniet accusamus nam enim neque.</p>
            </div>
          </div>
        </li>
        <li className="grid__list-li">
          <div className="grid__elem">
            <div className="grid__elem-upper">
              <img src="https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="house" srcset="" />

            </div>
            <img src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" className='grid__elem-pic' alt="" srcset="" />
            <div className="grid__elem-lower">
              <p className='p1'>White Sands Parcel</p>
              <p className='p2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum et magni nulla placeat recusandae? Culpa eveniet accusamus nam enim neque.</p>
            </div>
          </div>
        </li>
        <li className="grid__list-li">
          <div className="grid__elem">
            <div className="grid__elem-upper">
              <img src="https://images.unsplash.com/photo-1512359953714-f0c9a632ab85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1090&q=80" alt="house" srcset="" />

            </div>
            <img src="https://www.freelogovector.com/wp-content/uploads/2017/06/02%20-%20PNG%20property%20copy.jpg" className='grid__elem-pic' alt="" srcset="" />
            <div className="grid__elem-lower">
              <p className='p1'>White Sands Parcel</p>
              <p className='p2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum et magni nulla placeat recusandae? Culpa eveniet accusamus nam enim neque.</p>
            </div>
          </div>
        </li>
        <li className="grid__list-li">
          <div className="grid__elem">
            <img className='grid__elem-img' src="https://snipstock.com/assets/cdn/png/ef37bcb6c8063f6d3949eaf9e5444872.png" alt="" srcset="" />
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Grid;

