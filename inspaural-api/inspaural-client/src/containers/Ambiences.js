import React, { Component } from 'react'
import Sound from 'react-sound'
import Ambience from '../components/Ambience'

class Ambiences extends Component {

  state = {
    audioUrl: "",
    playStatus: "STOPPED",
    volume: 40
  }

  handleOnClick = audioUrl => {
    if (this.state.audioUrl === audioUrl){
      if (this.state.playStatus === "PLAYING"){
        this.setState({
          ...this.state,
          playStatus: "STOPPING"
        })
      } else {
        this.setState({
          ...this.state,
          playStatus: "PLAYING"
        })
      }
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
      <React.Fragment>
        <div className="ambiences-container">
          {renderAmbiences}
        </div>
        <Sound url={this.state.audioUrl} autoload="true" loop="true" playStatus={this.state.playStatus} volume={this.state.volume}/>
      </React.Fragment>
    )
  }
}

export default Ambiences
