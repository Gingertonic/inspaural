const initState = {
  quotes: [
    {id: 1, author: "Walt Disney", text: "If you can dream it, you can do it", audioUrl: "www.test.com/dream"},
    {id: 2, author: "Neil Armstrong", text: "One small step for man", audioUrl: "www.test.com/step"}
  ],
  ambiences: [
    {id: 1, name: "Chill"},
    {id: 2, name: "Soul"}],
  loading: false
}

export default function audioReducer(state = initState, action){
  let newQuotes;
  switch(action.type){
    case "QUOTES_LOADING":
      return { ...state, loading: true}

    case "FETCH_QUOTES":
      console.log("FETCH_QUOTES hit in reducer")
      console.log(action.quotes)
      action.quotes.splice(5, 0, {id: "blank1", author: "", text: "", audioUrl: ""})
      action.quotes.splice(6, 0, {id: "blank2", author: "", text: "", audioUrl: ""})
      action.quotes.splice(9, 0, {id: "blank3", author: "", text: "", audioUrl: ""})
      action.quotes.splice(10, 0, {id: "blank4", author: "", text: "", audioUrl: ""})
      return { ...state, quotes: action.quotes, loading: false }

    default:
      return state
  }
}
