import { combineReducers } from 'redux'

import app from './app'
import todos from './todos'

const reducers = {
  app,
  todos
}

export default combineReducers(reducers)