import { createStore, applyMiddleware, compose } from 'redux'

import invariant from 'redux-immutable-state-invariant'
import devTools from 'remote-redux-devtools'

import { createEpicMiddleware } from 'redux-observable'

import { actionLogger } from '../middleware'

import rootReducer from '../reducers'
import rootEpic from '../epics'

export default function configure(initialState) {
  const middleware = [
    invariant(),
    createEpicMiddleware(rootEpic),
    actionLogger
  ]

  const enhancer = compose(
    applyMiddleware(...middleware),
    devTools({
      name: 'react_horizon',
      realtime: true,
      hostname: 'localhost',
      port: 8000,
      maxAge: 30,
      filters: { blacklist: ['EFFECT_RESOLVED'] }
    })
  )

  const store = createStore(rootReducer, initialState, enhancer)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
