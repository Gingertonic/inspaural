import React, { Component } from 'react'
import Sound from 'react-sound'
import Ambience from '../components/Ambience'

class Ambiences extends Component {

  state = {
    audioUrl: "",
    playStatus: "STOPPED"
  }

  handleOnClick = audioUrl => {
    if (audioUrl === this.state.audioUrl) {
      this.setState({
        ...this.state,
        playStatus: "STOPPED"
      })
    } else {
      this.setState({
        audioUrl: audioUrl,
        playStatus: "PLAYING"
      })
    }
  }

  render(){
    const renderAmbiences = this.props.ambiences.map(ambi => <Ambience key={ambi.id} ambience={ambi} handleOnClick={this.handleOnClick}/>)

    return (
      <div>
        <p> Ambiences </p>
        {renderAmbiences}
        <Sound url={this.state.audioUrl} autoload="true" loop="true" playStatus={this.state.playStatus}/>
      </div>
    )
  }
}

export default Ambiences
