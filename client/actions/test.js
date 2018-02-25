import request from 'superagent'

const baseUrl = 'http://localhost:3000/api/'

export const handleTest = (test) => {
  return {
    type: 'HANDLE_TEST',
    test
  }
}

export function testConnection() {
  return (dispatch) => {
    request
      .get(baseUrl)
      .end((err, res) => {
        if (err) {
          return err.message
        }
        dispatch(handleTest(res.body))
    })
  }
}
