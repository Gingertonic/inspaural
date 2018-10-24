const initState = {
  inspaurals: [],
  loading: false
}


export default function sessionReducer(state = initState, action){
  switch(action.type){
    case "LOADING":
      return { ...state, loading: true}

    case "FETCH_INSPAURALS":
      return { ...state, inspaurals: [...action.inspaurals], loading: false }
      
    default:
      return state
  }
}
