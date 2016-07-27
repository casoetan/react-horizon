import React, { Component } from 'react'

import { connect } from 'react-redux'

import TodoList from '../TodoList'

import Footer from '../../components/Footer'
import HtmlHead from '../../components/HtmlHead'

import styles from 'styles/app'

class App extends Component {
  render() {
    const { app } = this.props
    return (
      <div>
        <HtmlHead name={app.name} title={app.title} />
        <div className={styles.main}>
          <TodoList limit={100} />
        </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    app: state.app
  }
}

export default connect(
  mapStateToProps
)(App)
