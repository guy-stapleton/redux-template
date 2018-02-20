import request from 'superagent'

const baseUrl = 'http://localhost:3000:/api/v1'

export function testConnection(callback) {
  console.log('I am the test connection function')
  request
  .get(baseUrl)
  .end(err, res => {
    callback(err, res.body)
  })
}
