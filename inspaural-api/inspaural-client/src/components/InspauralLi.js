import React from 'react'

const InspauralLi = props => {
  return (
    <li className="inspaural-li" onClick={e => props.loadInspaural(e, props.insp.id)}><a href='/'>{props.insp.name}</a></li>
  )
}

export default InspauralLi
