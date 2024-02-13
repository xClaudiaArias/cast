import React from 'react'
import "./SearchBar.css"
import search_icon from '../../Assets/search-icon.png'

const SearchBar = () => {
    return (
        <div className='search-bar'>
            <form action="" method="post">
                <img className="search-icon" src={search_icon} alt="" />
                <input type="text" name="city" id="city" placeholder="City"/>
                <input type="text" name="country" id="country" placeholder="Country"/>
                <button>Search</button>
            </form>
        </div>
    )
}

export default SearchBar