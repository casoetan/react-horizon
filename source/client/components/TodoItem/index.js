import React, { Component } from 'react'

import style from './style'

class TodoItem extends Component {
  render() {
    const { todo, deleteTodoAction } = this.props
    return (
      <li key={todo.id} className={style.list}>
        <label  className={style.listLabel}>
          {todo.text ||  '-'}
        </label>
        <button className={style.destroyButton} onClick={() => deleteTodoAction(todo.id)} />
      </li>
    )
  }
}

export default TodoItem
