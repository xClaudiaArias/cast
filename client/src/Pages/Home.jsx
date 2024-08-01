import React, { useContext } from 'react';
import './CSS/styles.css';
import MainWeather from '../Components/MainWeather/MainWeather.jsx';
import Visibility from '../Components/Visibility/Visibility.jsx';
import Humidity from '../Components/Humidity/Humidity.jsx';
import Pressure from '../Components/Pressure/Pressure.jsx';
import Wind from '../Components/Wind/Wind.jsx';
import Daily from '../Components/Daily/Daily.jsx';
import { WeatherContext } from '../Context/WeatherContext';

const Home = () => {
    const { weather, forecast, dummyData, dummyForecast } = useContext(WeatherContext);

    return (
        <div className='home'>
            <div className="main-w">
                {(weather || dummyData) && <MainWeather weather={weather} dummyData={dummyData} />}
            </div>

            <div className="weather-descriptions">
                {(weather || dummyData) && <Visibility weather={weather} dummyData={dummyData} />}
                {(weather || dummyData) && <Humidity weather={weather} dummyData={dummyData} />}
                {(weather || dummyData) && <Pressure weather={weather} dummyData={dummyData} />}
                {(weather || dummyData) && <Wind weather={weather} dummyData={dummyData} />}
                {(forecast || dummyForecast) && <Daily forecast={forecast} dummyForecast={dummyForecast} />}
            </div>
        </div>
    );
};

export default Home;
