import React from 'react'
import SliderBar from './SliderBar'

const Slider = ({ bar, label }) => {
    console.log('yays')
    return (
        <div>
               (<SliderBar bar={bar}></SliderBar>)
        </div>
    )
}

export default Slider
