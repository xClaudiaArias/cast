import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const WeatherContext = createContext(null);

const WeatherContextProvider = (props) => {
    const [weather, setWeather] = useState();
    const [forecast, setForecast] = useState(null);
    const [city, setCity] = useState('');
    const [dummyData, setDummyData] = useState()
    const [dummyForecast, setDummyForecast] = useState()

    useEffect(() => {
        async function fetchData() {
            try {
                const dummyRes = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=brooklyn&appid=eb5bf5cf252dcc79c75fe1ddbad6ceb3`)
                const dummyRes2 = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=brooklyn&appid=eb5bf5cf252dcc79c75fe1ddbad6ceb3`)
                setDummyData(dummyRes.data)
                setDummyForecast(dummyRes2.data)
            } catch (err) {
                console.log("Failed to get data: ", err.message)
            }
        }
        fetchData();
    }, [])

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=eb5bf5cf252dcc79c75fe1ddbad6ceb3`);
                const res2 = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=eb5bf5cf252dcc79c75fe1ddbad6ceb3`);
                setWeather(res.data);
                setForecast(res2.data);
                console.log(JSON.stringify(res.data))
            } catch (err) {
                console.log("Failed to get data: ", err.message)
            }
        }
        fetchData();
    }, [city])




    const contextValue = {weather, setCity, forecast, dummyData, dummyForecast}

    return (
        <WeatherContext.Provider value={contextValue}>
            {props.children}
        </WeatherContext.Provider>
    )
}

export default WeatherContextProvider