import React from 'react'
import './Pressure.css'


const Pressure = (props) => {

    const {weather} = props

    return (
        <div className='pressure'>
            <p>Pressure</p>
            <p className='pres-num'>{weather.main.pressure}</p>
        </div>
    )
}

export default Pressure