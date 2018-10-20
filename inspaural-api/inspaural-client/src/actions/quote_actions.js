const loadingQuotes = () => {
  console.log("loadingQuotes hit in actions")
  return {
    type: "QUOTES_LOADING"
  }
}

export const fetchQuotes = () => {
  console.log("fetchQuotes hit in actions")
  return dispatch => {
    console.log("about to dispatch loadingQuotes from fetchQuotes in actions")
    dispatch(loadingQuotes());
    return fetch('/quotes')
      .then(resp => resp.json())
      .then(quotes => dispatch({type: "FETCH_QUOTES", quotes}))
  }
}
