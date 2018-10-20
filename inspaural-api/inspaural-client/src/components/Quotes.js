import React from 'react'

const Quotes = (props) => {
  const renderQuotes = props.quotes.map((quote, idx) => <p key={idx}><strong>{quote.text}</strong> by {quote.author}</p>)
  return (
    <div>
      {renderQuotes}
    </div>
  )
}

export default Quotes
