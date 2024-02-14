import React from 'react'
import './MainWeather.css'


const MainWeather = () => {
    return (
        <div className='main-weather'>
            <p className='location'><strong>Zocca</strong>, Italy</p>
            <img src="https://static.vecteezy.com/system/resources/previews/009/304/897/non_2x/sun-icon-set-clipart-design-illustration-free-png.png" alt="" width="150px" height="150px"/>
            <p className='main-description'>Sunny</p>
            <p className='temp'>88°</p>
            <p className='description'>Sunny and clear skies.</p>
            <hr />
            <div className="min-max">
                <p><strong>Min:</strong> <span>87°</span></p>
                <p><strong>Max:</strong> <span>92°</span></p>
            </div>
        </div>
    )
}

export default MainWeather