const initState = {
  quotes: [
    {id: 1, author: "Walt Disney", text: "If you can dream it, you can do it", audioUrl: "www.test.com/dream"},
    {id: 2, author: "Neil Armstrong", text: "One small step for man", audioUrl: "www.test.com/step"}
  ],
  ambiences: [
    {id: 1, name: "Chill", imageUrl: "https://www.worcsu.com/asset/Event/6013/chill.jpg", audioUrl: "https://www.looperman.com/media/loops/1297038/looperman-l-1297038-0141300-loner-mocha-jones-chill-x-spacey-pad-chords.mp3"},
    {id: 2, name: "Soul", imageUrl: "https://cdn.dribbble.com/users/44134/screenshots/914778/soul.jpg", audioUrl: "https://www.looperman.com/media/loops/2158587/looperman-l-2158587-0136724-gentle-soul-drums.mp3"},
    {id: 3, name: "Party", imageUrl: "http://titan.titanfm.co.uk/wp-content/uploads/2018/04/party.png", audioUrl: "https://www.looperman.com/media/loops/1657895/looperman-l-1657895-0138631-bass-party-loop-2.mp3"},
    {id: 4, name: "Drama", imageUrl: "http://africanleadership.co.uk/wp-content/uploads/2017/11/strength.jpg", audioUrl: "https://www.looperman.com/media/loops/2879189/looperman-l-2879189-0139015-piano-melody-cold-snow-strom-type.mp3"}
  ],
  loading: false
}


export default function audioReducer(state = initState, action){
  switch(action.type){
    case "LOADING":
      return { ...state, loading: true}

    case "FETCH_QUOTES":
      console.log("FETCH_QUOTES hit in reducer")
      console.log(action.quotes)
      action.quotes.splice(5, 0, {id: "blank1", author: "", text: "", audioUrl: ""})
      action.quotes.splice(6, 0, {id: "blank2", author: "", text: "", audioUrl: ""})
      action.quotes.splice(9, 0, {id: "blank3", author: "", text: "", audioUrl: ""})
      action.quotes.splice(10, 0, {id: "blank4", author: "", text: "", audioUrl: ""})
      return { ...state, quotes: action.quotes, loading: false }

    case "FETCH_AMBIENCES":
      console.log("FETCH_AMBIENCES hit in reducer")
      console.log(action.ambiences)
      return { ...state, quotes: action.ambiences, loading: false }

    default:
      return state
  }
}
