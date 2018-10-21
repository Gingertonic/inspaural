import React, { Component } from 'react'
import Quotes from '../containers/Quotes'
import InnerDisplay from '../containers/InnerDisplay'
import { connect } from 'react-redux'
import { fetchQuotes } from '../actions/audio_actions'

class Inspaural extends Component {


  componentDidMount(){
    console.log("Inspaural mounted!")
    this.props.fetchQuotes()
  }

  render(){
    return(
      <div className="inspaural">
        <div className="outer-display">
          <Quotes quotes={this.props.quotes}/>
          <div className="inner-display">
            <InnerDisplay />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    quotes: state.audio.quotes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchQuotes: () => dispatch(fetchQuotes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Inspaural)
