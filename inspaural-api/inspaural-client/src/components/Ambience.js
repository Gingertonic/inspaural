import React from 'react'

const Ambience = props => {
  return (
    <div className="ambience" onClick={() => props.handleOnClick(props.ambience.audioUrl)}>
      <img className="ambImage" src={props.ambience.imageUrl} alt={props.ambience.name}/>
    </div>
  )
}

export default Ambience
