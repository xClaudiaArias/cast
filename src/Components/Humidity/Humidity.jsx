import React from 'react'
import './Humidity.css'


const Humidity = (props) => {
    const {weather} = props
    console.log(weather, " ---> humidity")
    return (
        <div className='humidity'>
            <p>Humidity</p>
            { weather.main.humidity ? <p className='hum-num'>{weather.main.humidity}</p> : <p>"Loading..."</p>}
            {/* <p className='hum-num'>{weather.main.humidity} </p> */}
        </div>
    )
}

export default Humidity