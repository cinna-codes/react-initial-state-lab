import React, { Component } from 'react'
export default class ImageSlider extends Component {

    constructor() {
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }

    render() {
        return (
            <div id="imageslider id">
            I am on slide {this.state.currentSlideIndex}
            </div>
        )
    }
}
