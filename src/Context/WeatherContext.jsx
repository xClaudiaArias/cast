import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const WeatherContext = createContext(null);

const WeatherContextProvider = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get('http://localhost:8000/product');
                setProducts(res.data)
            } catch (err) {
                console.log("Failed to get data: ", err.message)
            }
        }
        fetchData();
    }, [])

    const contextValue = {
        products: products
    }

    return (
        <WeatherContext.Provider value={contextValue}>
            {props.children}
        </WeatherContext.Provider>
    )
}

export default WeatherContextProvider