import { combineReducers } from 'redux'
import audioReducer from './audio_reducer'

export default combineReducers({
  audio: audioReducer
})
