import React from 'react'
import "./Navbar.css"
import cloud_icon from '../../Assets/cloud-icon.png'
import SearchBar from '../SearchBar/SearchBar'
import { useLocation } from 'react-router-dom'

const Navbar = () => {
    let location = useLocation();

    console.log(location.pathname, " location")

    return (
        <div className="navbar">
            <div className="logo">
                <img className='cloud-icon' src={cloud_icon} alt="Cloud Icon" />
                <p>CAST</p>
            </div>


            <div className='search'>
                {
                    (location.pathname === "/about" || location.pathname === "/contact") ? <></> : <SearchBar />
                }
            </div>
        </div>
    )
}

export default Navbar