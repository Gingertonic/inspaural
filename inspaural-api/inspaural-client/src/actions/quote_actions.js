const loadingQuotes = () => {
  return {
    type: "QUOTES_LOADING"
  }
}

export const fetchQuotes = () => {
  return dispatch => {
    dispatch(loadingQuotes());
    fetch('/quotes')
      .then(resp => resp.json())
      .then(quotes => dispatch({type: "FETCH_QUOTES", quotes}))
  }
}
