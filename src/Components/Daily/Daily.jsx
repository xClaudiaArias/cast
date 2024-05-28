import React from 'react'
import './Daily.css'


const Daily = ({forecast}) => {
    console.log(forecast.list, " ->i am forecast")

    const toFahrenheit = (temp) => {
        const fah = (temp - 273.15) * 1.8 + 32

        return Math.floor(fah)
    }

    return (
        <div className='daily'>
            <h1>Forecast (every 3 hours)</h1>
            <ul>
                {
                    forecast.list.splice(0,12).map((w, i) => (
                        <li key={i}>
                            <p>{w.dt_txt.split(' ')[1].slice(0,5)}</p>
                            <div>
                                <img src={`https://openweathermap.org/img/wn/${w.weather[0].icon}@2x.png`} alt={w.weather.description} />
                            </div>
                            <p className="deg"><strong>{toFahrenheit(w.main.temp)}°</strong></p>
                        </li>
                    ))
                }
                {/* <li>
                    <p>12:00PM</p>
                    <div><img src="https://static.vecteezy.com/system/resources/previews/009/304/897/non_2x/sun-icon-set-clipart-design-illustration-free-png.png" alt="" width="50px" height="50px"/></div>
                    <p className="deg"><strong>89°</strong></p>
                </li>
                <li>
                    <p>1:00PM</p>
                    <div><img src="https://static.vecteezy.com/system/resources/previews/009/304/897/non_2x/sun-icon-set-clipart-design-illustration-free-png.png" alt="" width="50px" height="50px"/></div>
                    <p className="deg"><strong>92°</strong></p>
                </li>
                <li>
                    <p>2:00PM</p>
                    <div><img src="https://static.vecteezy.com/system/resources/previews/009/304/897/non_2x/sun-icon-set-clipart-design-illustration-free-png.png" alt="" width="50px" height="50px"/></div>
                    <p className="deg"><strong>91°</strong></p>
                </li>
                <li>
                    <p>3:00PM</p>
                    <div><img src="https://static.vecteezy.com/system/resources/previews/009/304/897/non_2x/sun-icon-set-clipart-design-illustration-free-png.png" alt="" width="50px" height="50px"/></div>
                    <p className="deg"><strong>89°</strong></p>
                </li>
                <li>
                    <p>4:00PM</p>
                    <div><img src="https://static.vecteezy.com/system/resources/previews/009/304/897/non_2x/sun-icon-set-clipart-design-illustration-free-png.png" alt="" width="50px" height="50px"/></div>
                    <p className="deg"><strong>88°</strong></p>
                </li> */}
            </ul>
        </div>
    )
}

export default Daily