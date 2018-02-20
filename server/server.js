const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const routes = require('./routes/routes')

app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/api/v1', routes)

module.exports = (db) => {
  app.set('db', db)
  return app
}
