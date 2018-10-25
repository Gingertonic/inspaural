import React, { Component } from 'react'
import InspauralLi from '../components/InspauralLi'

class AllInspaurals extends Component {
  componentDidMount = () => {
    this.props.fetchInspaurals()
  }

  loadInspaural = (e, inspId) => {
    console.log("looking for inspaural with id " + inspId)
    e.preventDefault()
    this.props.fetchInspauralFromDb(inspId)
  }

  render(){
    const renderInspaurals = this.props.allInspaurals.map(insp => <InspauralLi key={insp.id} loadInspaural={this.loadInspaural} insp={insp}/>)
    return (
      <div className="inspaural-index-container">
        <ul>
          {renderInspaurals}
        </ul>
      </div>
    )
  }
}

export default AllInspaurals
