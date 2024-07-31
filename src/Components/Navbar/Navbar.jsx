import React from 'react'
import "./Navbar.css"
import ThermostatIcon from '@mui/icons-material/Thermostat';
import SearchBar from '../SearchBar/SearchBar'
import { useLocation } from 'react-router-dom'

const Navbar = () => {
    let location = useLocation();

    console.log(location.pathname, " location")

    return (
        <div className="navbar">
            <div className="logo">
                <ThermostatIcon style={{fill: "#6eb6ff"}}/>
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