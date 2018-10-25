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

export const saveInspauralToDB = (q1, q2, q3, q4, a) => {
  return dispatch => {
    dispatch(loading());
    return fetch('/inspaurals', {
      method: "POST",
      body: JSON.stringify(q1, q2, q3, q4, a)
    }).then(resp => resp.json())
    .then(json => console.log(json))
    .then(dispatch(loaded))
  }
}

// export const updateQuoteOneId = quoteId => {
//   return {
//     type: "UPDATE_QUOTE_ONE_ID", quoteId
//   }
// }
//
// export const updateQuoteOneVolume = quoteVolume => {
//   return {
//     type: "UPDATE_QUOTE_ONE_VOLUME", quoteVolume
//   }
// }
//
// export const updateQuoteTwoId = quoteId => {
//   return {
//     type: "UPDATE_QUOTE_TWO_ID", quoteId
//   }
// }
//
// export const updateQuoteTwoVolume = quoteVolume => {
//   return {
//     type: "UPDATE_QUOTE_TWO_VOLUME", quoteVolume
//   }
// }
//
// export const updateQuoteThreeId = quoteId => {
//   return {
//     type: "UPDATE_QUOTE_THREE_ID", quoteId
//   }
// }
//
// export const updateQuoteThreeVolume = quoteVolume => {
//   return {
//     type: "UPDATE_QUOTE_THREE_VOLUME", quoteVolume
//   }
// }
//
// export const updateQuoteFourId = quoteId => {
//   return {
//     type: "UPDATE_QUOTE_FOUR_ID", quoteId
//   }
// }
//
// export const updateQuoteFourVolume = quoteVolume => {
//   return {
//     type: "UPDATE_QUOTE_FOUR_VOLUME", quoteVolume
//   }
// }
