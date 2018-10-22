const initState = {
  id: 0,
  name: "Unsaved",
  selectedQuotes: [
    {quoteNum: 1, id: 1, volume: 0},
    {quoteNum: 2, id: 3, volume: 0},
    {quoteNum: 3, id: 6, volume: 0},
    {quoteNum: 4, id: 10, volume: 0}
  ],
  selectedAmbience: {id: 3, volume: 0},
  loading: false
}

export default function inspauralReducer(state = initState, action){
  switch(action.type){
    case "LOADING":
      return {...state, loading: true}

    // case "FETCH_INSPAURAL":
    //   return {...state, loading: false}

    case "UPDATE_AMBIENCE_ID":
      return {...state, selectedAmbience: {...state.selectedAmbience, id: action.ambienceId}, loading: false}

    case "UPDATE_AMBIENCE_VOLUME":
      return {...state, selectedAmbience: {...state.selectedAmbience, volume: action.ambienceVolume}, loading: false}

    case "UPDATE_QUOTE_ONE_ID":
      return {...state, selectedQuotes: {...state.selectedQuotes, quote1: {...state.quote1, id: action.newQuoteId}}, loading: false}

    case "UPDATE_QUOTE_ONE_VOLUME":
      return {...state, selectedQuotes: {...state.selectedQuotes, quote1: {...state.quote1, volume: action.newQuoteVolume}}, loading: false}

    case "UPDATE_QUOTE_TWO_ID":
      return {...state, selectedQuotes: {...state.selectedQuotes, quote2: {...state.quote2, id: action.newQuoteId}}, loading: false}

    case "UPDATE_QUOTE_TWO_VOLUME":
      return {...state, selectedQuotes: {...state.selectedQuotes, quote2: {...state.quote2, volume: action.newQuoteVolume}}, loading: false}

    case "UPDATE_QUOTE_THREE_ID":
      return {...state, selectedQuotes: {...state.selectedQuotes, quote3: {...state.quote3, id: action.newQuoteId}}, loading: false}

    case "UPDATE_QUOTE_THREE_VOLUME":
      return {...state, selectedQuotes: {...state.selectedQuotes, quote3: {...state.quote3, volume: action.newQuoteVolume}}, loading: false}

    case "UPDATE_QUOTE_FOUR_ID":
      return {...state, selectedQuotes: {...state.selectedQuotes, quote4: {...state.quote4, id: action.newQuoteId}}, loading: false}

    case "UPDATE_QUOTE_FOUR_VOLUME":
      return {...state, selectedQuotes: {...state.selectedQuotes, quote4: {...state.quote4, volume: action.newQuoteVolume}}, loading: false}



    // case "SAVE_INSPAURAL":
    //   return {...state, loading: false}
    //
    // case "DELETE_INSPAURAL":
    //   return initState

    default:
      return state
  }
}
