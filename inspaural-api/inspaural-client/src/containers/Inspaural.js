import React, { Component } from 'react'
import InnerDisplay from '../containers/InnerDisplay'
import InnerNav from '../components/InnerNav'
import Quotes from '../containers/Quotes'
import Ambiences from '../containers/Ambiences'
import Mixer from '../containers/Mixer'
import Playback from '../components/Playback'
import { connect } from 'react-redux'
import { fetchQuotes, fetchAmbiences } from '../actions/audio_actions'
import { updateQuoteId, updateQuoteVolume, updateAmbienceId, updateAmbienceVolume } from '../actions/inspaural_actions'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class Inspaural extends Component {


  componentDidMount(){
    console.log("Inspaural mounted!")
    this.props.fetchQuotes();
    this.props.fetchAmbiences();
  }

  render(){
    return(
      <div className="inspaural">
        <div className="outer-display">
          <Quotes
            quotes={this.props.quotes}
            selectedQuotes={this.props.selectedQuotes}
            selectedAmbience={this.props.selectedAmbience}
            updateQuoteId={this.props.updateQuoteId}
          />
          <div className="inner-display">
            <Router>
              <React.Fragment>
                <Route path = '/' component={InnerDisplay}/>
                <Route exact path = '/mixer'
                  render={props => <Mixer {...props}
                    selectedQuotes={this.props.selectedQuotes}
                    selectedAmbience={this.props.selectedAmbience}
                    updateQuoteVolume={this.props.updateQuoteVolume}
                    updateAmbienceVolume={this.props.updateAmbienceVolume}
                  />}
                />
                <Route exact path = '/ambiences'
                  render={props => <Ambiences {...props}
                    ambiences={this.props.ambiences}
                    selectedAmbience={this.props.selectedAmbience}
                    updateAmbienceId={this.props.updateAmbienceId}
                  />}
                />
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
    ambiences: state.audio.ambiences,
    selectedQuotes: state.currentInspaural.selectedQuotes,
    selectedAmbience: state.currentInspaural.selectedAmbience
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchQuotes: () => dispatch(fetchQuotes()),
    fetchAmbiences: () => dispatch(fetchAmbiences()),
    updateQuoteId: (quoteNum, quoteId, audioUrl) => dispatch(updateQuoteId(quoteNum, quoteId, audioUrl)),
    updateQuoteVolume: (quoteNum, newVolume) => dispatch(updateQuoteVolume(quoteNum, newVolume)),
    updateAmbienceId: (ambienceId, audioUrl) => dispatch(updateAmbienceId(ambienceId, audioUrl)),
    updateAmbienceVolume: newVol => dispatch(updateAmbienceVolume(newVol))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Inspaural)
