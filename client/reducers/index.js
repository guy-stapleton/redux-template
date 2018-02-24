import {combineReducers} from 'redux'

import errorMessage from './error-message'
import test from './test'

export default combineReducers({
  errorMessage,
  test
})
