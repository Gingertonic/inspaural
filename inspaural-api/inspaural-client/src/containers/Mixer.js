import React, { Component } from 'react'
import Slider from 'react-rangeslider'

class Mixer extends Component {

  render(){
    return (
      <Slider
          min={0}
          max={100}
          value={60}
          onChangeStart={this.handleChangeStart}
          onChange={this.handleChange}
          onChangeComplete={this.handleChangeComplete}
        />
    )
  }
}

export default Mixer
