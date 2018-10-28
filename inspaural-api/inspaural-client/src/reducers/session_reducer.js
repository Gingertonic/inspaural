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

    case "DELETE_INSPAURAL":
      return { ...state, inspaurals: state.inspaurals.filter(insp => insp.id != action.inspId)}

    case "ADD_INSPAURAL":
    console.log("about to add " + action.newInspaural)
      return { ...state, inspaurals: state.inspaurals.concat(action.newInspaural)}

    default:
      return state
  }
}
