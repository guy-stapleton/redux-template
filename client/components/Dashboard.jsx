import React from 'react'

import AddPost from './AddPost'
import ViewPosts from './ViewPosts'
import CreatePost from './CreatePost'

const Dashboard = (props) => {
  return (
    <div>
      <p>User: </p>
      <p>Number of Posts:</p>
      <AddPost />
      <ViewPosts />
      <CreatePost />
    </div>
  )
}

export default Dashboard
