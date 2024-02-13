import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <div className='footer'>
            <div className='created'>
                Created by Claudia Arias 2024
            </div>

            <div className="footer-nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer