import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import TodoItem from '../../components/TodoItem'
import TodoAdd from '../../components/TodoAdd'

import style from './style'

import {
  requestTodos,
  requestPostTodo,
  requestDeleteTodo
} from '../../actions/todos'

class TodoList extends Component {
  componentWillMount() {
    const { actions } = this.props
    actions.requestTodos()
  }

  render() {
    const { todos } = this.props
    return (
      <div>
        <header className="header">
          <h1>todos</h1>
          <TodoAdd addTodoAction={this.addNewTodo.bind(this) } />
        </header>
        <section className={style.main}>
          <ul className={style.todoList}>
            {todos.map(
              todo => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  deleteTodoAction={this.deleteTodo.bind(this) } />
              )
            ) }
          </ul>
        </section>
      </div>
    )
  }

  addNewTodo(todo) {
    const { actions } = this.props
    actions.requestPostTodo({ text: todo })
  }

  deleteTodo(todoId) {
    const { actions } = this.props
    actions.requestDeleteTodo(todoId)
  }
}

// TodoList.propTypes = { todos: React.PropTypes.array };
// TodoList.defaultProps = { todos: [] };

const mapStateToProps = (state) => ({ todos: state.todos })

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      requestTodos,
      requestPostTodo,
      requestDeleteTodo
    }, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
