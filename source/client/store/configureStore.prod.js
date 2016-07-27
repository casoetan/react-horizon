import { createStore, applyMiddleware, compose } from 'redux'

import { createEpicMiddleware } from 'redux-observable'

import rootReducer from '../reducers'
import rootEpic from '../epics'

export default function configure(initialState) {
  const middleware = [
    createEpicMiddleware(rootEpic),
  ]

  const enhancer = compose(
    applyMiddleware(...middleware)
  )

  const store = createStore(rootReducer, initialState, enhancer)

  return store
}
