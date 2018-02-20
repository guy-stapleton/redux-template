import React from 'react'
import {HashRouter as Router, Route} from 'react-dom'

import Error from './Error'
import SelectAuthor from './SelectAuthor'
import Dashboard from './Dashboard'
import PostPublished from './PostPublished'

const App = () => {
  return (
      <div>
        <h1>Sparrow CMS</h1>
        <SelectAuthor />
      </div>
  )
}

export default App
