const initState = {
  inspaural: {id: 0, name: ""},
  quote1: {id: 5, volume: 0},
  quote2: {id: 6, volume: 0},
  quote3: {id: 9, volume: 0},
  quote4: {id: 10, volume: 0},
  ambience: {id: 1, volume: 0},
  loading: false
}

export default function inspauralReducer(state = initState, action){
  switch(action.type){
    case "LOADING":
      return {...state, loading: true}
    case "FETCH_INSPAURAL":
      return {...state, loading: false}

    case "UPDATE_INSPAURAL":
      return {...state, loading: false}

    case "DELETE_INSPAURAL":
      return initState

    default:
      return state
  }
}
