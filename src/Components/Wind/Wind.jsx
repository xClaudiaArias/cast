import React from 'react'
import './Wind.css'

const Wind = (props) => {
    const {weather} = props
    return (
        <div className='wind'>
            <p>Wind</p>
            <p className='wind-stats'>
                <p><span><strong>Speed:</strong> </span> {weather.wind.speed}</p>
                <p><span><strong>Deg:</strong> </span> {weather.wind.deg}</p>
                <p><span><strong>Gust:</strong> </span> {weather.wind.gust}</p>
            </p>
        </div>
    )
}

export default Wind