import React, { Component } from 'react'

class Inspaural extends Component {


  state = {
    quotes: [{author: "Walt Disney", text: "If you can dream it, you can do it", audioUrl: "www.test.com/dream"}]
  }

  componentDidMount(){
    fetch('/quotes')
      .then(resp => resp.json())
      .then(quotes => this.setState({ quotes }))
  }

  render(){
    const renderQuotes = this.state.quotes.map((quote, idx) => <p key={idx}><strong>{quote.text}</strong> by {quote.author}</p>)
    return (
      <div>
        {renderQuotes}
      </div>
    )
  }
}

export default Inspaural
