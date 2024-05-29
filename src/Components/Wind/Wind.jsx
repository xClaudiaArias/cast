import React from 'react'
import './Wind.css'

const Wind = (props) => {
    const {weather, dummyData} = props

    return (
        <div className='wind'>
            <p>Wind</p>
            <div className='wind-stats'>
            { weather ? <p><span><strong>Speed:</strong> </span> {weather.wind.speed}</p>: <p><span><strong>Speed:</strong> </span> {dummyData.wind.speed} </p>}
            { weather ? <p><span><strong>Deg:</strong> </span> {weather.wind.deg}</p>: <p><span><strong>Speed:</strong> </span> {dummyData.wind.deg} </p>}
            { weather ? <p><span><strong>Gust:</strong> </span> {weather.wind.gust}</p>: <p><span><strong>Speed:</strong> </span> {dummyData.wind.gust}</p>}
            </div>
        </div>
    )
}

export default Wind