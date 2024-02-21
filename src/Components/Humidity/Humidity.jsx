import React from 'react'
import './Humidity.css'


const Humidity = (props) => {
    const {weather} = props

    return (
        <div className='humidity'>
            <p>Humidity</p>
            <p className='hum-num'>{weather.main.humidity} </p>
        </div>
    )
}

export default Humidity