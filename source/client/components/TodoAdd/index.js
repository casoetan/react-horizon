import React, { Component } from 'react'

import style from './style'

class TodoAdd extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  render() {
    const { addTodoAction } = this.props
    return (
      <input
        id="todo-text"
        className={style.addTodo}
        type="text"
        value={this.state.text}
        placeholder="A new todo item..."
        autoFocus
        onChange={this.handleTextChange.bind(this) }
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            addTodoAction(this.state.text)
            this.setState({text: ''})
          }
        } }
        />
    )
  }

  handleTextChange(event) {
    this.setState({ text: event.target.value })
  }
}

export default TodoAdd
