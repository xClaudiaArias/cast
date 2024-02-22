import React, { useContext } from 'react'
import './CSS/styles.css'
import MainWeather from '../Components/MainWeather/MainWeather.jsx'
import Visibility from '../Components/Visibility/Visibility.jsx'
import Humidity from '../Components/Humidity/Humidity.jsx'
import Pressure from '../Components/Pressure/Pressure.jsx'
import Wind from '../Components/Wind/Wind.jsx'
import Daily from '../Components/Daily/Daily.jsx'
import { WeatherContext } from '../Context/WeatherContext'

const Home = () => {
    const { weather } = useContext(WeatherContext)

    console.log(weather, " --> weather in home.jsx")
    
    return (
        <div className='home'>
            <div className="main-w">
                <MainWeather weather={weather}/>
            </div>

            <div className="weather-descriptions">
                <Visibility weather={weather}/>
                <Humidity weather={weather}/>
                <Pressure weather={weather}/>
                <Wind weather={weather}/>
                <Daily weather={weather}/>
            </div>
        </div>
    )
}

export default Home