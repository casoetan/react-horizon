import Rx, { Observable } from 'rxjs'
import { todoHz } from '../db'

import {
  getTodosSuccessful
} from '../actions/todos'

import {
  showNotification
} from '../actions/app'

const watchTodosEpic = action$ =>
  action$
    .ofType('request todos')
    .merge(
      todoHz
        .watch()
        .catch(err => Observable.of(showNotification(err))) // ideally catch any errors and dispatch a notification
    )
    .do(todos => delete todos.type)
    .map(todos => getTodosSuccessful(todos))

const addTodoEpic = action$ =>
  action$
    .ofType('request post todo')
    .mergeMap(action =>
      todoHz
        .store(action.payload)
        .ignoreElements()
        .takeUntil(action$.ofType('cancel requests'))
        .catch(err => Observable.of(showNotification(err))) // ideally catch any errors and dispatch a notification
    )

const deleteTodoEpic = action$ =>
  action$
    .ofType('request delete todo')
    .mergeMap(action =>
      todoHz
        .remove(action.payload)
        .ignoreElements()
        .takeUntil(action$.ofType('cancel requests'))
        .catch(err => Observable.of(showNotification(err))) // ideally catch any errors and dispatch a notification
    )

export default [watchTodosEpic, addTodoEpic, deleteTodoEpic]
