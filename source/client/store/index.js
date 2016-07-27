if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.prod') // eslint-disable-line
} else {
  module.exports = require('./configureStore.dev') // eslint-disable-line
}
