const loading = () => {
  return {
    type: "LOADING"
  }
}

const loaded = () => {
  return {
    type: "LOADED"
  }
}

export const fetchInspauralFromDb = inspId => {
  return dispatch => {
    dispatch(loading());
    fetch('/inspaurals/' + inspId)
      .then(resp => resp.json())
      .then(inspaural => dispatch({type: "FETCH_INSPAURAL", inspaural: inspaural}))
  }
}

export const deleteInspauralFromDb = inspId => {
  return dispatch => {
    dispatch(loading());
    fetch('inspaurals/' + inspId, {
      method: "DELETE"
    }).then(dispatch({type: "DELETE_INSPAURAL", inspId: inspId}))
  }
}

export const updateAmbienceId = (ambienceId, newAmbienceAudioUrl, newAmbienceImageUrl) => {
  console.log("once in action, ambi id is " + ambienceId)
  return {
    type: "UPDATE_AMBIENCE_ID", ambienceId, newAmbienceAudioUrl, newAmbienceImageUrl
  }
}

export const updateAmbienceVolume = newAmbienceVolume => {
  return {
    type: "UPDATE_AMBIENCE_VOLUME", newAmbienceVolume
  }
}

export const updateQuoteId = (quoteNum, newQuoteId, newQuoteAudioUrl, newQuoteImageUrl) => {
  return {
    type: "UPDATE_QUOTE_ID", quoteNum, newQuoteId, newQuoteAudioUrl, newQuoteImageUrl
  }
}

export const updateQuoteVolume = (newQuoteVolume, quoteNum) => {
  let type = `UPDATE_QUOTE_VOLUME`;
  return {
    type, quoteNum, newQuoteVolume
  }
}

export const resetQuotes = () => {
  return {
    type: "RESET_QUOTES"
  }
}

export const saveInspauralToDB = data => {
  return dispatch => {
    dispatch(loading());
    return fetch('/inspaurals', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(resp => resp.json())
    .then(json => console.log(json))
    .then(dispatch(loaded))
  }
}
