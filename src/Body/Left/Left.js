import React from 'react'
import List from '../Left/Left-list-element/List'
import './Left.css'
import { AiOutlineSearch } from 'react-icons/ai'
import {GiTigerHead} from 'react-icons/gi'

const Left = () => {
    return (
        <div className='left'>
            <div className='search'>
                <p className='search__content'>
                    <div className='search__box'>
                        <span className='search__icon'>
                            <AiOutlineSearch />
                        </span>
                        <div className='search__text'>
                            Search
                        </div>
                    </div>
                </p>
            </div>
            <List title="Collection" image=""/>
            <List title="Overview" image=""/>
            <List title="Status" image=""/>
            <List title="Setting" image=""/>
            <List title="Profile" image=""/>

            <div className="left__footer">
               <h2> <GiTigerHead /></h2>
                <h3>Metamask wallet</h3>
            </div>
            <div className="left__logout">
                <button>
                    <div className='left__logout-btn'>Logout</div>
                </button>
            </div>

        </div>

    )
}

export default Left