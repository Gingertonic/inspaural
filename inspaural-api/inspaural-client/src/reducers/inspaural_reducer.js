const initState = {
  id: 0,
  name: "Unsaved",
  selectedQuotes: [
    {quoteNum: 1, id: 0, volume: 60, audioUrl: ""},
    {quoteNum: 2, id: 0, volume: 50, audioUrl: ""},
    {quoteNum: 3, id: 0, volume: 40, audioUrl: ""},
    {quoteNum: 4, id: 0, volume: 30, audioUrl: ""}
  ],
  selectedAmbience: {id: 0, volume: 40, audioUrl: ""},
  loading: false
}

export default function inspauralReducer(state = initState, action){
  let idx;
  let newState;
  switch(action.type){
    case "LOADING":
      return {...state, loading: true}

    // case "FETCH_INSPAURAL":
    //   return {...state, loading: false}

    case "UPDATE_AMBIENCE_ID":
      console.log("once in reducer, ambi id is " + action.ambienceId)
      return {...state, selectedAmbience: {...state.selectedAmbience, id: action.ambienceId, audioUrl: action.newAmbienceAudioUrl}, loading: false}

    case "UPDATE_AMBIENCE_VOLUME":
      return {...state, selectedAmbience: {...state.selectedAmbience, volume: action.newAmbienceVolume}, loading: false}

    case "UPDATE_QUOTE_ID":
      idx = state.selectedQuotes.findIndex(quote => quote.quoteNum === action.quoteNum)
      newState = state
      newState.selectedQuotes[idx].id = action.newQuoteId
      newState.selectedQuotes[idx].audioUrl = action.newQuoteAudioUrl
      return {...newState, loading: false}

    case "UPDATE_QUOTE_VOLUME":
      idx = state.selectedQuotes.findIndex(quote => quote.quoteNum === action.quoteNum)
      newState = state
      newState.selectedQuotes[idx].volume = action.quoteNum
      return {...newState, loading: false}


    // case "SAVE_INSPAURAL":
    //   return {...state, loading: false}
    //
    // case "DELETE_INSPAURAL":
    //   return initState

    default:
      return state
  }
}
