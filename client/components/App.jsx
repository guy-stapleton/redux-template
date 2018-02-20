import React from 'react'
import {HashRouter as Router, Route} from 'react-dom'


import Error from './Error'
import SelectAuthor from './SelectAuthor'
import Dashboard from './Dashboard'

const App = () => {
  return (
    <div>
      <h1>Sparrow CMS</h1>
      <Error />
      <SelectAuthor />
      <Dashboard />
    </div>
  )
}

export default App
