import React, { Component } from 'react'
import Slider from 'react-rangeslider'

class Mixer extends Component {
  const renderQuoteSliders = this.props.tracks
  render(){
    return (
      {renderQuoteSliders}

    )
  }
}

export default Mixer
