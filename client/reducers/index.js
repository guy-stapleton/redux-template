import {combineReducers} from 'redux'

import errorMessage from './error-message'
import test from './test'
import users from './users'

export default combineReducers({
  errorMessage,
  test,
  users
})
