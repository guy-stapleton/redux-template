import React from 'react'

import AddPost from './AddPost'
import ViewPosts from './ViewPosts'


const Dashboard = (props) => {
  return (
    <div>
      <p>User: </p>
      <p>Number of Posts:</p>
      <AddPost />
      <ViewPosts />
    </div>
  )
}

export default Dashboard
