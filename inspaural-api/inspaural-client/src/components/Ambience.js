import React from 'react'

const Ambience = props => {
  return (
    <img className="ambience" src={props.ambience.imageUrl} alt={props.ambience.name} onClick={() => props.handleOnClick(props.ambience.audioUrl)}/>
  )
}

export default Ambience
