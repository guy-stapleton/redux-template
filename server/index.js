const server = require('./server')
const db = require('./db/connection')

const app = server(db)

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=> {
  console.log(`The server is running on ${PORT}`)
})
