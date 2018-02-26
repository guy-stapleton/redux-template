import React from 'react'
import {connect} from 'react-redux'

 function SelectAuthor ({users}) {
   console.log(`This is the data in state`)
   console.log(users)
  return (
    <div>
      <select name="author">
        {users.map((user, i) => {
          return <option key={i} value={user.author_id}>{user.name}</option>
        })}
      </select>
      <input type="submit" value="Select User" />
    </div>
  )
}

const mapStateToProps = state => {
  return {users: state.users}
}

export default connect(mapStateToProps)(SelectAuthor)
