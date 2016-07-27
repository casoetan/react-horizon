import { handleActions } from 'redux-actions'

const initialState = {
  alert: {
    show: false,
    message: ''
  },
  error: {
    state: false,
    stack: null
  }
}

export default handleActions({

  'show notification'(state, action) {
    return Object.assign({}, state, {
      error: {
        state: action.error,
        stack: action.payload.stack
      },
      alert: {
        show: true,
        message: action.payload.message
      }
    })
  },

  'clear notification'(state) {
    return Object.assign({}, state, {
      alert: {
        show: false,
        message: ''
      }
    })
  }

}, initialState)
