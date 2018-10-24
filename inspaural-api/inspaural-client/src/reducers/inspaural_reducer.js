const loadingImage = "https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/4321112/580/386/m1/fpnw/wm0/paper_question_mark_logo_template-03-.png?1524123254&s=16fbcdc7bbae4cf8368e72fc77a04dbe"

const initState = {
  id: 0,
  name: "Unsaved",
  selectedQuoteIds: [0, 0, 0, 0],
  quote1: {quoteNum: 1, id: 0, volume: 40, audioUrl: "", imageUrl: loadingImage},
  quote2: {quoteNum: 2, id: 0, volume: 40, audioUrl: "", imageUrl: loadingImage},
  quote3: {quoteNum: 3, id: 0, volume: 40, audioUrl: "", imageUrl: loadingImage},
  quote4: {quoteNum: 4, id: 0, volume: 40, audioUrl: "", imageUrl: loadingImage},
  selectedAmbience: {id: 0, volume: 40, audioUrl: "", imageUrl: loadingImage},
  loading: false
}

export default function inspauralReducer(state = initState, action){
  let idx;
  let newState;
  switch(action.type){
    case "LOADING":
      return {...state, loading: true}

    case "LOADED":
      return {...state, loading: false}
    // case "FETCH_INSPAURAL":
    //   return {...state, loading: false}

    case "RESET_QUOTES":
      return {
        ...state,
        selectedQuoteIds: [0, 0, 0, 0],
        quote1: {quoteNum: 1, id: 0, volume: 40, audioUrl: "", imageUrl: loadingImage},
        quote2: {quoteNum: 2, id: 0, volume: 40, audioUrl: "", imageUrl: loadingImage},
        quote3: {quoteNum: 3, id: 0, volume: 40, audioUrl: "", imageUrl: loadingImage},
        quote4: {quoteNum: 4, id: 0, volume: 40, audioUrl: "", imageUrl: loadingImage}
      }

    case "UPDATE_AMBIENCE_ID":
      console.log("once in reducer, ambi id is " + action.ambienceId)
      return {...state, selectedAmbience: {...state.selectedAmbience, id: action.ambienceId, audioUrl: action.newAmbienceAudioUrl, imageUrl: action.newAmbienceImageUrl}, loading: false}

    case "UPDATE_AMBIENCE_VOLUME":
      return {...state, selectedAmbience: {...state.selectedAmbience, volume: action.newAmbienceVolume}, loading: false}

    case "UPDATE_QUOTE_ID":
      switch(action.quoteNum) {
        case 1:
          state.selectedQuoteIds[0] = action.newQuoteId
          return {...state, quote1: {...state.quote1, id: action.newQuoteId, audioUrl: action.newQuoteAudioUrl, imageUrl: action.newQuoteImageUrl}, loading: false}

        case 2:
          state.selectedQuoteIds[1] = action.newQuoteId
          return {...state, quote2: {...state.quote2, id: action.newQuoteId, audioUrl: action.newQuoteAudioUrl, imageUrl: action.newQuoteImageUrl}, loading: false}

        case 3:
          state.selectedQuoteIds[2] = action.newQuoteId
          return {...state, quote3: {...state.quote3, id: action.newQuoteId, audioUrl: action.newQuoteAudioUrl, imageUrl: action.newQuoteImageUrl}, loading: false}

        case 4:
          state.selectedQuoteIds[3] = action.newQuoteId
          return {...state, quote4: {...state.quote4, id: action.newQuoteId, audioUrl: action.newQuoteAudioUrl, imageUrl: action.newQuoteImageUrl}, loading: false}
      }

    case "UPDATE_QUOTE_VOLUME":
      console.log("quoteNum is " + action.quoteNum)
      switch(action.quoteNum) {
        case 1:
          return {...state, quote1: {...state.quote1, volume: action.newQuoteVolume}, loading: false}

        case 2:
          return {...state, quote2: {...state.quote2, volume: action.newQuoteVolume}, loading: false}

        case 3:
          return {...state, quote3: {...state.quote3, volume: action.newQuoteVolume}, loading: false}

        case 4:
          return {...state, quote4: {...state.quote4, volume: action.newQuoteVolume}, loading: false}
      }



    // case "SAVE_INSPAURAL":
    //   return {...state, loading: false}
    //
    // case "DELETE_INSPAURAL":
    //   return initState

    default:
      return state
  }
}
