import React from 'react'

const InspauralLi = props => {
  return (
    <li className="inspaural-li" onClick={() => props.loadInspaural(props.insp.id)}>{props.insp.name}</li>
  )
}

export default InspauralLi
