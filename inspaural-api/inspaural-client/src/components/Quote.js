import React from 'react'

const Quote = props => {
  return (
    <img className="quote" id={props.quote.id} src={props.quote.imageUrl} alt={props.quote.author} onMouseEnter={e => props.handleOnMouseEnter(props.quote.audioUrl)} onMouseLeave={() => props.handleOnMouseLeave()}/>
  )
}

export default Quote
