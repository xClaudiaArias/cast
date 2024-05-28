import React from 'react'
import './Visibility.css'


const Visibility = (props) => {
    const {weather} = props
    console.log(weather, " ---> visibility")
    return (
        <div className='visibility'>
            <p>Visibility</p>
            { weather.visibility ? <p className='vis-num'>{weather.visibility}</p> : <p>"Loading..."</p>}
        </div>
    )
}

export default Visibility