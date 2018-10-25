import React, { Component } from 'react'
import InnerDisplay from '../containers/InnerDisplay'
import InnerNav from '../components/InnerNav'
import AllInspaurals from '../containers/AllInspaurals'
import Quotes from '../containers/Quotes'
import Ambiences from '../containers/Ambiences'
import Mixer from '../containers/Mixer'
import Playback from '../components/Playback'
import { connect } from 'react-redux'
import { fetchQuotes, fetchAmbiences } from '../actions/audio_actions'
import { fetchInspaurals } from '../actions/session_actions'
import { updateQuoteId, updateQuoteVolume, updateAmbienceId, updateAmbienceVolume, resetQuotes, saveInspauralToDb, loadInspaural, fetchInspauralFromDb, deleteInspauralFromDb} from '../actions/inspaural_actions'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class Inspaural extends Component {


  componentDidMount(){
    console.log("Inspaural mounted!")
    this.props.fetchQuotes();
    this.props.fetchAmbiences();
  }

  saveInspaural = () => {
    this.props.saveInspauralToDb(this.props.currentInspaural)
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
                <Route exact path = '/my-inspaurals'
                  render={props => <AllInspaurals {...props}
                    fetchInspaurals={this.props.fetchInspaurals}
                    allInspaurals={this.props.allInspaurals}
                    fetchInspauralFromDb={this.props.fetchInspauralFromDb}
                    deleteInspauralFromDb={this.props.deleteInspauralFromDb}
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
    selectedQuoteIds: state.currentInspaural.selectedQuoteIds,
    allInspaurals: state.session.inspaurals,
    currentInspaural: state.currentInspaural
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchQuotes: () => dispatch(fetchQuotes()),
    fetchAmbiences: () => dispatch(fetchAmbiences()),
    fetchInspaurals: () => dispatch(fetchInspaurals()),
    fetchInspauralFromDb: inspId => dispatch(fetchInspauralFromDb(inspId)),
    deleteInspauralFromDb: inspId => dispatch(deleteInspauralFromDb(inspId)),
    saveInspauralToDb: data => dispatch(saveInspauralToDb(data)),
    updateQuoteId: (quoteNum, quoteId, audioUrl, imageUrl) => dispatch(updateQuoteId(quoteNum, quoteId, audioUrl, imageUrl)),
    updateQuoteVolume: (quoteNum, newVolume) => dispatch(updateQuoteVolume(quoteNum, newVolume)),
    updateAmbienceId: (ambienceId, audioUrl, imageUrl) => dispatch(updateAmbienceId(ambienceId, audioUrl, imageUrl)),
    updateAmbienceVolume: newVol => dispatch(updateAmbienceVolume(newVol)),
    resetQuotes: () => dispatch(resetQuotes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Inspaural)
