import React from 'react'
import './Daily.css'


const Daily = ({forecast, dummyForecast}) => {

    console.log(forecast, dummyForecast)

    const toFahrenheit = (temp) => {
        const fah = (temp - 273.15) * 1.8 + 32

        return Math.floor(fah)
    }

    return (
        <div className='daily'>
            <h1>Forecast (every 3 hours)</h1>
            <ul>
                {
                    forecast ? 
                    forecast.list.splice(0,12).map((w, i) => (
                        <li key={i}>
                            <p>{w.dt_txt.split(' ')[1].slice(0,5)}</p>
                            <div>
                                <img src={`https://openweathermap.org/img/wn/${w.weather[0].icon}@2x.png`} alt={w.weather.description} />
                            </div>
                            <p className="deg"><strong>{toFahrenheit(w.main.temp)}°f</strong></p>
                        </li>
                    ))
                    
                    :
                    
                    dummyForecast.list.splice(0,12).map((w, i) => (
                        <li key={i}>
                            <p>{w.dt_txt.split(' ')[1].slice(0,5)}</p>
                            <div>
                                <img src={`https://openweathermap.org/img/wn/${w.weather[0].icon}@2x.png`} alt={w.weather.description} />
                            </div>
                            <p className="deg"><strong>{toFahrenheit(w.main.temp)}°f</strong></p>
                        </li>
                    ))
                    
                }
            </ul>
        </div>
    )
}

export default Daily