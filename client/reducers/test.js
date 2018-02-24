function test(state = [], action) {
  switch (action.type) {
    case 'HANDLE_TEST':
     return action.test
    default:
    return state
  }
}

export default test
