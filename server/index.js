const server = require('./server')
const knex = require('knex')
const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const db = knex(config)

const app = server(db)

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=> {
  console.log(`The server is running on ${PORT}`)
})

module.exports = db
