import React from 'react'
import PlaybackTrack from './PlaybackTrack'

const Playback = props => {
  return(
    <React.Fragment>
      <PlaybackTrack track={props.quotes[0]}/>
      <PlaybackTrack track={props.quotes[1]}/>
      <PlaybackTrack track={props.quotes[2]}/>
      <PlaybackTrack track={props.quotes[3]}/>
      <PlaybackTrack track={props.ambience}/>
    </React.Fragment>
  )
}

export default Playback
