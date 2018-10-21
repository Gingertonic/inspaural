
// TODO:
// map local state of quotes play hover/play status - change state on hover between PLAYING and STOPPED
// render a <Sound> comp for each quote which will re-render on it's state change


import React, { Component } from 'react'
import Quote from '../components/Quote'
import Sound from 'react-sound';

class Quotes extends Component {

  state = {
    audioUrl: 0,
    playStatus: "STOPPED"
  }

  handleOnMouseEnter = quoteUrl => {
    console.log(quoteUrl)
    this.setState({
      audioUrl: quoteUrl,
      playStatus: "PLAYING"
    })
  }

  handleOnMouseLeave = () => {
    this.setState({
      playStatus: "STOPPED"
    })
  }

  render(){
    const renderQuotes = this.props.quotes.map(quote => <Quote quote={quote} key={quote.id} handleOnMouseEnter={this.handleOnMouseEnter} handleOnMouseLeave={this.handleOnMouseLeave}/>)

    return (
      <div className="quotes-container">
        {renderQuotes}
        <Sound url={this.state.audioUrl} autoload={true} playStatus={this.state.playStatus}/>
      </div>
    )
  }
}




export default Quotes