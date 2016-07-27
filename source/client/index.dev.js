import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import { AppContainer } from 'react-hot-loader'
import Redbox from "redbox-react";

import App from './containers/App'

import configure from './store'
const store = configure()

// Define the target container for our application
const rootElement = document.getElementById('root')

// Render application to target container
ReactDOM.render(
  <AppContainer errorReporter={Redbox}>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  rootElement
)

// // react-hot-loader 3 specific - rerender AppContainer
// // in case of problems with react-router, check this issue:
// // https://github.com/gaearon/react-hot-loader/issues/249
if (module.hot) {
  module.hot.accept('./routes', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./containers/App/index').default;
    ReactDOM.render(
      <AppContainer errorReporter={Redbox}>
        <Provider store={store}>
          <NextApp />
        </Provider>
      </AppContainer>,
      rootElement
    )
  })
}
