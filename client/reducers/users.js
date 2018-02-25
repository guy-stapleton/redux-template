function users (state = [], action) {
  switch (action.type) {
    case 'DISPLAY_USERS':
    return action.users
    default:
    return state
  }
}


export default users
