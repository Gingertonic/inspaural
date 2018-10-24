import React, { Component } from 'react'
import InnerDisplay from '../containers/InnerDisplay'
import InnerNav from '../components/InnerNav'
import Quotes from '../containers/Quotes'
import Ambiences from '../containers/Ambiences'
import Mixer from '../containers/Mixer'
import Playback from '../components/Playback'
import { connect } from 'react-redux'
import { fetchQuotes, fetchAmbiences } from '../actions/audio_actions'
import { updateQuoteId, updateQuoteVolume, updateAmbienceId, updateAmbienceVolume, resetQuotes, saveInspauralToDB} from '../actions/inspaural_actions'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class Inspaural extends Component {


  componentDidMount(){
    console.log("Inspaural mounted!")
    this.props.fetchQuotes();
    this.props.fetchAmbiences();
  }

  saveInspaural = e => {
    e.preventDefault();
    window.alert("Saved!")
    // this.saveInspauralToDB(this.props.selectedQuote1, this.props.selectedQuote2, this.props.selectedQuote3, this.props.selectedQuote4, this.props.selectedAmbience)
  }

  render(){
    return(
      <div className="inspaural">
        <div className="outer-display">
          <Quotes
            quotes={this.props.quotes}
            selectedQuoteIds={this.props.selectedQuoteIds}
            updateQuoteId={this.props.updateQuoteId}
            selectedAmbience={this.props.selectedAmbience}
            selectedQuote1={this.props.selectedQuote1}
            selectedQuote2={this.props.selectedQuote2}
            selectedQuote3={this.props.selectedQuote3}
            selectedQuote4={this.props.selectedQuote4}
            resetQuotes={this.props.resetQuotes}
          />
          <div className="inner-display">
            <Router>
              <React.Fragment>
                <Route path = '/' component={InnerDisplay}/>
                <Route exact path = '/mixer'
                  render={props => <Mixer {...props}
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
              <InnerNav saveInspaural={this.saveInspaural}/>
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
    selectedAmbience: state.currentInspaural.selectedAmbience,
    selectedQuote1: state.currentInspaural.quote1,
    selectedQuote2: state.currentInspaural.quote2,
    selectedQuote3: state.currentInspaural.quote3,
    selectedQuote4: state.currentInspaural.quote4,
    selectedQuoteIds: state.currentInspaural.selectedQuoteIds
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchQuotes: () => dispatch(fetchQuotes()),
    fetchAmbiences: () => dispatch(fetchAmbiences()),
    updateQuoteId: (quoteNum, quoteId, audioUrl, imageUrl) => dispatch(updateQuoteId(quoteNum, quoteId, audioUrl, imageUrl)),
    updateQuoteVolume: (quoteNum, newVolume) => dispatch(updateQuoteVolume(quoteNum, newVolume)),
    updateAmbienceId: (ambienceId, audioUrl, imageUrl) => dispatch(updateAmbienceId(ambienceId, audioUrl, imageUrl)),
    updateAmbienceVolume: newVol => dispatch(updateAmbienceVolume(newVol)),
    resetQuotes: () => dispatch(resetQuotes()),
    saveInspauralToDB: (q1, q2, q3, q4, a) => dispatch(saveInspauralToDB(q1, q2, q3, q4, a))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Inspaural)
