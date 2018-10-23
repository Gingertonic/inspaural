import React, { Component } from 'react'
import PlaybackTrack from './PlaybackTrack'
import Sound from 'react-sound'

const Playback = props => {
  const renderTracks = props.quotes.map(quote => <PlaybackTrack key={quote.id} track={quote} />)
  // const renderTracks = props.quotes.map(quote => <h1>{quote.audioUrl}</h1>)

  return(
    <React.Fragment>
      {renderTracks}
      <PlaybackTrack track={props.ambience}/>
    </React.Fragment>
  )
}

export default Playback
