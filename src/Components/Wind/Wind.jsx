import React from 'react'
import './Wind.css'

const Wind = (props) => {
    const {weather} = props
    console.log(weather, " ---> wind")
    return (
        <div className='wind'>
            <p>Wind</p>
            <div className='wind-stats'>
            { weather.wind.speed ? <p><span><strong>Speed:</strong> </span> {weather.wind.speed}</p>: <p><span><strong>Speed:</strong> </span> 0 </p>}
            { weather.wind.deg ? <p><span><strong>Deg:</strong> </span> {weather.wind.deg}</p>: <p><span><strong>Speed:</strong> </span> 0 </p>}
            { weather.wind.gust ? <p><span><strong>Gust:</strong> </span> {weather.wind.gust}</p>: <p><span><strong>Speed:</strong> </span> 0</p>}
                {/* <p><span><strong>Speed:</strong> </span> {weather.wind.speed}</p>
                <p><span><strong>Deg:</strong> </span> {weather.wind.deg}</p>
                <p><span><strong>Gust:</strong> </span> {weather.wind.gust}</p> */}
            </div>
        </div>
    )
}

export default Wind