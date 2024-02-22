import React from 'react'
import './Pressure.css'


const Pressure = (props) => {
    const {weather} = props

    console.log(weather, " ----> pressure")
    return (
        <div className='pressure'>
            <p>Pressure</p>
            { weather.main.pressure ? <p className='pres-num'>{weather.main.pressure}</p> : <p>"Loading..."</p>}
            {/* <p className='pres-num'>{weather.main.pressure}</p> */}
        </div>
    )
}

export default Pressure