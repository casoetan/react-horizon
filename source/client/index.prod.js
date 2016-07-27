import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import App from './containers/App'

import configure from './store'
const store = configure()

// Define the target container for our application
const rootElement = document.getElementById('root')

// Render application to target container
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
