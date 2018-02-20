import React from 'react'
import {HashRouter as Router, Route} from 'react-dom'


import Error from './Error'
import SelectAuthor from './SelectAuthor'

const App = () => {
  return (
    <div>
      <h1>Sparrow CMS</h1>
      <Error />
      <SelectAuthor />
    </div>
  )
}

export default App
