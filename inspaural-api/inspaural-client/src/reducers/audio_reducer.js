const initState = {
  quotes: [
    {id: 1, author: "Walt Disney", text: "If you can dream it, you can do it", audioUrl: "www.test.com/dream"},
    {id: 2, author: "Neil Armstrong", text: "One small step for man", audioUrl: "www.test.com/step"}
  ],
  ambiences: [
    {id: 1, name: "Chill", imageUrl: "https://www.worcsu.com/asset/Event/6013/chill.jpg", audioUrl: "https://www.looperman.com/media/loops/1297038/looperman-l-1297038-0141300-loner-mocha-jones-chill-x-spacey-pad-chords.mp3"},
    {id: 2, name: "Soul", imageUrl: "https://cdn.dribbble.com/users/44134/screenshots/914778/soul.jpg", audioUrl: "https://www.looperman.com/media/loops/2158587/looperman-l-2158587-0136724-gentle-soul-drums.mp3"}
  ],
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
