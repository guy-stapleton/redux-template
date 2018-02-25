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
  return dispatch => {
    request
      .get(apiUsers)
      .end((err, res) => {
        if (err) {
          return err.message
        }
        dispatch(displayUsers(res.body))
      })
  }
}
