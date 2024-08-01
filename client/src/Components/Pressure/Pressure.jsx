import React from 'react'
import './Pressure.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


const Pressure = (props) => {
    const {weather, dummyData} = props

    const pres = (press) => {
        let number = press / 33.864
        let result = parseFloat(number.toFixed(2))

        return result
    }

    return (
        <div className='pressure'>
            <p><ArrowDownwardIcon /> Pressure</p>
            { weather ? <p className='pres-num'>{pres(weather.main.pressure)} <span>inHg</span></p> :  <p className='pres-num'>{pres(dummyData.main.pressure)} <span>inHg</span></p>}
        </div>
    )
}

export default Pressure