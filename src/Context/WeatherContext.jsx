import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const WeatherContext = createContext(null);

const WeatherContextProvider = (props) => {
    const [weather, setWeather] = useState();

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=bronx&appid=eb5bf5cf252dcc79c75fe1ddbad6ceb3');
                setWeather(res.data);
                console.log(JSON.stringify(res.data))
            } catch (err) {
                console.log("Failed to get data: ", err.message)
            }
        }
        fetchData();
    }, [])

    console.log(weather, " -->> weather")
    const contextValue = {weather}

    return (
        <WeatherContext.Provider value={contextValue}>
            {props.children}
        </WeatherContext.Provider>
    )
}

export default WeatherContextProvider