import React from 'react'
import './Humidity.css'
import WaterIcon from '@mui/icons-material/Water';


const Humidity = (props) => {
    const {weather, dummyData} = props

    return (
        <div className='humidity'>
            <p><WaterIcon/>Humidity</p>
            { weather ? <p className='hum-num'>{weather.main.humidity}%</p> : <p className='hum-num'>{dummyData.main.humidity}%</p>}
        </div>
    )
}

export default Humidity