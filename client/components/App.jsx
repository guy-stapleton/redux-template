import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'

import {getUsers} from '../actions/users'

import Error from './Error'
import SelectAuthor from './SelectAuthor'
import Dashboard from './Dashboard'
import PostPublished from './PostPublished'

class App extends React.Component {
  constructor(props) {
  super(props)

  }

  // methods
  componentDidMount() {
    this.props.dispatch(getUsers())
  }
  render() {
    const xxx = this.props.test
    return <Router>
      <div>
        <h1>Sparrow CMS</h1>
        <SelectAuthor />
      </div>
    </Router>
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(App)
