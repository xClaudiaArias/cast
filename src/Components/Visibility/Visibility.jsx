import React from 'react'
import './Visibility.css'
import VisibilityIcon from '@mui/icons-material/Visibility';

const Visibility = (props) => {
    const { weather = {}, dummyData } = props

    const vis = (viss) => {
        let number = viss / 1609
        let result = parseFloat(number.toFixed(2))

        return result
    }

    return (
        <div className='visibility'>
            <p><VisibilityIcon/>Visibility</p>
            { weather.visibility !== undefined ? (
                <p className='vis-num'>{vis(weather.visibility)} <span>mi</span>mi</p>
            ) : (
                <p className='vis-num'>
                    {dummyData.visibility !== undefined ? (
                        <>
                        {vis(dummyData.visibility)}<span>mi</span>
                        </>
                    ) : 'N/A'}
                </p>
            )}
        </div>
    )
}

export default Visibility
