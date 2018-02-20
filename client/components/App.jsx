import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'

import {testConnection} from '../api/api'

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
    console.log("mount")
  }
  render() {
    return <Router>
      <div>
        <h1>Sparrow CMS</h1>
        <SelectAuthor />
      </div>
    </Router>
  }
}
export default connect()(App)
