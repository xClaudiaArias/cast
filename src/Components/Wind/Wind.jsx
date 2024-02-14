import React from 'react'
import './Wind.css'

const Wind = () => {
    return (
        <div className='wind'>
            <p>Wind</p>
            <p className='wind-stats'>
                <p><span><strong>Speed:</strong> </span> 0.62</p>
                <p><span><strong>Deg:</strong> </span> 0.62</p>
                <p><span><strong>Gust:</strong> </span> 0.62</p>
            </p>
        </div>
    )
}

export default Wind