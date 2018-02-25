function getUsers (conn) {
  const db = conn || connection
   return db('authors').select()
}

function getUser() {

}


module.exports = {
  getUsers,
  getUser
}
