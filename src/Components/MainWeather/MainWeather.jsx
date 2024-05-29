import React from 'react'
import './MainWeather.css'

const MainWeather = ({ weather, dummyData }) => {
    const toFahrenheit = (temp) => {
        const fah = (temp - 273.15) * 1.8 + 32
        return Math.floor(fah)
    }

    return (
        weather ? (
            <div className='main-weather'>
                <p className='location'><strong>{weather.name}</strong>, {weather.sys.country}</p>
                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" width="150px" height="150px"/>
                <p className='main-description'>{weather.weather[0].main}</p>
                <p className='temp'>{toFahrenheit(weather.main.temp)}°</p>
                <p className='description'>{weather.weather[0].description}</p>
                <hr />
                <div className="min-max">
                    <p><strong>Min:</strong> <span>{toFahrenheit(weather.main.temp_min)}°</span></p>
                    <p><strong>Max:</strong> <span>{toFahrenheit(weather.main.temp_max)}°</span></p>
                </div>
            </div>
        ) : (
            <div className='main-weather'>
                <p className='location'><strong>{dummyData.name}</strong>, {dummyData.sys.country}</p>
                <img src={`https://openweathermap.org/img/wn/${dummyData.weather[0].icon}@2x.png`} alt="" width="150px" height="150px"/>
                <p className='main-description'>{dummyData.weather[0].main}</p>
                <p className='temp'>{toFahrenheit(dummyData.main.temp)}°</p>
                <p className='description'>{dummyData.weather[0].description}</p>
                <hr />
                <div className="min-max">
                    <p><strong>Min:</strong> <span>{toFahrenheit(dummyData.main.temp_min)}°</span></p>
                    <p><strong>Max:</strong> <span>{toFahrenheit(dummyData.main.temp_max)}°</span></p>
                </div>
            </div>
        )
    )
}

export default MainWeather
