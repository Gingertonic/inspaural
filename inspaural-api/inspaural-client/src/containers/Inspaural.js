import React, { Component } from 'react'
import InnerDisplay from '../containers/InnerDisplay'
import InnerNav from '../components/InnerNav'
import Quotes from '../containers/Quotes'
import Ambiences from '../containers/Ambiences'
import Mixer from '../containers/Mixer'
import { connect } from 'react-redux'
import { fetchQuotes } from '../actions/audio_actions'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom';

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
            <Router>
              <React.Fragment>
                <Route path = '/' component={InnerDisplay}/>
                <Route exact path = '/mixer' component={Mixer}/>
                <Route exact path = '/ambiences' render={props => <Ambiences {...props} ambiences={this.props.ambiences} />}/>
                <InnerNav />
              </React.Fragment>
            </Router>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    quotes: state.audio.quotes,
    ambiences: state.audio.ambiences
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchQuotes: () => dispatch(fetchQuotes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Inspaural)
