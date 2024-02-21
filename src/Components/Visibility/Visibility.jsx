import React from 'react'
import './Visibility.css'


const Visibility = (props) => {
    const {weather} = props

    return (
        <div className='visibility'>
            <p>Visibility</p>
            <p className='vis-num'>{weather.visibility}</p>
        </div>
    )
}

export default Visibility