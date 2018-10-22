const initState = {
  id: 0,
  name: "Unsaved",
  selectedQuotes: [
    {quoteNum: 1, id: 0, volume: 0},
    {quoteNum: 2, id: 0, volume: 0},
    {quoteNum: 3, id: 0, volume: 0},
    {quoteNum: 4, id: 0, volume: 0}
  ],
  selectedAmbience: {id: 3, volume: 0},
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
      return {...state, selectedAmbience: {...state.selectedAmbience, id: action.ambienceId}, loading: false}

    case "UPDATE_AMBIENCE_VOLUME":
      return {...state, selectedAmbience: {...state.selectedAmbience, volume: action.ambienceVolume}, loading: false}

    case "UPDATE_QUOTE_ID":
      idx = state.selectedQuotes.findIndex(quote => quote.quoteNum === action.quoteNum)
      newState = state
      newState.selectedQuotes[idx].id = action.newQuoteId
      return {...newState, loading: false}

    // case "UPDATE_QUOTE_1_VOLUME":
    //   return {...state, selectedQuotes: [...state.selectedQuotes, quote1: {...state.selectedQuotes.quote1, volume: action.newQuoteVolume}], loading: false}
    //


    // case "SAVE_INSPAURAL":
    //   return {...state, loading: false}
    //
    // case "DELETE_INSPAURAL":
    //   return initState

    default:
      return state
  }
}
