import React, { Component } from 'react'
import Quotes from '../components/Quotes'
import { connect } from 'react-redux'
import { fetchQuotes, doSomething } from '../actions/quote_actions'

class Inspaural extends Component {


  componentDidMount(){
    console.log("Inspaural mounted!")
    this.props.fetchQuotes()
  }

  render(){
    return(
      <div>
        <Quotes quotes={this.props.quotes}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes.quotes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchQuotes: () => dispatch(fetchQuotes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Inspaural)
