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
  let idx;
  let newState;
  switch(action.type){
    case "LOADING":
      return {...state, loading: true}

    // case "FETCH_INSPAURAL":
    //   return {...state, loading: false}

    case "UPDATE_AMBIENCE_ID":
      return {...state, selectedAmbience: {...state.selectedAmbience, id: action.ambienceId}, loading: false}

    case "UPDATE_AMBIENCE_VOLUME":
      return {...state, selectedAmbience: {...state.selectedAmbience, volume: action.ambienceVolume}, loading: false}

    case "UPDATE_QUOTE_1_ID":
      idx = state.selectedQuotes.findIndex(quote => quote.quoteNum === 1)
      newState = state
      newState.selectedQuotes[idx].id = action.newQuoteId
      return {...newState, loading: false}

    // case "UPDATE_QUOTE_1_VOLUME":
    //   return {...state, selectedQuotes: [...state.selectedQuotes, quote1: {...state.selectedQuotes.quote1, volume: action.newQuoteVolume}], loading: false}
    //
    // case "UPDATE_QUOTE_2_ID":
    //   return {...state, selectedQuotes: [...state.selectedQuotes, quote2: {...state.quote2, id: action.newQuoteId}], loading: false}
    //
    // case "UPDATE_QUOTE_2_VOLUME":
    //   return {...state, selectedQuotes: [...state.selectedQuotes, quote2: {...state.quote2, volume: action.newQuoteVolume}], loading: false}
    //
    // case "UPDATE_QUOTE_3_ID":
    //   return {...state, selectedQuotes: [...state.selectedQuotes, quote3: {...state.quote3, id: action.newQuoteId}], loading: false}
    //
    // case "UPDATE_QUOTE_3_VOLUME":
    //   return {...state, selectedQuotes: [...state.selectedQuotes, quote3: {...state.quote3, volume: action.newQuoteVolume}], loading: false}
    //
    // case "UPDATE_QUOTE_4_ID":
    //   return {...state, selectedQuotes: [...state.selectedQuotes, quote4: {...state.quote4, id: action.newQuoteId}], loading: false}
    //
    // case "UPDATE_QUOTE_4_VOLUME":
    //   return {...state, selectedQuotes: [...state.selectedQuotes, quote4: {...state.quote4, volume: action.newQuoteVolume}], loading: false}



    // case "SAVE_INSPAURAL":
    //   return {...state, loading: false}
    //
    // case "DELETE_INSPAURAL":
    //   return initState

    default:
      return state
  }
}
