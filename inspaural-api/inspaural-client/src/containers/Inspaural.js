import React, { Component } from 'react'
import Quotes from '../components/Quotes'
import { connect } from 'react-redux'

class Inspaural extends Component {


  componentDidMount(){

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

export default connect(mapStateToProps)(Inspaural)
