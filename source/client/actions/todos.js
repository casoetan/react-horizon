import { createAction } from 'redux-actions'

export const requestTodos = createAction('request todos')
export const requestPostTodo = createAction('request post todo')
export const requestDeleteTodo = createAction('request delete todo')

export const getTodosSuccessful = createAction('watch todos successful')
