import { combineReducers } from 'redux'
import audioReducer from './audio_reducer'
import inspauralReducer from './inspaural_reducer'

export default combineReducers({
  audio: audioReducer,
  currentInspaural: inspauralReducer
})
