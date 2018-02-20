import React from 'react'

const CreatePost = (props) => {
  return (
    <form>
      <label>
        Title: <br/>
        <input type="text" name="title" />
      </label>
      <label>
        Post:<br/>
        <textarea name="content">

        </textarea>
        <label>
          Tags:<br/>
          <input type="text" name="tags" />
        </label>
        <input type="submit" value="Publish Post"/>
      </label>
    </form>
  )
}

export default CreatePost
