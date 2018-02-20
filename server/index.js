const PORT = process.env.PORT || 3000

const app = require('./server')

app.listen(PORT, ()=> {
  console.log(`The server is running on ${PORT}`)
})
