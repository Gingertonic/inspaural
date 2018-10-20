const initState = {quotes: [
  {author: "Walt Disney", text: "If you can dream it, you can do it", audioUrl: "www.test.com/dream"},
  {author: "Neil Armstrong", text: "One small step for man", audioUrl: "www.test.com/step"}
], loading: false}

export default function quotesReducer(state = initState, action){
  switch(action.type){
    case "QUOTES_LOADING":
      return { ...state, loading: true}

    case "FETCH_QUOTES":
      return { quotes: action.quotes, loading: false }

    default:
      return state
  }
}
