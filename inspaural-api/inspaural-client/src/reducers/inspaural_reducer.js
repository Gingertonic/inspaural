const initState = {
  id: 0,
  name: "Unsaved",
  quote1: {id: 0, volume: 0},
  quote2: {id: 0, volume: 0},
  quote3: {id: 0, volume: 0},
  quote4: {id: 0, volume: 0},
  ambience: {id: 0, volume: 0},
  loading: false
}

export default function inspauralReducer(state = initState, action){
  switch(action.type){
    case "LOADING":
      return {...state, loading: true}

    // case "FETCH_INSPAURAL":
    //   return {...state, loading: false}

    case "UPDATE_AMBIENCE_ID":
      return {...state, ambience: {...ambience id: action.ambienceId}, loading: false}

    case "UPDATE_AMBIENCE_VOLUME":
      return {...state, ambience: {...ambience volume: action.ambienceVolume}, loading: false}

    case "UPDATE_QUOTE_ONE_ID":
      return {...state, quote1: {...quote1 id: action.quoteId}, loading: false}

    case "UPDATE_QUOTE_ONE_VOLUME":
      return {...state, quote1: {...quote1 volume: action.quoteVolume}, loading: false}

    case "UPDATE_QUOTE_TWO_ID":
      return {...state, quote2: {...quote2 id: action.quoteId}, loading: false}

    case "UPDATE_QUOTE_TWO_VOLUME":
      return {...state, quote2: {...quote2 volume: action.quoteVolume}, loading: false}

    case "UPDATE_QUOTE_THREE_ID":
      return {...state, quote3: {...quote3 id: action.quoteId}, loading: false}

    case "UPDATE_QUOTE_THREE_VOLUME":
      return {...state, quote3: {...quote3 volume: action.quoteVolume}, loading: false}

    case "UPDATE_QUOTE_FOUR_ID":
      return {...state, quote4: {...quote4 id: action.quoteId}, loading: false}

    case "UPDATE_QUOTE_FOUR_VOLUME":
      return {...state, quote4: {...quote4 volume: action.quoteVolume}, loading: false}



    // case "SAVE_INSPAURAL":
    //   return {...state, loading: false}
    //
    // case "DELETE_INSPAURAL":
    //   return initState

    default:
      return state
  }
}
