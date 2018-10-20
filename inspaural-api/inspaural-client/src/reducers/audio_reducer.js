const initState = {
  quotes: [
    {author: "Walt Disney", text: "If you can dream it, you can do it", audioUrl: "www.test.com/dream"},
    {author: "Neil Armstrong", text: "One small step for man", audioUrl: "www.test.com/step"}
  ],
  ambiences: [
    {name: "Chill"},
    {name: "Soul"}],
  loading: false
}

export default function audioReducer(state = initState, action){
  switch(action.type){
    case "QUOTES_LOADING":
      return { ...state, loading: true}

    case "FETCH_QUOTES":
      console.log("FETCH_QUOTES hit in reducer")
      console.log(action.quotes)
      return { ...state, quotes: action.quotes, loading: false }

    default:
      return state
  }
}
