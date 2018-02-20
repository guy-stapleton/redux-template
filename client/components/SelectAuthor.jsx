import React from 'react'

const SelectAuthor = (props) => {
  return (
    <div>
      <select name="author">
        <option value="1">Guy Stapleton</option>
        <option value="2">Carlos Boozer</option>
        <option value="3">Nate Robsinson</option>
      </select>
      <input type="submit" value="Select User" />
    </div>
  )
}

export default SelectAuthor
