import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'

import {testConnection} from '../actions/test'

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
    this.props.dispatch(testConnection())
  }
  render() {
    const xxx = this.props.test
    console.log(xxx)
    return <Router>
      <div>
        <h1>Sparrow CMS</h1>
        <SelectAuthor />
        <p>{xxx.msg}</p>
      </div>
    </Router>
  }
}

const mapStateToProps = (state) => {
  console.log(`I am mapStateToProps`)
  console.log(state)
  return state
}

export default connect(mapStateToProps)(App)
