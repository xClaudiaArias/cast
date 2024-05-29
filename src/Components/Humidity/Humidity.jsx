import React from 'react'
import './Humidity.css'


const Humidity = (props) => {
    const {weather, dummyData} = props

    return (
        <div className='humidity'>
            <p>Humidity</p>
            { weather ? <p className='hum-num'>{weather.main.humidity}</p> : <p className='hum-num'>{dummyData.main.humidity}</p>}
        </div>
    )
}

export default Humidity