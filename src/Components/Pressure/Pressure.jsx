import React from 'react'
import './Pressure.css'


const Pressure = (props) => {
    const {weather, dummyData} = props

    return (
        <div className='pressure'>
            <p>Pressure</p>
            { weather ? <p className='pres-num'>{weather.main.pressure}</p> :  <p className='pres-num'>{dummyData.main.pressure}</p>}
        </div>
    )
}

export default Pressure