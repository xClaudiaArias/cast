import React, { useState } from 'react'
import "./SearchBar.css"
import search_icon from '../../Assets/search-icon.png'

const handleSubmit = (city, country) => {

    alert("hello", city, country)

}

const SearchBar = () => {
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")

    return (
        <div className='search-bar'>
            <form action="" method="post">
                <img className="search-icon" src={search_icon} alt="search icon" />
                <input onChange={(e) => setCity(e.target.value)} type="text" name="city" id="city" placeholder="City"/>
                <input onChange={(e) => setCountry(e.target.value)} type="text" name="country" id="country" placeholder="Country"/>
                <button onClick={() => handleSubmit(city, country)}>Search</button>
            </form>
        </div>
    )
}

export default SearchBar