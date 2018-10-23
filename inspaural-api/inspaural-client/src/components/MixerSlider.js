import React from 'react'
import Slider from 'react-rangeslider'

const MixerSlider = props => {
    return (
      <Slider
          min={0}
          max={100}
          value={props.track.volume}
          orientation="vertical"
          onChange={value => props.handleChange(value, props.track.quoteNum)}
        />
    )
}

export default MixerSlider
