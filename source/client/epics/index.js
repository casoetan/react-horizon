import { combineEpics } from 'redux-observable'

import todosEpic from './todos'

const epics = [...todosEpic]

export default combineEpics(...epics)