import { handleActions } from 'redux-actions'

const initialState = []

export default handleActions({
  'watch todos successful'(state, action) {
    if (Array.isArray(action.payload)) {
      return action.payload
    } else {
      return state
    }
  }
}, initialState)
