import React from 'react'

const Ambience = props => {
  return (
    <img className={props.selectedAmbience} src={props.ambience.imageUrl} alt={props.ambience.name} onClick={() => props.handleOnClick(props.ambience.audioUrl, props.ambience.id)}/>
  )
}

export default Ambience
