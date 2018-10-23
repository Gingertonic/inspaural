const loading = () => {
  return {
    type: "LOADING"
  }
}

export const updateAmbienceId = (ambienceId, newAmbienceAudioUrl) => {
  console.log("once in action, ambi id is " + ambienceId)
  return {
    type: "UPDATE_AMBIENCE_ID", ambienceId, newAmbienceAudioUrl
  }
}

export const updateAmbienceVolume = ambienceVolume => {
  return {
    type: "UPDATE_AMBIENCE_VOLUME", ambienceVolume
  }
}

export const updateQuoteId = (quoteNum, newQuoteId, newQuoteAudioUrl) => {
  return {
    type: "UPDATE_QUOTE_ID", quoteNum, newQuoteId, newQuoteAudioUrl
  }
}

export const updateQuoteVolume = (quoteNum, newQuoteVolume) => {
  let type = `UPDATE_QUOTE_VOLUME`;
  return {
    type, newQuoteVolume, quoteNum, newQuoteVolume
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
