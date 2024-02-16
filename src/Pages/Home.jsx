import React from 'react'
import './CSS/styles.css'
import MainWeather from '../Components/MainWeather/MainWeather'
import Visibility from '../Components/Visibility/Visibility'
import Humidity from '../Components/Humidity/Humidity'
import Pressure from '../Components/Pressure/Pressure'
import Wind from '../Components/Wind/Wind'
import Daily from '../Components/Daily/Daily'

const Home = () => {
    return (
        <div className='home'>
            <div className="main-w">
                <MainWeather />
            </div>

            <div className="weather-descriptions">
                <Visibility />
                <Humidity />
                <Pressure />
                <Wind />
                <Daily />
            </div>
        </div>
    )
}

export default Home