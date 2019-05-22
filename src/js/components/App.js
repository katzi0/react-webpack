import React, { Component } from 'react'
import ReactDom from 'react-dom'
import '../../styles/styles.less'
import Slider from './Slider/Slider'

const bar = {
    percentage:95
}

class App extends Component {
    render() {
    <Slider bar={bar}></Slider>
    }
}

const wrapper = document.getElementById('appRoot')
wrapper ? ReactDom.render(<App/>, wrapper) : false
