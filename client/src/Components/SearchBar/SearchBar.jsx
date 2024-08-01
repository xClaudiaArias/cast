import React, { useContext, useState } from 'react'
import "./SearchBar.css"
import search_icon from '../../Assets/search-icon.png'
import { WeatherContext } from '../../Context/WeatherContext'

const SearchBar = () => {
    const { setCity } = useContext(WeatherContext);
    const [cityInput, setCityInput] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setCity(cityInput)

    }

    return (
        <div className='search-bar'>
            <form method="post">
                <img className="search-icon" src={search_icon} alt="search icon" />
                <input onChange={(e) => setCityInput(e.target.value)} type="text" name="city" placeholder="City"/>
                <button onClick={handleSubmit} >Search</button>
            </form>
        </div>
    )
}

export default SearchBar