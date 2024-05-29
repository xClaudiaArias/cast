import React from 'react'
import './Visibility.css'

const Visibility = (props) => {
    const { weather = {}, dummyData } = props

    return (
        <div className='visibility'>
            <p>Visibility</p>
            { weather.visibility !== undefined ? (
                <p className='vis-num'>{weather.visibility}</p>
            ) : (
                <p className='vis-num'>{dummyData.visibility !== undefined ? dummyData.visibility : 'N/A'}</p>
            )}
        </div>
    )
}

export default Visibility
