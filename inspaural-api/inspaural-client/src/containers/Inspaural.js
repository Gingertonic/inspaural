import React, { Component } from 'react'
import Quotes from '../components/Quotes'

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
    return(
      <div>
        <Quotes quotes={this.state.quotes}/>
      </div>
    )
  }
}

export default Inspaural
