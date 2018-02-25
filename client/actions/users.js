import request from 'superagent'

const apiUsers = 'http://localhost:3000/api/users'

export function setCurrentUser () {

}

export function displayUsers (users) {
  return {
    type: 'DISPLAY_USERS',
    users
  }
}


export function getUsers() {
  console.log(`This is the getUsers function`)
  return dispatch => {
    request
      .get(apiUsers)
      .end((err, res) => {
        if (err) {
          return err.message
        }
        dispatch(displayUsers(displayUsers(res.body)))
      })
  }
}
