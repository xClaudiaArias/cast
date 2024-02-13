import React from 'react'
import "./Navbar.css"
import cloud_icon from '../../Assets/cloud-icon.png'
import SearchBar from '../SearchBar/SearchBar'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img className='cloud-icon' src={cloud_icon} alt="Cloud Icon" />
                <p>CAST</p>
            </div>


            <div className='search'>
                <SearchBar />
            </div>
        </div>
    )
}

export default Navbar