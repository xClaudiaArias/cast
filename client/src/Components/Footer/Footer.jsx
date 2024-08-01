import React from 'react';
import './Footer.css';
import { useLocation, Link } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
    const path = location.pathname;

    return (
        <div className='footer'>
            <div className='created'>
                Claudia Arias 2024
            </div>

            <div className="footer-nav">
                <ul>
                    <li><Link className={path === "/" ? "active"  : ""} to="/">Home</Link></li>
                    <li><Link className={path === "/about" ? "active" : ""} to="/about">About</Link></li>
                    <li><Link className={path === "/contact" ? "active" : ""} to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;
