import { combineReducers } from 'redux'
import quotesReducer from './quotes_reducer'

export default combineReducers({
  quotes: quotesReducer
})
