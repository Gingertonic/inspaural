import React from 'react'

const Quotes = (props) => {
  const renderQuotes = props.quotes.map(quote => <img className="quote" id={quote.id} key={quote.id} src={quote.audioUrl}/>)
  return (
    <div className="quotes-container">
      {renderQuotes}
    </div>
  )
}

export default Quotes
