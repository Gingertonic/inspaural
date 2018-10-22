import React, { Component } from 'react'
import Quote from '../components/Quote'
import Sound from 'react-sound';

class Quotes extends Component {

  state = {
    audioUrl: "",
    playStatus: "STOPPED",
    volume: 80,
    nextQuoteNum: 1
  }

  handleOnMouseEnter = quoteUrl => {
    this.setState({
      audioUrl: quoteUrl,
      playStatus: "PLAYING"
    })
  }

  handleOnMouseLeave = () => {
    this.setState({
      playStatus: "PAUSED"
    })
  }

  handleOnClick = quoteId => {
    this.props.updateQuoteId(this.state.nextQuoteNum, quoteId)
    let nextQuoteNum = this.increaseNextQuoteNum();
    this.setState({
      nextQuoteNum: nextQuoteNum
    })
  }

  increaseNextQuoteNum = () => {
    return (this.state.nextQuoteNum < 4) ? this.state.nextQuoteNum + 1 : 1
  }

  render(){
    const renderQuotes = this.props.quotes.map(quote => <Quote quote={quote} selectedQuote={this.props.selectedQuotes.find(selQ => selQ.id === quote.id) ? "selected-quote" : "unselected-quote"} handleOnMouseEnter={this.handleOnMouseEnter} handleOnMouseLeave={this.handleOnMouseLeave} handleOnClick={this.handleOnClick}/>)

    return (
      <div className="quotes-container">
        {renderQuotes}
        <Sound
          url={this.state.audioUrl}
          autoload={true}
          playStatus={this.state.playStatus}
          volume={this.state.volume}
        />
      </div>
    )
  }
}




export default Quotes
