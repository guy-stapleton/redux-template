const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const routes = require('./routes/routes')
const apiRoutes = require('./api/api')
const apiUsers = require('./api/users')

app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/', routes)
app.use('/api/', apiRoutes)
app.use('/api/users', apiUsers)

module.exports = (db) => {
  app.set('db', db)
  return app
}
