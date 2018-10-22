const loading = () => {
  return {
    type: "LOADING"
  }
}

export const updateAmbienceId = ambienceId => {
  return {
    type: "UPDATE_AMBIENCE_ID", ambienceId
  }
}

export const updateAmbienceVolume = ambienceVolume => {
  return {
    type: "UPDATE_AMBIENCE_VOLUME", ambienceVolume
  }
}

export const updateQuoteOneId = quoteId => {
  return {
    type: "UPDATE_QUOTE_ONE_ID", quoteId
  }
}

export const updateQuoteOneVolume = quoteVolume => {
  return {
    type: "UPDATE_QUOTE_ONE_VOLUME", quoteVolume
  }
}

export const updateQuoteTwoId = quoteId => {
  return {
    type: "UPDATE_QUOTE_TWO_ID", quoteId
  }
}

export const updateQuoteTwoVolume = quoteVolume => {
  return {
    type: "UPDATE_QUOTE_TWO_VOLUME", quoteVolume
  }
}

export const updateQuoteThreeId = quoteId => {
  return {
    type: "UPDATE_QUOTE_THREE_ID", quoteId
  }
}

export const updateQuoteThreeVolume = quoteVolume => {
  return {
    type: "UPDATE_QUOTE_THREE_VOLUME", quoteVolume
  }
}

export const updateQuoteFourId = quoteId => {
  return {
    type: "UPDATE_QUOTE_FOUR_ID", quoteId
  }
}

export const updateQuoteFourVolume = quoteVolume => {
  return {
    type: "UPDATE_QUOTE_FOUR_VOLUME", quoteVolume
  }
}
