import React, { Component } from 'react'
import Sound from 'react-sound';


const Quotes = (props) => {
  const handleOnMouseEnter = (e) => {
    console.log(e.target)
  }

  const renderQuotes = props.quotes.map(quote => <img className="quote" onMouseOver={(e) => handleOnMouseEnter(e)} id={quote.id} key={quote.id} audiourl={quote.audioUrl} src={quote.imageUrl}/>)

  return (
    <div className="quotes-container">
      {renderQuotes}
      <Sound url="https://www.looperman.com/media/loops/159051/looperman-l-0159051-0127180-minor2go-my-3000th-loop-part-1.mp3" autoload={true} playStatus="PLAYING"/>
    </div>
  )
}

export default Quotes
